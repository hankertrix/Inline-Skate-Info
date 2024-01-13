// Module to create the training message for NTU

import type { TrainingMessageHandler } from ".";
import * as utils from "../../utils";
import * as trgMsgUtils from "./utils";


// The location of the training
const trainingLocation = "NTU MPC 1";

// The training dates
export const trainingDates = [
  "2022-12-28T19:00:00.000",
  "2022-12-30T19:00:00.000"
];

// The training message
const trainingMsg = "👾{last} {day} CCA Training @{location} @{date} 👾";




// The function to format the training message for NTU
function formatMsg(
  date: Date,
  location: string,
  trgMsg: string,
  isLast: boolean
) {
  
  // Gets the formatted time string
  const timeString = utils.getTimeStr(date);

  // Gets the formatted date string
  const dateString = Intl.DateTimeFormat("en-SG", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date).replace(/,/, "");

  // Gets the full date string
  const fullDateString = `${timeString}, ${dateString}`;

  // Returns the formatted training message
  return utils.strFormat(trgMsg, {
    day: utils.getDayStr(date),
    location: location,
    date: fullDateString,
    last: isLast ? " LAST" : ""
  });
}


// Function to handle the training message command for NTU
export async function handler(
  ...[ctx, message]: Parameters<TrainingMessageHandler>
): ReturnType<TrainingMessageHandler> {

  // The boolean variable to check
  // if the lowercased message just contains the word "last"
  const isLast = message.toLowerCase() === "last";

  // If the message passed isn't empty and isn't just the word "last",
  // then use it instead of the default message
  if (message && !isLast) return await trgMsgUtils.handleTrgMsg(ctx, message);

  // Gets the upcoming training date
  const upcomingTrainingDate = trgMsgUtils.getUpcomingTrainingDates(
    trgMsgUtils.createDateMapping(trainingDates)
  ) as Date;

  // Gets the formatted message
  const formattedMsg = formatMsg(
    upcomingTrainingDate,
    trainingLocation,
    trainingMsg,
    isLast
  );

  // Sends the formatted message with the default poll options
  await trgMsgUtils.handleTrgMsg(ctx, formattedMsg);
}


// The help text for the NTU command
export const help = `To use the /trg_msg command, simply type the command and the training message will be sent to the group. You can indicate that the training is the last training for a while by simply typing the word 'last' after the command, like this:
${utils.monospace(`/trg_msg last`)}

If you would like to change the training message to a custom one, provide the training message after you have typed the command, like this:
${utils.monospace(`/trg_msg ${utils.stripHtml("<custom training message (optional)>")}`)}`;
