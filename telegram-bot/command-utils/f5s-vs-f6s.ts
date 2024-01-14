// The module that contains the utilities for the F5S vs F6S command

import * as utils from "../utils";
import { SPACING } from "../../src/lib/constants";


// The type of the JSON data containing the differences
// between the Flying Eagle F5S and F6S
type FlyingEagleDiffData = {
  similarities: string[],
  differences: string[],
  references: string[]
};

// The regular expression to check for the F5S vs F6S command
export const regex = /^\/?\b(?:f(?:lying)?[ _-]?e(?:agle)?[ _-]?)?f5s[ _-]?(vs|versus)[ _-]?(?:f(?:lying)?[ _-]?e(?:agle)?[ _-]?)?f6s\b/i;


// The function to generate the message
export async function generateMsg() {

  // Loads the JSON data
  const data = await utils.loadJsonData("differences/f5s-vs-f6s") as FlyingEagleDiffData;

  // Initialise the list of that contains the final message
  const msgList: string[] = [];

  // Adds the bolded title to the list
  msgList.push(
    utils.bold(
      "Similarities and differences between the Flying Eagle F5S Eclipse and the Flying Eagle F6S Falcon"
    )
  );

  // Iterates over the similarities and differences
  for (const entry of ["similarities", "differences"]) {

    // Gets the value for the entry
    // Have to force the type for the variable "data" to get typescript to behave
    const value = (data as {[key: string]: string[]})[entry];

    // Adds the entry with the corresponding
    // value to the list
    msgList.push(
      `${utils.bold(
        utils.italicise(
          `${utils.titlecase(entry)}:`
        )
      )}\n${
        value.map(item => `- ${item}`).join("\n")
      }`
    );
  }

  // Adds the reference video to the list
  msgList.push(`References:\n${data.references.map(
    (reference, index) => `${index + 1}. ${reference}`
  ).join("\n")}`);

  // Returns the text explaining the similarities and differences between the F5S and the F6S
  return msgList.join(SPACING);
}
