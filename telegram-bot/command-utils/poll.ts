// The utility functions for the poll command

import * as utils from "../utils";
import type { Context } from "telegraf";
import type { User, InlineKeyboardButton } from "telegraf/types";
import { SPACING } from "../../src/lib/constants";


// The default poll options
export const DEFAULT_POLL_OPTIONS = ["Coming"];

// The regex for the poll message command
export const pollMessageRegex = /^\/?\bpoll_?(?:msg|message)?\b/i;


// Function to generate the inline keyboard markup
export function generateInlineKeyboard(pollOptions: string[] = DEFAULT_POLL_OPTIONS) {

  // The list of inline keyboard buttons
  const inlineKeyboard = [];

  // Iterates over the poll options and add their buttons to the list
  for (const pollOption of pollOptions) {

    // Adds the poll option button to the list
    inlineKeyboard.push([{
      text: pollOption,
      callback_data: pollOption
    }]);
  }

  // Returns the inline keyboard object
  return inlineKeyboard;
}


// Function to generate the callback function for the poll message command
export function generatePollMessage(message: string, pollOptions: string[]) {

  // Remove the command from the message
  message = message.replace(pollMessageRegex, "").trim();
  
  // Generate the portion of the message that is a poll
  const pollPortion = `${pollOptions.map(option => `${utils.bold(option)}`).join(SPACING)}${SPACING}👥 Nobody responded`;

  // Gets the inline keyboard
  const inlineKeyboard = generateInlineKeyboard(pollOptions);
  
  // The callback function
  async function callback(ctx: Context, input: string) {

    // Bold the first line of the input
    input = utils.boldFirstLine(input);

    // Sends a poll with the user's input
    return await ctx.reply(`${input}\n\n${pollPortion}`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: inlineKeyboard
      }
    });
  }

  // Returns the message and the callback function
  return {message: message, callback: callback};
}




// All functions relating to the callback query from the poll

// Function to get the poll option segment
export function getPollOptionSegment(message: string, pollOption: string) {

  // Gets the index of the poll option in the message and set it to zero if the index is not found
  const pollOptionIndex = message.indexOf(pollOption) === -1 ? 0 : message.indexOf(pollOption);

  // Find the index of the new line after the poll option
  let newLineAfterPollOptionIndex = message.indexOf("\n", pollOptionIndex);

  // Sets the index of the new line after the poll option to 0 if it's not found
  newLineAfterPollOptionIndex = newLineAfterPollOptionIndex === -1 ? 0 : newLineAfterPollOptionIndex;

  // Searches for the next double new line in the message slice after the poll option
  let doubleNewLineIndex = message.indexOf("\n\n", newLineAfterPollOptionIndex + 1);

  // Set the index for the next double new line to the end of the message if it's not found
  doubleNewLineIndex = doubleNewLineIndex === -1 ? message.length : doubleNewLineIndex;

  // Gets the part of the message with the list of names
  const pollOptionSegment = message.slice(newLineAfterPollOptionIndex, doubleNewLineIndex).trim();

  // Returns the part of the message with the list of names
  return pollOptionSegment;
}


// Function to create the poll portion for a given poll option
export function createPollPortion(message: string, pollOption: string, isSelected: boolean, name: string) {

  // Gets the poll option segment of the message
  const pollOptionSegment = getPollOptionSegment(message, pollOption);

  // Initialise the list of names
  let names: string[];

  // Initialised the removed variable (the variable to indicate whether the name has been added or removed to the poll option)
  let removed: boolean | null = null;

  // If the poll option segment is empty, then the list of names would be an empty list
  if (pollOptionSegment.length === 0) names = [];

  // Otherwise, the list of names is the list of names in the poll option segment
  else names = pollOptionSegment.split("\n");

  // Checks if the poll option is selected and the name is given
  if (isSelected && name) {

    // Checks if the name is included in the list
    if (names.includes(name)) {

      // Remove the name from the list of names
      names = names.filter(aName => aName !== name);

      // Sets the removed variable to true
      removed = true;
    }

    // Otherwise
    else {

      // Adds the name to the list of names
      names.push(name);

      // Sets the removed variable to false
      removed = false;
    }
  }

  // Create the poll portion for the given poll option
  const pollPortion = `${utils.bold(`${pollOption}${names.length === 0 ? "" : ` (${names.length}👥)`}`)}\n${names.join("\n")}`;

  // Returns the poll portion and the number of people responded to this poll portion
  return {pollPortion: pollPortion, names: names, nameRemoved: removed};
}


// Function to reform the poll message
export function reformPollMessage(message: string, pollMessage: string, selectedPollOption: string, pollOptions: string[], name: string) {

  // The list that contains the final message
  const reformedPollMessageList: string[] = [];

  // The list containing the people who responded to the poll
  let peopleResponded: string[] = [];

  // Initialise the variable to indicate whether the person has been added or removed from the poll
  let removed: boolean | null = null;

  // Adds the poll message and the selected poll portion to the reformed poll message list
  reformedPollMessageList.push(pollMessage);

  // Iterates the list of poll options
  for (const pollOption of pollOptions) {

    // The boolean variable that indicates if the poll option is selected
    const isSelected = pollOption === selectedPollOption;

    // Calls the function to generate the poll portion and get the number of people who responded to that poll option
    const { pollPortion, names, nameRemoved } = createPollPortion(message, pollOption, isSelected, isSelected ? name : "");

    // Adds the poll portion to the reformed poll message list
    reformedPollMessageList.push(pollPortion);

    // Adds the people who responded to the poll option to the list of people who responded
    peopleResponded = peopleResponded.concat(names);

    // If the nameRemoved variable isn't null, then set the removed variable to its value
    if (nameRemoved !== null) removed = nameRemoved;
  }

  // Gets the number of unique people who responded
  const numResponded = new Set(peopleResponded).size;

  // The portion of the message that says how many people responded
  const respondedPortion = `👥 ${numResponded === 0 ? "Nobody" : numResponded === 1 ? "1 person" : `${numResponded} people`} responded`;

  // Adds the responded portion to the reformed message list
  reformedPollMessageList.push(respondedPortion);

  // Reform the poll message
  const reformedPollMessage = reformedPollMessageList.join("\n\n");

  // Returns the reformed poll message
  return {reformedPollMessage: reformedPollMessage, removed: removed};
}


// Function to get the name of the user
export function getName(user: User) {
  return `${user.first_name} ${user.last_name ?? ""}`.trim();
}


// Function to get the list of poll options
export function getPollOptions(inline_keyboard: InlineKeyboardButton[][]) {

  // The list of poll options
  const pollOptions = [];

  // Iterates the list of inline keyboard buttons
  for (const inlineKeyboardButton of inline_keyboard) {

    // Gets the text for the inline keyboard button
    const text = inlineKeyboardButton[0].text;

    // Adds the text to the list of poll options
    pollOptions.push(text);
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

