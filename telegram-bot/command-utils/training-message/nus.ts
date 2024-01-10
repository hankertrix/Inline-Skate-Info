// Module to create the training message for NUS

import type { TrainingMessageFunction } from ".";
import { Scenes, Composer } from "telegraf";
import * as filters from "telegraf/filters";
import type { DateMapping } from "../../types";
import * as utils from "../../utils";
import * as trgMsgUtils from "./utils";
import {
  removeCommand,
  cancelCommand,
  removeBotUsername,
  createWizardScene,
  deleteMessages,
  markMessageForDeletion,
  wrapCallbackWithMessageDeleter,
  promptUserForInput,
  generateInlineKeyboard,
} from "../../bot-utils";
import {
  DEFAULT_FORMAT_OPTIONS,
  DEFAULT_NUMBERING_STYLE,
  POLL_TYPES,
  generatePollMessage
} from "../poll";


// The location of the training
const trainingLocation = "MPCs 14/15 & 16/17";

// The training dates
const trainingDates = ["2023-02-21T18:30:00.000", "2023-02-23T18:30:00.000"];

// The payment link
const paymentLink = "https://nusfastpay.nus.edu.sg/skaterental24";

// The treasurer
const treasurer = "@weiiiiixiang";

// The rental message
const rentalMsg = `
For this week's rentals, please contact {username} and let us know your SIZE IN EU.  (〃'▽'〃)

Thereafter, make payment via ${paymentLink} and send screenshot of payment page to ${treasurer}

Collection and return of rentals will be at the cage at 6.30pm and 9.30pm. (๑•‌ ₃ •‌๑)

P.S. rentals are first come first serve. (。•‌︿•‌。)
`;

// The training message
const trainingMsg = `Skate Session for {weekType}

As always, poll to join cca or remove your name otherwise! (ó﹏ò｡)
{rentals}
Venues: {location}`;




// The regular expression to pull the username from the message
const usernameRegex = /@\w+/i;

// The regular expression string to match the type of week
const typeOfWeekRegexStr = "(?:exam|recess|reading|summer|winter)";

// The regular expression to get the week from the message
const weekRegex = new RegExp(String.raw`${typeOfWeekRegexStr}?[ _-]?(?:weeks?|breaks?)[ _-]?\d*`, "i");

// The regular expression to get whether or not the training message should have rentals
const noRentalsRegex = /no[ _-]?re(?:nt|tn)(?:al)?s?/i;

// The name of the validator scene for the NUS training message
const sceneName = "nusValidator";


// Function to get the regular expression match in a saner way
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
function getRegexMatch(match: RegExpMatchArray | null, defaultValue: any = null) {

  // If the match given is null, immediately return the default value
  if (!match) return defaultValue;

  // Otherwise, return the match
  else return match[0];
}


// Function to normalise the week passed
function normaliseWeek(week: string) {

  // Tries to get the type of the week
  const weekType = getRegexMatch(
    week.match(new RegExp(typeOfWeekRegexStr, "i")), ""
  ) as string;

  // Tries to get the week number
  const weekNum = getRegexMatch(
    week.match(/\d+/), ""
  );
  
  // Set the middle word to "Break" if the week type is "summer" or "winter"
  const middleWord = ["summer", "winter"].includes(weekType) ? "Break Week" : "Week";

  // Create the week string
  const weekStr = `${utils.titlecase(weekType)} ${middleWord} ${weekNum}`.trim();

  // Returns the week string
  return weekStr;
}


// Function to get the username and week number from the message
function getRequiredArgs(message: string): [string | null, boolean, string | null] {

  // Removes the trailing whitespace from the message
  message = message.trim();

  // Tries to get if rentals aren't wanted for the week
  const noRentals: boolean = !!message.match(noRentalsRegex);

  // Tries to get the username from the message
  const username = getRegexMatch(message.match(usernameRegex));

  // Tries to get the week from the message
  let week = getRegexMatch(message.match(weekRegex));

  // If the week isn't null, normalise the week
  if (week != null) week = normaliseWeek(week);

  // Returns the week, the noRentals boolean and the username
  return [week, noRentals, username];
}


// Function to generate the training message
function generateTrgMsg(message: string, location: string, noRentals: boolean, weekType: string, username: string = "") {

  // Gets the formatted message
  const formattedMsg = utils.strFormat(message, {
    location: location,
    rentals: noRentals ? "" : rentalMsg,
    username: username,
    weekType: weekType
  });

  // Returns the formatted message
  return formattedMsg;
}


// Function to format a date
function formatDate(date: Date) {

  // Gets the date string
  const dateStr = Intl.DateTimeFormat("en-SG", {
    day: "2-digit",
    month: "short"
  }).format(date);

  // Return the formatted date
  return `${dateStr} (${utils.getDayStr(date).replace(/Tue/, "Tues").replace(/Thu/, "Thurs")}) ${utils.getTimeStr(date)} - ${utils.getTimeStr(
    utils.addHours(date, 3)
  )}`;
}


// Function to generate the poll options
function generatePollOptions(dateMapping: DateMapping) {

  // Gets the upcoming training dates
  const upcomingTrainingDates = trgMsgUtils.getUpcomingTrainingDates(dateMapping, 2) as Date[];

  // Returns the poll options
  return upcomingTrainingDates.map(date => formatDate(date));
}


// Function to combine generating the training message and the poll options into one
function createTrainingPollMsg(message: string, location: string, noRentals: boolean, weekType: string, username: string, trainingDates: string[]) {

  // Returns the result of the generate poll message with the generate
  return generatePollMessage(
    generateTrgMsg(
      message, location,
      noRentals, weekType, username
    ),
    generatePollOptions(
      trgMsgUtils.createDateMapping(trainingDates)
    ),
    [],
    DEFAULT_NUMBERING_STYLE,
    DEFAULT_FORMAT_OPTIONS,
    POLL_TYPES.DEFAULT,
    generateInlineKeyboard
  );
}


// Function to create a training message with a custom message
function createCustomTrgMsg(message: string, trainingDates: string[]) {

  // Returns the result of the generate poll message function
  return generatePollMessage(
    message,
    generatePollOptions(
      trgMsgUtils.createDateMapping(trainingDates)
    ),
    [],
    DEFAULT_NUMBERING_STYLE,
    DEFAULT_FORMAT_OPTIONS,
    POLL_TYPES.DEFAULT,
    generateInlineKeyboard
  );
}


// Function to handle the training message command for NUS
export async function handler(
  ...[ctx, msg]: Parameters<TrainingMessageFunction>
): ReturnType<TrainingMessageFunction> {

  // If the message is empty, immediately enters the scene to get the required information for the NUS training message
  if (!msg) return await ctx.scene.enter(sceneName, {
    messagesToDelete: []
  });

  // Gets the week, whether or not there are rentals, and the username
  const [week, noRentals, username] = getRequiredArgs(msg);

  // If the message given has a length of more than 50 characters, it likely means the user wants a custom message
  if (msg.length > 50) {

    // Creates a poll message with the custom message, but with the training dates as options, like the default training message
    const { message, callback } = createCustomTrgMsg(msg, trainingDates);

    // Calls the callback function to send the message
    await callback(ctx, message);
    
    // Tries to delete the message sent by the user
    await deleteMessages(ctx, ctx.message.message_id);
  }

  // If either the username or the week is null,
  // then enters the scene to ask for the required information to create the training message
  else if (username == null || week == null) return await ctx.scene.enter(sceneName, {
    noRentals: noRentals,
    weekType: week,
    username: username,
    messagesToDelete: []
  });

  // Otherwise, generates the training message
  // Type coercion for the week and username variables because typescript
  // can't understand the above if statement for some reason
  const { message, callback } = createTrainingPollMsg(trainingMsg, trainingLocation, noRentals, week as string, username as string, trainingDates);

  // Calls the function to send the training message to the user
  await callback(ctx, message);

  // Tries to delete the message sent by the user
  await deleteMessages(ctx, ctx.message.message_id);
}


// The list of examples for the help message
const helpExamples = [
  "/trg_msg week 4 @skateRentalIC",
  "/trg_msg reading week @skateRentalIC",
  "/trg_msg exam week 1 @skateRentalIC",
  "/trg_msg recess week @skateRentalIC",
  "/trg_msg winter week 2 @skateRentalIC",
  "/trg_msg week 8 no rentals",
  "/trg_msg summer week 3 no rentals",
];


// The help text for the training message help command
export const help = `To use the /trg_msg command, you need to provide the week. If there are rentals for the week, you need to provide the username of the person who is in charge of the rentals. Otherwise, you should input the phrase 'no rentals', like this:
${utils.monospace(
  `/trg_msg ${utils.stripHtml(
    "<week> <username of the person in charge of skate rentals or 'no rentals'>"
  )}`
)}

Here are some examples:
${helpExamples.map(
  example => ` ${utils.monospace(example)}`
).join("\n")}

Alternatively, you can write your own training message. The bot will automatically generate the training dates as the poll options. All you need to do is to type your training message after the command, like this:
${utils.monospace(
  `/trg_msg ${utils.stripHtml(
    "<custom training message>"
  )}`
)}`;




// The wizard scene to validate the arguments passed by the user

// The validator
const nusValidator = new Composer<Scenes.WizardContext>();

// Function to handle the cancel command in the scene
nusValidator.command(...cancelCommand);


// Function to handle any input the user gives in the scene
nusValidator.on(filters.message("text"), async ctx => {

  // Gets the state object
  const state = ctx.wizard.state as { weekType: string, username: string, noRentals: boolean };

  // Gets the username and the week type from the state object
  const { weekType, username } = state;

  // Gets the message from the user and removes the command from the start of the message
  let msg = removeCommand(ctx.message.text);

  // Remove the bot's username from the message
  msg = removeBotUsername(msg);

  // Gets the given username and the week type from the message
  const [givenWeekType, noRentals, givenUsername] = getRequiredArgs(msg);

  // If the no rentals argument given is true, then set the state to it
  if (noRentals) state.noRentals = noRentals;

  // If there are rentals and the username of the person in charge of skate rentals isn't already stored
  if (!state.noRentals && !username) {

    // If the username hasn't been given
    if (!givenUsername) {

      // Ask the user for the username and exit the function
      return await promptUserForInput(
        ctx,
        `Please enter the username of the person who is in charge of skate rentals this week. If there are no rentals this week, simply enter the phrase '${utils.monospace("no rentals")}' instead of the username.`
      );
    }

    // Otherwise, store the given username
    else state.username = givenUsername;
  }

  // If the week type hasn't been stored
  if (!weekType) {

    // If the week type isn't given
    if (!givenWeekType) {

      // Ask the user for the week and exit the function
      return await promptUserForInput(ctx, "Please enter the week for this week's skate training.");
    }

    // Otherwise, store the given week type
    else state.weekType = givenWeekType;
  }

  // If both the username and the week type has been given, calls the function to generate the training message
  const { message, callback } = createTrainingPollMsg(trainingMsg, trainingLocation, state.noRentals, state.weekType, state.username, trainingDates)

  // Marks the current message sent by the user for deletion
  markMessageForDeletion(ctx, ctx.message.message_id);

  // Wrap the callback function with the function to delete messages
  const wrappedCallback = wrapCallbackWithMessageDeleter(callback);

  // Calls the function to send the training message to the user and delete all the messages
  await wrappedCallback(ctx, message);

  // Leave the scene
  await ctx.scene.leave();
});


// The scene that contains the NUS training message validator
export const validateScene = createWizardScene(sceneName, nusValidator);
