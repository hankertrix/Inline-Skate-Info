// Module to handle the skate boot types command

import * as utils from "../utils";


// The regular expression to check for the skate boot types command
export const regex = /^\/?\b(?:skates?)?[ _-]?boots?[ _-]?(?:types?)?\b/i;

// The spacing between the boot types
const BOOT_TYPE_SPACING = "\n\n\n\n";

// THe spacing between the labels for the information about the boot
const LABEL_SPACING = "\n\n";

// The type representing the boot types JSON data
type BootTypesJson = {
  bootTypes: {
    [bootType: string]: {
      characteristics: string[],
      support: string,
      comfort: string,
      pricing: string,
      examples: string[]
    }
  },
  credits: string,
};


// Function to handle the skate boot types command
export async function generateMsg() {

  // Loads the JSON data
  const data = await utils.loadJsonData("differences/boot-types") as BootTypesJson;

  // Initialise the list to contain the message
  const msgList: string[] = [];

  // Adds the heading to the list of messages
  msgList.push(utils.bold("The different types of skate boots"));

  // Iterates the data
  for (const [bootType, info] of Object.entries(data.bootTypes)) {

    // Initialise the list to contain the information about the boot type
    const infoList: string[] = [];

    // Adds the heading to the list
    infoList.push(utils.bold(bootType));

    // Iterates the information
    for (const [label, value] of Object.entries(info)) {

      // If the label is "characteristics", adds all the characteristics of the boot to the list
      if (label === "characteristics") infoList.push(
        (value as string[]).map(
          characteristic => `- ${characteristic}`
        ).join("\n"));

      // If the value is a string, adds the value with the label to the list
      else if (typeof value === "string") infoList.push(`${utils.bold(
        utils.titlecase(label)
      )}: ${value}`);

        // Otherwise, add the list of strings to the list after the label
      else infoList.push(`${utils.bold(
        utils.titlecase(label)
      )}:\n${value.map(
        val => `- ${val}`
      ).join("\n")}`);
    }

    // Adds the information to the main list of messages
    msgList.push(infoList.join(LABEL_SPACING));
  }

  // Adds the credits to the message if it isn't empty
  if (data.credits) msgList.push(`Credits: ${data.credits}`);

  // Returns the message
  return msgList.join(BOOT_TYPE_SPACING);
}
