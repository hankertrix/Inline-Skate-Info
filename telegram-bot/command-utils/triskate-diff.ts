// Module to handle the triskate differences command

import * as utils from "../utils";
import { SPACING } from "../../src/lib/constants";


// The regular expression to check for the triskate differences command
export const regex = /^\/?\b(?:tri[ _\-]?skates?[ _\-]?(?:diff?(?:erences?)?)?|3[ _\-]?vs[ _\-]?4[ _\-]?(?:wheels?)?|wheels?[ _\-]?compar(?:e|ison)s?)\b/i;

// The type of the JSON containing the triskate differences data
type TriskateDiffData = {
  characteristics: string[],
  advantages: string[],
  disadvantages: string[],
  articles: {
    [site: string]: string
  },
  videos: {
    [videoTitle: string]: {
      link: string,
      channel: string,
      channelLink: string
    }
  }
};


// Function to generate the message
export async function generateMsg() {

  // Loads the JSON data for the differences betweeen triskates and regular skates
  const data = await utils.loadJsonData("differences/triskate-diff") as TriskateDiffData;

  // Initialise the list containing the message
  const msgList: string[] = [];

  // Adds the title to the list
  msgList.push(utils.bold("Differences between triskates and regular skates"));

  // Iterates the data
  for (const [label, info] of Object.entries(data)) {

    // Initialise the list containing the information
    const infoList: string[] = [];

    // If the information is a list of strings (for "characteristics", "advantages" and "disadvantages")
    if (Array.isArray(info)) {

      // Adds the heading to the list
      infoList.push(
        utils.bold(`${utils.titlecase(label)} of triskates:`)
      );

      // Iterates the information
      for (const infoItem of info) {

        // Adds the information to the list
        infoList.push(`- ${infoItem}`);
      }
    }

    // Otherwise
    else {

      // Adds the heading to the list for the articles and videos
      infoList.push(
        utils.bold(`Relevant ${label}`)
      );

      // Iterates the information
      for (const [index, [key, value]] of Object.entries(Object.entries(info))) {

        // Adds the information to the list
        infoList.push(`${parseInt(index) + 1}. ${utils.hyperlink(key, value)}`);
      }
    }

    // Adds the information string to the main message
    msgList.push(infoList.join("\n"));
  }

  // Returns the message
  return msgList.join(SPACING);
}
