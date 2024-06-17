// The module containing all the functions poll message callback query

import type { User, InlineKeyboardButton } from "telegraf/types";
import type { CbQuery } from "../../types";
import { Scenes } from "telegraf";
import {
  type PollConfig,
  POLL_TYPES,
  createConfig
} from "./config";
import * as utils from "../../utils";
import { DEFAULT_POLL_CONFIG } from "./defaults";
import { createNumberOfPeoplePortion, SINGLE_CHOICE_POLL_MARK } from "./utils";


// The regex to get the maximum number of entries from the
// poll option header.
// The [^\S\r\n] group matches all spaces except for new line characters,
// which is what we want here
const getMaxEntriesRegex = /\d+[^\S\r\n]*\/[^\S\r\n]*(\d+)/;


// The regex to get the numbering style from the poll option segment
export const numberingStyleRegex = /[->=+~•·([{<]?\d*[).\]}>]?/;


// The regex to get the numbering style
// and the name from the poll option segment.
// The [^\S\r\n] group matches all spaces except for new line characters,
// which is what we want here
const numberingStyleAndNameRegex = new RegExp(
  String.raw`^[^\S\r\n]*?(${
    numberingStyleRegex.source
  })[^\S\r\n]*(.*?)[^\S\r\n]*()$`,
  "gm"
);


// The regex to create the numbering from the numbering style
const createNumberingRegex = /\d+/;


// Function to create the numbering from the numbering style
function createNumbering(numberingStyle: string, index: number) {
  return numberingStyle.replace(createNumberingRegex, `${index + 1}`);
}

// Function to get the index or a default value
// if the index is not found (indexOf returns -1 if not found).
// It is like the dictionary.get function in python,
// but with message indexes
function getIndexOrDefaultValue(
  index: number,
  defaultValue: number = 0
) {
  return index === -1 ? defaultValue : index;
}


// Function to get the poll option segment
export function getPollOptionSegment(message: string, pollOption: string) {

  // Gets the index of the poll option in the message
  // and set it to zero if the index is not found.
  // For now, I think it's okay to have it match from
  // the beginning of the line, as I don't intend
  // to have the format string have anything before the
  // poll option.
  const pollOptionIndex = message.match(
    new RegExp(String.raw`^\b${pollOption}\b`, "m")
  )?.index ?? 0;

  // Initialise the variable to store the index of the
  // new line before the poll option segment
  let newLineBeforePollOptionIndex = 0;

  // Iterates backwards from the poll option index
  for (let index = pollOptionIndex; index > 0; --index) {

    // If the character is not a new line character,
    // continue the loop
    if (message[index] !== "\n") continue;

    // Otherwise, set the index of the new line before the poll option
    newLineBeforePollOptionIndex = index;

    // Breaks out of the loop
    break;
  }

  // Get the length of the message
  const messageLength = message.length;

  // Find the index of the new line after the poll option
  const newLineAfterPollOptionIndex = getIndexOrDefaultValue(
    message.indexOf("\n", pollOptionIndex), messageLength
  );

  // Gets the entire line that the poll option is on
  const pollOptionLine = message.slice(
    newLineBeforePollOptionIndex + 1,
    newLineAfterPollOptionIndex
  );

  // Searches for the next double new line in the message slice
  // after the poll option
  const doubleNewLineIndex = getIndexOrDefaultValue(
    message.indexOf("\n\n", newLineAfterPollOptionIndex + 1), messageLength
  );

  // Gets the part of the message with the list of names
  const pollOptionNameSegment = message.slice(
    newLineAfterPollOptionIndex, doubleNewLineIndex
  ).trim();

  // Returns the name part of the poll option segment
  return {
    pollOptionNameSegment: pollOptionNameSegment,
    pollOptionLine: pollOptionLine
  };
}


// Function to get the maximum number of entries for a poll option
function getPollOptionMaxEntries(pollOptionLine: string) {

  // Search for the maximum entries in line containing the poll option
  const match = pollOptionLine.match(getMaxEntriesRegex);

  // Gets the max entries for the poll from the match.
  // The regex.match function returns null if no match is found,
  // so returning an array with two null values instead of null allows
  // the destructuring to still work.
  const [, maxEntries] = match ?? [null, null];

  // Returns the maximum number of entries that has been gotten from
  // the poll option line.
  // If the maximum number of entries isn't found,
  // which means maxEntries is null, then return infinity for no limit
  return maxEntries == null ? Infinity : parseInt(maxEntries);
}


// Function to regenerate the poll portion for a given poll option
export function regeneratePollPortion(
  message: string,
  pollOption: string,
  isSelectedPollOption: boolean,
  pollConfig: Required<PollConfig>,
  givenName: string | null,
  tagString: string | null = null,
) {

  // Gets the poll option segment of the message
  const {
    pollOptionNameSegment, pollOptionLine
  } = getPollOptionSegment(message, pollOption);

  // Get the maximum number of entries from the poll option line
  const maxEntries = getPollOptionMaxEntries(pollOptionLine);

  // Initialise the regular expression to the
  // globally defined numbering style and name regex
  let regex = numberingStyleAndNameRegex;

  // If the tag string is given
  if (tagString) {

    // Escape all the characters in the tag string
    const escapedTagString = utils.regexEscape(tagString);

    // Recreate the regular expression to add the tag string
    regex = new RegExp(
      `${numberingStyleAndNameRegex.source.replace(
        /\(\)\$$/, `((?:${escapedTagString})?)$`
      )}`,
      numberingStyleAndNameRegex.flags
    );
  }

  // Get the numbering style and the names
  // from the poll option segment
  const matches = Array.from(
    pollOptionNameSegment.matchAll(regex)
  );

  console.log(`Matches: ${matches}`);

  // Initialise the numbering styles variable
  let numberingStyle: string = pollConfig.numberingStyle;

  // Initialise the encountered variable
  // to indicate whether the given name has been
  // encountered or not
  let encountered = false;

  // Initialised the removed variable
  // This variable indicates whether the name has been added
  // or removed to the poll option, and a null value means that
  // the person failed to be added to the list.
  let removed: boolean | null = null;

  // Initialise the tagged variable
  // This variable indicates whether
  // the name has been tagged or not.
  // If the value is null,
  // that means the person's name
  // hasn't been added to the list.
  let tagged: boolean | null = null;

  // Initialise the list of string to get the poll portion
  const pollPortionList: string[] = [];

  // Initialise the list of names
  const names: string[] = [];

  // Iterates over the matches
  for (const [index, [, numStyle, name, tag]] of matches.entries()) {

    // If it's the first item
    if (index === 0) {

      // Set the numbering style
      numberingStyle = numStyle;
    }

    // Gets the trimmed name
    const trimmedName = name.trim();

    // If the name is empty, continue the loop
    if (!trimmedName) continue;

    // Create the numbering
    const numbering = createNumbering(numberingStyle, index);

    // The condition where the encountered name is the given name
    const encounteredNameIsGivenName = pollConfig.isSameNameFunc(
      trimmedName, givenName
    );

    // If the name is the given name
    // and the poll option is the selected one
    if (encounteredNameIsGivenName && isSelectedPollOption) {

      // Set the encountered variable to true
      encountered = true;

      // If no tag string is given
      if (!tagString) {

        // Set the removed variable to true
        removed = true;

        // Continue the loop to remove the name from the list
        continue;
      }

      // Otherwise, if the tag string is given
      else {

        // If the tagged variable has not been set
        if (tagged == null) {

          // Sets the tagged variable.
          // If the tag exists, remove the tag and set tagged to false.
          // Otherwise, add the tag and set tagged to true
          tagged = tag ? false : true;
        }

        // If the tagged variable is true,
        // that means the entry should be tagged.
        // Otherwise, the entry shouldn't be tagged and an empty string
        // should be left in its place.
        // Also add the numbering style and the name to the poll.
        pollPortionList.push(
          `${numbering} ${trimmedName} ${tagged ? tagString : ""}`.trim()
        );
      }
    }

    // Otherwise, if the name is the given name
    // and the poll is a single choice poll
    else if (encounteredNameIsGivenName && pollConfig.isSingleChoicePoll) {

      console.log("Single choice poll hit");

      // Continue the loop to remove the name from the poll
      continue;
    }

    // Otherwise,
    // if the name is not the given name
    // or the poll option is not the one selected
    else {

      // Adds the numbering style, name, and the tag
      // to the poll portion list
      pollPortionList.push(`${numbering} ${trimmedName} ${tag}`.trim());
    }

    // Add the name to the list of names
    names.push(trimmedName);
  }

  // The condition to add the person to the poll message.
  // Which is that the poll option must be selected,
  // the name must be given,
  // the name must not have been encountered earlier when iterating through
  // the list of people for the poll option,
  // the name is not being tagged as
  // the absence of a tag string means tagging isn't wanted and
  // the length of the list of names must be less than
  // the maximum number of entries.
  // Tagging should not be done as the person should already be
  // in the list to be tagged.
  const canAddToPoll = (
    isSelectedPollOption
    && givenName
    && !encountered
    && !tagString
    && names.length < maxEntries
  );

  console.log(`canAddToPoll: ${canAddToPoll}`);
  console.log(`isSelectedPollOption: ${isSelectedPollOption}`);
  console.log(`givenName: ${givenName}`);
  console.log(pollPortionList);
  console.log(names);

  // If all the conditions to add the person to the poll message
  // are fulfilled.
  if (canAddToPoll) {

    // Set the removed variable to false,
    // which means the person has been added to the list
    // The removed variable being null means the person
    // failed to be added to the poll.
    removed = false;

    // Adds the given name to the list
    // This is done first as the createNumbering function
    // increases the given index by 1
    pollPortionList.push(
      `${createNumbering(numberingStyle, names.length)} ${givenName}`.trim()
    );

    // Adds the name to the list of names
    names.push(givenName);
  }

  console.log("Post adding");
  console.log(pollPortionList);
  console.log(names);

  // If the numbering style is not NONE,
  // and there are no names on the poll option,
  // or if the lines in the poll message should be preserved
  if (numberingStyle && names.length < 1 || pollConfig.preserveLines) {

    // Set the maximum number of lines to the maximum number of entries.
    // If the maximum number of entries is infinity, then set the
    // maximum number of entries to 0, as there's no maximum.
    // The preserve lines option is to preserve the number of lines
    // when there is a limit on the number of people for the poll.
    // It wouldn't make sense to keep on increasing the number of lines,
    // especially if people remove their names from the poll,
    // as the lines will still be there.
    let maxNumberOfLines = Number.isFinite(maxEntries) ? maxEntries : 0;

    // If the maximum number of lines is less than 1,
    // and there is no one left on the poll,
    // then set the maximum number of lines to 1.
    // This is so that the numbering style can still be preserved
    // even when there are no names on the poll
    if (maxNumberOfLines < 1 && names.length < 1) maxNumberOfLines = 1;

    // Iterates from the number of people to the maximum number of lines
    for (let index = names.length; index < maxNumberOfLines; ++index) {

      // Adds the numbering to the list
      pollPortionList.push(
        `${createNumbering(numberingStyle, index)}`.trim()
      );
    }
  }

  // Gets the poll portion header
  const pollPortionHeader = createNumberOfPeoplePortion(
    names.length,
    pollConfig.formatOptions.pollOptionHeader,
    pollConfig,
    { pollOption: pollOption },
    maxEntries,
  );

  // Create the poll portion for the given poll option
  const pollPortion = `${pollPortionHeader}\n${
    utils.stripHtml(pollPortionList.join("\n").trim())
  }`;

  // Returns the poll portion
  // and the number of people responded to this poll portion
  return {
    pollPortion: pollPortion,
    names: names,
    nameRemoved: removed,
    nameTagged: tagged
  };
}


// Function to reform the poll message
export function reformPollMessage(
  message: string,
  pollMessage: string,
  selectedPollOption: string,
  pollOptions: string[],
  name: string,
  pollConfig: Required<PollConfig>,
  tagString: string | null = null,
) {

  // The list that contains the final message
  const reformedPollMessageList: string[] = [];

  // The list containing the people who responded to the poll
  let peopleResponded: string[] = [];

  // Initialise the variable to indicate whether the person has been added
  // or removed from the poll
  let removed: boolean | null = null;

  // Initialise the variable to indicate whether the name has been
  // tagged or untagged on the poll
  let tagged: boolean | null = null;

  // Adds the poll message and the selected poll portion
  // to the reformed poll message list
  reformedPollMessageList.push(pollMessage);

  // Iterates the list of poll options
  for (const pollOption of pollOptions) {

    // The boolean variable that indicates if the poll option is selected
    let isSelectedPollOption = pollOption === selectedPollOption;

    // If the tag string is given,
    // and all of the entries should be tagged,
    // then indicate that the poll option is selected
    if (pollConfig.tagAll && tagString) isSelectedPollOption = true;

    // Calls the function to generate the poll portion
    // and get the number of people who responded to that poll option
    const {
      pollPortion,
      names,
      nameRemoved,
      nameTagged
    } = regeneratePollPortion(
      message,
      pollOption,
      isSelectedPollOption,
      pollConfig,
      (isSelectedPollOption || pollConfig.isSingleChoicePoll) ? name : null,
      tagString,
    );

    // Adds the poll portion to the reformed poll message list
    reformedPollMessageList.push(pollPortion);

    // Adds the people who responded to the poll option
    // to the list of people who responded
    peopleResponded = peopleResponded.concat(names);

    // If the nameRemoved variable isn't null,
    // then set the removed variable to its value
    if (nameRemoved != null) removed = nameRemoved;

    // If the nameTagged variable isn't null,
    // then set the tagged variable to its value
    if (nameTagged != null) tagged = nameTagged;
  }

  // Gets the number of unique people who responded
  const numResponded = new Set(peopleResponded).size;

  // The portion of the message that says how many people responded
  const respondedPortion = createNumberOfPeoplePortion(
    numResponded, pollConfig.formatOptions.messageFooter, pollConfig
  );

  // Adds the responded portion to the reformed message list
  reformedPollMessageList.push(respondedPortion);

  // Reform the poll message
  const reformedPollMessage = reformedPollMessageList.join(
    pollConfig.pollSpacing
  );

  // Returns the reformed poll message
  return {
    reformedPollMessage: reformedPollMessage.trim(),
    removed: removed,
    tagged: tagged
  };
}


// Function to get the name of the user
export function getName(user: User) {
  return `${user.first_name} ${user.last_name ?? ""}`.trim();
}


// Function to get the list of poll options
export function getPollOptions(inlineKeyboard: InlineKeyboardButton[][]) {

  // The list of poll options
  const pollOptions = [];

  // Iterates the list of inline keyboard rows
  for (const inlineKeyboardRow of inlineKeyboard) {

    // Iterates over the list of inline keyboard buttons in a row
    for (const inlineKeyboardButton of inlineKeyboardRow) {

      // Gets the text for the inline keyboard button
      const text = inlineKeyboardButton.text;

      // Adds the text to the list of poll options
      pollOptions.push(text);
    }
  }

  // Returns the list of poll options
  return pollOptions;
}


// Function to get the poll message
export function getPollMessage(message: string, pollOptions: string[]) {

  // Gets the index of the first poll option in the message
  const firstPollOptionIndex = message.indexOf(pollOptions[0]);

  // Returns the poll message with the first line bolded
  return utils.boldFirstLine(message.slice(0, firstPollOptionIndex).trim());
}


// Function to handle a callback query
export async function callbackHandler(
  ctx: Scenes.WizardContext,
  next: () => Promise<void>
) {

  // Gets the callback query object
  const callbackQuery = ctx.callbackQuery as CbQuery;

  // Get the message from the callback query
  const message = callbackQuery.message;

  // Gets the message text
  const messageText = message.text;

  // If the poll type isn't found in the message,
  // calls the next() function and
  // immediately exit the function so that
  // another handler can take care of the message
  if (!messageText.includes(POLL_TYPES.DEFAULT)) return await next();

  // Gets the poll option and the poll message
  const pollOption = callbackQuery.data;

  // If the poll option doesn't exist, then tells the user
  if (messageText.indexOf(pollOption) === -1) {
    return await ctx.answerCbQuery(
      `The option "${
        pollOption
      }" doesn't exist on the poll you are responding to.`
    );
  }

  // Gets the list of poll options
  const pollOptions = getPollOptions(message.reply_markup.inline_keyboard);

  // Gets the poll message
  const pollMessage = getPollMessage(messageText, pollOptions);

  // Gets the name of the person responding
  const name = getName(callbackQuery.from);

  // Initialise the poll configuration object
  const pollConfig = createConfig<PollConfig>({}, DEFAULT_POLL_CONFIG);

  // If the message contains the single poll option mark
  if (messageText.includes(SINGLE_CHOICE_POLL_MARK)) {

    // Set the single choice poll option to true
    pollConfig.isSingleChoicePoll = true;
  }

  // Gets the reformed poll message
  // and the variable to indicated whether the person has been added
  // or removed from the poll option
  const { reformedPollMessage, removed } = reformPollMessage(
    messageText,
    pollMessage,
    pollOption,
    pollOptions,
    name,
    pollConfig,
  );

  // Answers the callback query
  await ctx.answerCbQuery(
    `Your name has been ${removed ? "removed from" : "added to"
    } '${pollOption}'!`
  );

  // Edit the message with the reformed poll message
  return await ctx.editMessageText(reformedPollMessage, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: message.reply_markup.inline_keyboard
    }
  });
}
