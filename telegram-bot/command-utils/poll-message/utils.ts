// The module containing all the utility functions for the poll message

import type { FormatOption, PollConfig } from "./config";
import { Scenes } from "telegraf";
import * as utils from "../../utils";
import { removeCommand } from "../../bot-utils";

// The regex to create the numbering from the numbering style
const createNumberingRegex = /\d+/;

// The string to mark a poll as one with only one choice
const SINGLE_CHOICE_POLL_MARK = utils.generateZeroWidthCode("single");


// Function to create the numbering from the numbering style
function createNumbering(numberingStyle: string, index: number) {
  return numberingStyle.replace(createNumberingRegex, `${index + 1}`);
}


// Function to create the number of people portion of the poll message.
export function createNumberOfPeoplePortion(
  numberOfPeople: number,
  formatOption: FormatOption,
  pollConfig: PollConfig,
  additionalSubstitutions: { [key: string]: string } = {},
  maxEntries: number | null = null,
) {

  // Initialise the number format string
  let numberFormatString: string | null | undefined = null;

  // Switch statement to get the correct format string
  switch (numberOfPeople) {

    // The default case, where the number of people
    // is not 0 or 1
    default:
      numberFormatString = formatOption.default;
      break;

    case 0:
      numberFormatString = formatOption.zero;
      break;

    case 1:
      numberFormatString = formatOption.one;
      break;
  }

  // If the number format string is null,
  // set the number format string to the default one
  if (numberFormatString == null) {
    numberFormatString = formatOption.default;
  }

  // Set the maximum number of entries to 0 if it is infinity
  // and the given number it is not.
  // Cast the maxEntries variable to a number as well.
  // For some reason typescript just doesn't understand
  // the isFinite check also checks for null and undefined
  // and will return false in those cases.
  maxEntries = Number.isFinite(maxEntries) ? maxEntries as number : 0;

  // Gets the format arguments.
  // Show an infinity symbol when there is no maximum number of entries,
  // which is when the maximum number of entries is less than 1.
  const formatArgs: { [key: string]: number | string } = {
    number: numberOfPeople,
    maxEntries: maxEntries < 1 ? "∞" : maxEntries
  };

  // If the number of remaining slots on the poll option is wanted
  if (pollConfig.showRemaining) {

    // Set the number to the absolute value of the number of remaining slots.
    // This will show the number of people that responded to the poll
    // when the maximum number of entries is zero instead of the
    // remaining number of slots.
    formatArgs["number"] = Math.abs(maxEntries - numberOfPeople);
  }

  // Gets the string for the number of people who responded
  const numberOfPeopleString = utils.strFormat(
    numberFormatString,
    formatArgs
  );

  // Gets the number of people portion of the poll message
  const numberOfPeoplePortion = utils.strFormat(
    formatOption.formatStr,
    { people: numberOfPeopleString, ...additionalSubstitutions }
  ).trim();

  // Returns the number of people portion of the poll message
  // and bold it if it is needed
  return formatOption.bold ? utils.bold(
    numberOfPeoplePortion
  ) : numberOfPeoplePortion;
}


// Function to create the poll portion of the poll message
export function createPollPortion(pollConfig: Required<PollConfig>) {

  // The list to contain the strings in the poll portion
  const pollPortionList: string[] = [];

  // Iterates over all the poll options
  for (const [index, pollOption] of pollConfig.pollOptions.entries()) {

    // The list containing the lines in the poll option
    // The first line is the poll option header
    const pollOptionLines: string[] = [];

    // Gets the max entries for the poll option
    const maxEntries = pollConfig.maxEntriesList[index] ?? 0;

    // If the numbering style is present,
    // and the maximum number of entries less than 1,
    // or the lines are to be preserved.
    // This is to generate one empty line with the numbering style
    // so that the callback query knows what numbering style is being used
    if (
      pollConfig.numberingStyle && maxEntries < 1 || pollConfig.preserveLines
    ) {

      // Set the maximum number of lines to the maximum number of entries
      // unless the maximum number of entries is less than 1,
      // then the maximum number of lines is set to 1.
      const maxNumberOfLines = maxEntries < 1 ? 1 : maxEntries;

      // Iterates until the maximum number of lines is hit
      for (let i = 0; i < maxNumberOfLines; ++i) {

        // Add the numbering style to the list of poll option lines
        pollOptionLines.push(
          `${createNumbering(pollConfig.numberingStyle, i)}`
        );
      }
    }


    // Create the poll option header
    const pollOptionHeader = createNumberOfPeoplePortion(
      0,
      pollConfig.formatOptions.pollOptionHeader,
      pollConfig,
      { pollOption: pollOption },
      maxEntries,
    );

    // Adds the lines in the poll option to the list
    pollPortionList.push(
      `${pollOptionHeader}\n${utils.stripHtml(pollOptionLines.join("\n"))
      }`
    );
  }

  // Returns the poll portion
  return `${
    pollPortionList.join(pollConfig.pollSpacing)
  }${pollConfig.pollSpacing}${createNumberOfPeoplePortion(
    0, pollConfig.formatOptions.messageFooter, pollConfig
  )}`.trim();
}


// Function to generate the callback function for the poll message command
export function generatePollMessage(
  message: string,
  pollConfig: Required<PollConfig>,
) {

  // Remove the command and the bot's username from the message
  message = removeCommand(message);

  // Generate the portion of the message that is a poll
  const pollPortion = createPollPortion(pollConfig);

  // Create the inline keyboard
  const inlineKeyboard = pollConfig.inlineKeyboardGenerator(
    pollConfig.pollOptions
  );

  // The callback function
  async function callback(ctx: Scenes.WizardContext, input: string) {

    // Bold the first line of the input
    input = utils.boldFirstLine(input);

    // Sends a poll with the user's input
    return await ctx.reply(
      `${input}${pollConfig.pollType}${
        pollConfig.isSingleChoicePoll ? SINGLE_CHOICE_POLL_MARK : ""
      }${pollConfig.pollSpacing}${pollPortion}`,
      {
        parse_mode: "HTML",
        ...inlineKeyboard
      }
    );
  }

  // Returns the message and the callback function
  return { userMessage: message, callback: callback };
}
