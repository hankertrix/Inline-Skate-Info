// The module containing all the utilities for the terminology command

import { BOT_USERNAME } from "$lib/constants";
import * as normaliseData from "../normalise-data";
import type { Dict } from "../types";
import * as utils from "../utils";


// The regex for the terminology command
export const regex = new RegExp(
  String.raw`^\/?\bterm(?:s|inolog(?:y|ies))?\b(?:${
    utils.regexEscape(BOT_USERNAME)})?`,
  "i"
);


// Function to generate the text for the terminology by iterating the dictionary or string
function generateTerminologyText(data: Dict<string> | string, separator: string = ": ") {

  // If the item passed is a string, returns the string immediately
  if (typeof data === "string") return data;

  // The list of strings to add to
  const strList: string[] = [];

  // The inner function that iterates the dictionary
  function iterateDict(data: Dict<string> | string) {

    // If the item is a string, adds the item to the list of strings
    if (typeof data === "string") return strList.push(data);

    // Iterates the dictionary
    for (const [key, value] of Object.entries(data)) {

      // Checks if the value is an object
      if (utils.isObject(value)) {

        // Adds the key in bold and italics to the list of strings after converting it to a label
        strList.push(
          utils.bold(
            utils.italicise(
              utils.convertToLabel(key)
            )
          )
        );

        // Calls the iterateDict function on the value
        iterateDict(value);
      }

      // Otherwise
      else {

        // Bolds the label and the separator
        const label = utils.bold(`${utils.convertToLabel(key)}${separator}`);

        // Adds the label and it's value to the list of strings
        strList.push(`${label}${value}`);
      }
    }

    // Adds new lines to the list of strings to space out the sections
    strList.push("\n\n");
  }

  // Calls the iterate dictionary function on the data
  iterateDict(data);

  // Returns the joined list of strings
  return strList.join("\n\n");
}


// Function to handle the terminology command and generate the reply
export async function handler(message: string) {

  // Remove the command from the message
  message = message.replace(regex, "").trim();

  // Change the message to lowercase
  const msg = message.toLowerCase();

  // Load the terminology data
  const terminology = await normaliseData.loadTerminology();

  // The data to iterate and send to the user
  let data: Dict<string> | null = null;

  // Initialise the term that the user used
  let term: string = "";

  // If the message is empty
  if (!msg) {

    // Set the term to "general terms"
    term = "general terms";

    // Gets the general terms from the data
    data = utils.dictGet(terminology, term) as Dict<string> | null;
  }

  // If the message is all
  else if (msg === "all") {

    // Sets the term to "all terms"
    term = "all terms";

    // Gets every single definition
    data = terminology;
  }

  // If the message contains other words
  else {

    // Loads the terms
    const terminologyTerms = await utils.loadJsonData("terminology/terminology-terms");

    // Use the categories JSON file to get the term
    term = utils.dictGet(terminologyTerms, msg, msg);

    // Search for the term in the dictionary and set it to the data
    data = utils.dictGetSearch(terminology, term);
  }

  // Nicely formats the term
  term = utils.convertToLabel(term);

  // If the data is null, tells the user that no definition was found for their word
  if (data == null) return [message, `No definition was found for '${message}'.`];

  // If the data is a string, then just reply with the data
  else if (typeof data === "string") return [term, data];

  // Otherwise, the data is an object and needs the text to be generated
  else {

    // Calls the function to generate the terminology text
    return [term, generateTerminologyText(data)];
  }
}

