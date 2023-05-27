// Module to handle the skate recommendations command

import * as utils from "../utils";
import { SPACING } from "../../constants";
import { loadSkateRecs } from "../normalise-data";


// The regular expression to check for the skate recommendations command
export const regex = /^\/?\b(?:(?:skates?)?[ _\-]?recc?(?:s|omm?endations?)?|(?:recc?(?:s|ed)?|recc?omm?end(?:ed)?)[ _\-]?(?:skates?)?)\b/i;

// The type representing a skate recommendation
type SkateRec = {
  price: string,
  link: string,
  reason: string
};

// The type representing the skate recommendations JSON data
type SkateRecsData = {
  preface: string,
  recommendations: {
    [style: string]: [
      { [skate: string]: SkateRec },
      { [video: string]: string }
    ]
  }
};


// Function to generate the skate recommendations
export async function generateMsg() {

  // Loads the data
  const data = await loadSkateRecs() as SkateRecsData;

  // Gets the preface and add the heading to it
  const preface = `${utils.bold("Skate recommendations")}${SPACING}${data.preface}`;

  // The list containing the skate recommendations
  const recsList: string[] = [];

  // Adds the preface to the recommendations list
  recsList.push(preface);

  // Iterates the recommendations
  for (const [style, [recommendations, otherRecs]] of Object.entries(data.recommendations)) {

    // Initialise the list to store the recommendations
    const styleRecsList: string[] = [];

    // Adds the style as a heading to the list
    styleRecsList.push(`${utils.bold(style)}\n`);

    // Iterates the list of recommended skates
    for (const [index, [skate, info]] of Object.entries(Object.entries(recommendations))) {

      // Adds the recommended skates to the list
      styleRecsList.push(`${utils.bold(
        `${parseInt(index) + 1}. ${
          utils.hyperlink(skate, info.link)}`
      )}\n${utils.bold("Price:")} ${info.price}\n${info.reason}`);
    }

    // Initialise the list for the other recommendations
    const otherRecsList: string[] = [];

    // Adds the heading for the other recommendations to the list
    otherRecsList.push(utils.bold("Other recommendations"));

    // Iterates the list of other recommendations
    for (const [index, [otherRec, link]] of Object.entries(Object.entries(otherRecs))) {

      // Adds the other recommendations to the list
      otherRecsList.push(`${parseInt(index) + 1}. ${utils.hyperlink(otherRec, link)}`);
    }

    // Adds the skate recommendations 
    recsList.push(`${styleRecsList.join("\n\n")}${SPACING}${otherRecsList.join("\n")}`);
  }

  // Returns the skate recommendations
  return recsList;
}