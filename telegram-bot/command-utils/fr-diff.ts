// The module that contains the utilities for the FR skates difference command

import * as utils from "../utils";
import { SPACING } from "../../src/lib/constants";


// The type of the JSON data containing the differences between FR skates
type FrDiffData = {
  similarities: string[],
  differences: {
    [model: string]: string[]
  },
  references: string[]
};

// The regular expression to check for the FR skates difference command
export const regex = /^\/?\bfr[ _\-]?diff?(?:erences?)?\b/i;


// The function to generate the message
export async function generateMsg() {

  // Loads the JSON data
  const data = await utils.loadJsonData("differences/fr-diff") as FrDiffData;

  // Initialise the list of that contains the final message
  const msgList: string[] = [];

  // Adds the bolded title to the list
  msgList.push(utils.bold("Similarities and differences between the FRX, FRW, FR1, FR2 and FR3"));

  // Gets the similarities
  const similarities = `${utils.bold(
    utils.italicise("Similarities:")
  )}\n${
    data.similarities.map(similarity => `- ${similarity}`)
      .join("\n")
  }`;

  // Adds the similarities to the list
  msgList.push(similarities);

  // Gets the differences
  const differences = data.differences;

  // Adds the bolded and italicised heading for the differences to the list
  msgList.push(utils.bold(
    utils.italicise("Differences:")));

  // Iterates the differences
  for (const [model, modelDifferences] of Object.entries(differences)) {

    // Gets the text to add to the list
    const text = `${utils.bold(model)}:\n${
      modelDifferences.map(diffs => `- ${diffs}`)
        .join("\n")
    }`;

    // Adds the text to the list
    msgList.push(text);
  }

  // Adds the reference video to the list
  msgList.push(`References:\n${data.references.map(
    (reference, index) => `${index + 1}. ${reference}`
  ).join("\n")}`);

  // Returns the text explaining the similarities and differences between the FR skates
  return msgList.join(SPACING);
}
