// Module to create the training message for NTU

import type { TrainingMessageHandler } from ".";
import {
  type PollConfig,
  DEFAULT_POLL_CONFIG,
  createConfig,
  generatePollMessage,
} from "../poll-message";
import * as utils from "../../utils";
import * as trgMsgUtils from "./utils";
import { deleteMessages } from "../../bot-utils";

// The location of the training
const trainingLocation = "NTU MPC 1";

// The training dates
export const trainingDates = [
  "2025-03-11T19:00:00.000",
  "2025-03-12T19:00:00.000",
];

// The training message
const trainingMsg = "👾 CCA Training @ {location} 👾";

// The function to format the date for NTU
function formatDate(date: Date) {
  //

  // Gets the formatted time string
  const timeString = utils.getTimeStr(date);

  // Gets the formatted date string
  const dateString = Intl.DateTimeFormat("en-SG", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  })
    .format(date)
    .replace(/,/, "");

  // Get the full date string
  const fullDateString = `${timeString}, ${dateString}`;

  // Return the full date string
  return fullDateString;
}

// Function to generate the poll options
function generatePollOptions(trainingDates: string[]) {
  //

  // Gets the upcoming training dates
  const upcomingTrainingDates = trgMsgUtils.getUpcomingTrainingDates(
    trainingDates,
    2
  ) as Date[];

  // Returns the poll options
  return upcomingTrainingDates.map((date) => formatDate(date));
}

// Function to format the message
function formatMsg(trainingMsg: string, trainingLocation: string): string {
  //

  // Format the training message with the location
  const formattedMsg = utils.strFormat(trainingMsg, {
    location: trainingLocation,
  });

  // Return the formatted message
  return formattedMsg;
}

// Function to generate the poll message

// Function to handle the training message command for NTU
export async function handler(
  ...[ctx, message]: Parameters<TrainingMessageHandler>
): ReturnType<TrainingMessageHandler> {
  //

  // Initialise the poll configuration object with the generated poll options
  const pollConfig = createConfig<PollConfig>(
    { pollOptions: generatePollOptions(trainingDates) },
    DEFAULT_POLL_CONFIG
  );

  // Initialise the message to send
  let msgToSend: string | null;

  // If the message given is empty
  if (!message) {
    //

    // Use the default message and format it
    msgToSend = formatMsg(trainingMsg, trainingLocation);
  }

  // Otherwise, use the given message
  else {
    msgToSend = message;
  }

  // Generate the training message
  const { userMessage, callback } = generatePollMessage(msgToSend, pollConfig);

  // Calls the function to send the training message to the user
  await callback(ctx, userMessage);

  // Try to delete the messages sent by the user
  return await deleteMessages(ctx, ctx.message.message_id);
}

// The help text for the NTU command
export const help = [
  "To use the /trg_msg command, simply type the command ",
  "and the training message will be sent to the group. ",
  "\n\n",
  "If you would like to change the training message to a custom one, ",
  "provide the training message after you have typed the command, ",
  "like this:\n",
  `${utils.monospace(
    `/trg_msg ${utils.stripHtml("<custom training message (optional)>")}`
  )}`,
].join("");
