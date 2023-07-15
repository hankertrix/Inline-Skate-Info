// Module containing all the utilities for the training message command

import type { DateMapping } from "../../types";
import * as utils from "../../utils";
import { deleteMessages, wrapCallbackWithMessageDeleter } from "../../bot-utils";
import { DEV } from "$lib/constants";
import { DEFAULT_POLL_OPTIONS, generatePollMessage } from "../poll";


// Function to create the date mapping
export function createDateMapping(trainingDates: string[]) {

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


// Function to handle the training message command when no default training message has been set up
export async function handleTrgMsg(ctx: any, msg: string) {

  // Generate a poll message with the given training message and the default options
  const { callback } = generatePollMessage(msg, DEFAULT_POLL_OPTIONS);

  // If the message given is empty
  if (!msg) {

    // Wraps the callback with the function to delete the conversation
    const wrappedCallback = wrapCallbackWithMessageDeleter(callback);

    // Enters the scene to ask the user for their message for the training message
    // Also, tells the user that they haven't set up the training message for the chat and ask them to contact the developer if they want to get one set up
    return await ctx.scene.enter("validate", { message: `No training message was found for this chat, so please enter the desired training message. If you want to set up a poll message for this chat, please contact ${DEV}.`, callback: wrappedCallback, messagesToDelete: [] })
  }

  // Otherwise, tries to delete the command message that the user has sent
  await deleteMessages(ctx, ctx.message.message_id);

  // Calls the callback function to create a training message
  await callback(ctx, msg);
}


// Function set the time on the upcoming training date
function setTimeOnUpcomingTrainingDate(upcomingTrainingDate: Date, dateMapping: { [day: number]: Date }): Date {

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
export function getUpcomingTrainingDates(dateMapping: { [day: number]: Date }, numOfTrainingDates: number = 1): Date | Date[] {

  // Gets the current date
  const currentDate = new Date();

  // Create a list to store all the training dates
  const upcomingTrainingDates: Date[] = [];
  
  // Create a temporary date
  let tempDate = currentDate;

  // Infinite loop
  while (true) {

    // Checks if the temporary date is in the date mapping
    if (tempDate.getDay() in dateMapping) {

      // If the temporary date is past the current date, break the loop
      if (tempDate > currentDate)
        upcomingTrainingDates.push(
          setTimeOnUpcomingTrainingDate(
            tempDate, dateMapping
          )
        );

      // Otherwise, if the temporary date is the same as the current date
      else if (tempDate === currentDate) {
        
        // Gets the training date from the date mapping
        const trainingDate = dateMapping[tempDate.getDay()];

        // If the hour on the temporary date is not past the hour of the training time, break the loop
        if (tempDate.getHours() < trainingDate.getHours())
          upcomingTrainingDates.push(
            setTimeOnUpcomingTrainingDate(
              tempDate, dateMapping
            )
          );

        // Otherwise, if the time on the temporary date is on the same hour as the training time but the minutes are less than or equal to the training time, then break the loop
        else if (
          tempDate.getHours() === trainingDate.getHours() &&
          tempDate.getMinutes() <= trainingDate.getMinutes()
        )
          upcomingTrainingDates.push(
            setTimeOnUpcomingTrainingDate(tempDate, dateMapping)
          );
      }
      
      // If the number of training dates required is reached, breaks the loop
      if (upcomingTrainingDates.length === numOfTrainingDates) break;
    }

    // Otherwise, add one day to the temporary date
    tempDate = utils.addDays(tempDate, 1);
  }

  // Returns the upcoming training date if there's only one
  // Otherwise, return the list of upcoming trainings dates
  return upcomingTrainingDates.length === 1 ? upcomingTrainingDates[0] : upcomingTrainingDates;
}
