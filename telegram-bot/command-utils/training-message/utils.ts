// Module containing all the utilities for the training message command

import type { DateMapping } from "../../types";
import type { TrainingMessageHandler } from ".";
import * as utils from "../../utils";
import {
  deleteMessages,
  wrapCallbackWithMessageDeleter,
  generateInlineKeyboard
} from "../../bot-utils";
import { DEV } from "../../../src/lib/constants";
import {
  DEFAULT_NUMBERING_STYLE,
  DEFAULT_FORMAT_OPTIONS,
  DEFAULT_PRESERVE_LINES,
  DEFAULT_SHOW_REMAINING,
  DEFAULT_POLL_OPTIONS,
  POLL_TYPES,
  generatePollMessage,
} from "../poll";


// Function to handle the training message command
// when no default training message has been set up
export async function handleTrgMsg(
  ...[ctx, msg]: Parameters<TrainingMessageHandler>
): ReturnType<TrainingMessageHandler> {

  // Generate a poll message with the given training message
  // and the default options
  const { callback } = generatePollMessage(
    msg,
    DEFAULT_POLL_OPTIONS,
    [],
    DEFAULT_NUMBERING_STYLE,
    DEFAULT_FORMAT_OPTIONS,
    DEFAULT_PRESERVE_LINES,
    DEFAULT_SHOW_REMAINING,
    POLL_TYPES.DEFAULT,
    generateInlineKeyboard,
  );

  // If the message given is empty
  if (!msg) {

    // Wraps the callback with the function to delete the conversation
    const wrappedCallback = wrapCallbackWithMessageDeleter(callback);

    // Enters the scene to ask the user for their message for
    // the training message.
    // Also, tells the user that they haven't set up the training message
    // for the chat and ask them to contact the developer
    // if they want to get one set up.
    return await ctx.scene.enter(
      "validate",
      {
        message: `No training message was found for this chat, so please enter the desired training message. If you would like to set up a training message for this chat, please contact ${DEV}.`,
        callback: wrappedCallback,
        messagesToDelete: []
      }
    );
  }

  // Otherwise, calls the callback function to create a training message
  await callback(ctx, msg);

  // Tries to delete the command message that the user has sent
  await deleteMessages(ctx, ctx.message.message_id);
}


// Function to create the date mapping
function createDateMapping(trainingDates: string[]) {

  // Creates the object for the date mapping
  const dateMapping: DateMapping = {};

  // Iterates the dates
  for (const date of trainingDates) {

    // Gets the date object
    const dateObj = new Date(date);

    // Maps the day of the current date to the date object
    dateMapping[dateObj.getDay()] = dateObj;
  }

  // Returns the date mapping
  return dateMapping;
}


// Function set the time on the upcoming training date
function setTimeOnUpcomingTrainingDate(
  upcomingTrainingDate: Date,
  dateMapping: { [day: number]: Date }
): Date {

  // Gets the training date from the date mapping
  const trainingDate = dateMapping[upcomingTrainingDate.getDay()];

  // Creates the upcoming date with the correct time
  const correctedTrainingDate = new Date(upcomingTrainingDate.getTime());

  // Sets the training time on the upcoming training date to the correct one
  correctedTrainingDate.setHours(
    trainingDate.getHours(),
    trainingDate.getMinutes(),
    0
  );

  // Returns the upcoming training date with the time set correctly
  return correctedTrainingDate;
}


// Function to get the upcoming training date
export function getUpcomingTrainingDates(
  trainingDates: string[],
  numOfTrainingDates: number = 1
): Date | Date[] {

  // Creates the date mapping from the training dates
  const dateMapping = createDateMapping(trainingDates);

  // Gets the current date
  const currentDate = new Date();

  // Create a list to store all the training dates
  const upcomingTrainingDates: Date[] = [];

  // Create a temporary date
  let tempDate = currentDate;

  // Intialise the variable to decide
  // whether to continue looping or not
  let continueLoop = true;

  // Infinite loop
  while (continueLoop) {

    // Checks if the temporary date is not in the date mapping
    if (!(tempDate.getDay() in dateMapping)) {

      // Add a day to the temporary date
      tempDate = utils.addDays(tempDate, 1);

      // Continue the loop
      continue;
    }

    // Otherwise, if the temporary date is not in the date mapping

    // If the temporary date is past the current date
    if (tempDate > currentDate) {

      // Add the date to the list of upcoming training dates
      upcomingTrainingDates.push(
        setTimeOnUpcomingTrainingDate(
          tempDate, dateMapping
        )
      );
    }

    // Otherwise, if the temporary date is the same as the current date
    else if (tempDate === currentDate) {

      // Gets the training date from the date mapping
      const trainingDate = dateMapping[tempDate.getDay()];

      // If the hour on the temporary date
      // is not past the hour of the training time
      if (tempDate.getHours() < trainingDate.getHours()) {

        // Add the date to the list of upcoming training dates
        upcomingTrainingDates.push(
          setTimeOnUpcomingTrainingDate(
            tempDate, dateMapping
          )
        );
      }

      // Otherwise, if the time on the temporary date is on the
      // same hour as the training time
      // but the minutes are less than or equal to the training time
      else if (
        tempDate.getHours() === trainingDate.getHours() &&
        tempDate.getMinutes() <= trainingDate.getMinutes()
      ) {

        // Add the date to the list of upcoming training dates
        upcomingTrainingDates.push(
          setTimeOnUpcomingTrainingDate(tempDate, dateMapping)
        );
      }
    }

    // Add a day to the temporary date
    tempDate = utils.addDays(tempDate, 1);

    // If the number of training dates required is reached
    if (upcomingTrainingDates.length === numOfTrainingDates) {

      // Breaks the loop
      continueLoop = false;
    }
  }

  // Returns the upcoming training date if there's only one
  // Otherwise, return the list of upcoming trainings dates
  return upcomingTrainingDates.length === 1 ?
    upcomingTrainingDates[0] : upcomingTrainingDates;
}
