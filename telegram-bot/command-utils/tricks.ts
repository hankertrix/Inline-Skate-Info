// Module containing the utilities to handle the tricks command

import * as utils from "../utils";
import { removeBotUsername } from "../bot-utils";
import { SPACING, CATEGORY_SPACING, LABEL_SPACING } from "../../src/lib/constants";
import { loadFundamentalTricks } from "../normalise-data";


// The dictionary mapping the trick file path to the trick heading, trick category, and the function to load the file
export const TRICK_FILEPATH_MAP = {

  /*-------------
  The mapping is:
  "file path": [
    "category to display in the help function",
    "Heading",
    loadFunction (null if no loadFunction is required)
  ]
  -------------*/

  // Trick files that don't have any folders
  "basics": ["basics", "Basic tricks", null],
  "fundamentals": ["fundamentals", "Fundamental tricks", loadFundamentalTricks],
  "turns": ["turns", "Turns", null],
  "stops": ["stops", "Stops", null],
  "jumps": ["jumps", "Jumps", null],
  "wizard": ["wizard", "Wizard tricks", null],
  "misc": ["misc", "Miscellaneous tricks", null],





  // Trick files that have folders

  // Re-enable the aggressive tricks once the data for it is complete
  // Aggressive
  // "aggressive/": ["aggressive", "Aggressive tricks", null],
  // "aggressive/basics": ["aggressive basics", "Aggressive skating basics", null],
  // "aggressive/class-A": ["class a aggressive", "Class A aggressive tricks", null],
  // "aggressive/class-A/others": ["class a aggressive others", "Others, class A aggressive tricks", null],
  // "aggressive/class-A/spins": ["class a aggressive spins", "Spins, class A aggressive tricks", null],
  // "aggressive/class-B": ["class b aggressive", "Class B aggressive tricks", null],
  // "aggressive/class-B/airs": ["class b aggressive airs", "Airs, class B aggressive tricks", null],
  // "aggressive/class-B/grinds": ["class b aggressive grinds", "Grinds, class B aggressive tricks", null],
  // "aggressive/class-B/others": ["class b aggressive others", "Others, class B aggressive tricks", null],
  // "aggressive/class-B/spins": ["class b aggressive spins", "Spins, class B aggressive tricks", null],
  // "aggressive/class-B/stalls": ["class b aggressive stalls", "Stalls, class B aggressive tricks", null],
  // "aggressive/class-C": ["class c aggressive", "Class C aggressive tricks", null],
  // "aggressive/class-C/airs": ["class c aggressive airs", "Airs, class C aggressive tricks", null],
  // "aggressive/class-C/grabs": ["class c aggressive grabs", "Grabs, class C aggressive tricks", null],
  // "aggressive/class-C/grinds": ["class c aggressive grinds", "Grinds, class C aggressive tricks", null],
  // "aggressive/class-C/others": ["class c aggressive others", "Others, class C aggressive tricks", null],
  // "aggressive/class-C/spins": ["class c aggressive spins", "Spins, class C aggressive tricks", null],
  // "aggressive/class-C/stalls": ["class c aggressive stalls", "Stalls, class C aggressive tricks", null],
  // "aggressive/class-D": ["class d aggressive", "Class D aggressive tricks", null],
  // "aggressive/class-D/airs": ["class d aggressive airs", "Airs, class D aggressive tricks", null],
  // "aggressive/class-D/grabs": ["class d aggressive grabs", "Grabs, class D aggressive tricks", null],
  // "aggressive/class-D/grinds": ["class d aggressive grinds", "Grinds, class D aggressive tricks", null],
  // "aggressive/class-D/others": ["class d aggressive others", "Others, class D aggressive tricks", null],
  // "aggressive/class-D/spins": ["class d aggressive spins", "Spins, class D aggressive tricks", null],
  // "aggressive/class-D/stalls": ["class d aggressive stalls", "Stalls, class D aggressive tricks", null],
  // "aggressive/class-E": ["class e aggressive", "Class E aggressive tricks", null],
  // "aggressive/class-E/airs": ["class e aggressive airs", "Airs, class E aggressive tricks", null],
  // "aggressive/class-E/grabs": ["class e aggressive grabs", "Grabs, class E aggressive tricks", null],
  // "aggressive/class-E/grinds": ["class e aggressive grinds", "Grinds, class E aggressive tricks", null],
  // "aggressive/class-E/others": ["class e aggressive others", "Others, class E aggressive tricks", null],
  // "aggressive/class-E/spins": ["class e aggressive spins", "Spins, class E aggressive tricks", null],
  // "aggressive/class-E/stalls": ["class e aggressive stalls", "Stalls, class E aggressive tricks", null],

  // Slalom
  "slalom/": ["slalom", "Slalom tricks", null],
  "slalom/class-A/": ["class a slalom", "Class A slalom tricks", null],
  "slalom/class-A/jumps": ["class a slalom jumps", "Jumps, class A slalom tricks, category", null],
  "slalom/class-A/others": ["class a slalom others", "Others, class A slalom tricks", null],
  "slalom/class-A/sitting": ["class a slalom sitting", "Sitting, class A slalom tricks", null],
  "slalom/class-A/spins": ["class a slalom spins", "Spins, class A slalom tricks", null],
  "slalom/class-A/wheelings": ["class a slalom wheelings", "Wheelings, class A slalom tricks", null],
  "slalom/class-B/": ["class b slalom", "Class B slalom tricks", null],
  "slalom/class-B/jumps": ["class b slalom jumps", "Jumps, class B slalom tricks", null],
  "slalom/class-B/others": ["class b slalom others", "Others, class B slalom tricks", null],
  "slalom/class-B/sitting": ["class b slalom sitting", "Sitting, class B slalom tricks", null],
  "slalom/class-B/spins": ["class b slalom spins", "Spins, class B slalom tricks", null],
  "slalom/class-B/wheelings": ["class b slalom wheelings", "Wheelings, class B slalom tricks", null],
  "slalom/class-C/": ["class c slalom", "Class C slalom tricks", null],
  "slalom/class-C/jumps": ["class c slalom jumps", "Jumps, class C slalom tricks", null],
  "slalom/class-C/others": ["class c slalom others", "Others, class C slalom tricks", null],
  "slalom/class-C/sitting": ["class c slalom sitting", "Sitting, class C slalom tricks", null],
  "slalom/class-C/spins": ["class c slalom spins", "Spins, class C slalom tricks", null],
  "slalom/class-C/wheelings": ["class c slalom wheelings", "Wheelings, class C slalom tricks", null],
  "slalom/class-D/": ["class d slalom", "Class D slalom tricks", null],
  "slalom/class-D/jumps": ["class d slalom jumps", "Jumps, class D slalom tricks", null],
  "slalom/class-D/others": ["class d slalom others", "Others, class D slalom tricks", null],
  "slalom/class-D/sitting": ["class d slalom sitting", "Sitting, class D slalom tricks", null],
  "slalom/class-D/spins": ["class d slalom spins", "Spins, class D slalom tricks", null],
  "slalom/class-D/wheelings": ["class d slalom wheelings", "Wheelings, class D slalom tricks", null],
  "slalom/class-E/": ["class e slalom", "Class E slalom tricks", null],
  "slalom/class-E/jumps": ["class e slalom jumps", "Jumps, class E slalom tricks", null],
  "slalom/class-E/others": ["class e slalom others", "Others, class E slalom tricks", null],
  "slalom/class-E/sitting": ["class e slalom sitting", "Sitting, class E slalom tricks", null],
  "slalom/class-E/spins": ["class e slalom spins", "Spins, class E slalom tricks", null],
  "slalom/class-E/wheelings": ["class e slalom wheelings", "Wheelings, class E slalom tricks", null],

  // Slides
  "slides/": ["slides", "Slides", null],
  "slides/class-A/": ["class a slides", "Class A slides", null],
  "slides/class-A/family-1": ["class a family 1 slides", "Class A, family 1 slides", null],
  "slides/class-A/family-2": ["class a family 2 slides", "Class A, family 2 slides", null],
  "slides/class-A/family-3": ["class a family 3 slides", "Class A, family 3 slides", null],
  "slides/class-A/family-4": ["class a family 4 slides", "Class A, family 4 slides", null],
  "slides/class-A/family-5": ["class a family 5 slides", "Class A, family 5 slides", null],
  "slides/class-B/": ["class b slides", "Class B slides", null],
  "slides/class-B/family-1": ["class b family 1 slides", "Class B, family 1 slides", null],
  "slides/class-B/family-2": ["class b family 2 slides", "Class B, family 2 slides", null],
  "slides/class-B/family-3": ["class b family 3 slides", "Class B, family 3 slides", null],
  "slides/class-B/family-4": ["class b family 4 slides", "Class B, family 4 slides", null],
  "slides/class-B/family-5": ["class b family 5 slides", "Class B, family 5 slides", null],
  "slides/class-C/": ["class c slides", "Class C slides", null],
  "slides/class-C/family-1": ["class c family 1 slides", "Class C, family 1 slides", null],
  "slides/class-C/family-2": ["class c family 2 slides", "Class C, family 2 slides", null],
  "slides/class-C/family-4": ["class c family 4 slides", "Class C, family 4 slides", null],
  "slides/class-C/family-5": ["class c family 5 slides", "Class C, family 5 slides", null],
  "slides/class-D/": ["class d slides", "Class D slides", null],
  "slides/class-D/family-1": ["class d family 1 slides", "Class D, family 1 slides", null],
  "slides/class-D/family-2": ["class d family 2 slides", "Class D, family 2 slides", null],
  "slides/class-D/family-4": ["class d family 4 slides", "Class D, family 4 slides", null],
  "slides/class-D/family-5": ["class d family 5 slides", "Class D, family 5 slides", null],
  "slides/class-E/": ["class e slides", "Class E slides", null],
  "slides/class-E/family-1": ["class e family 1 slides", "Class E, family 1 slides", null],
  "slides/class-E/family-2": ["class e family 2 slides", "Class E, family 2 slides", null],
  "slides/class-E/family-4": ["class e family 4 slides", "Class E, family 4 slides", null],
  
} as const;

// The type representing a trick object
type TrickObj = {
  description: string,
  videos: [string, string][]
};

// The regular expression to check for the tricks command
export const regex = /^\/?\btricks?\b/i;

// The spacing between each trick
const TRICK_SPACING = SPACING;


// Function to load the tricks JSON files
async function loadTricksJson(file: string) {

  // Gets the load function for the file name from the file path mapping for the tricks
  const [, loadFunction] = utils.dictGet(TRICK_FILEPATH_MAP, file, [null, null, null]);

  // If there is a load function for the file name, returns the result of the load function
  if (loadFunction != null) return await loadFunction();

  // Otherwise, create the actual file path
  const filepath = `tricks/${file}`;

  // Loads the JSON file
  const json = await utils.loadJsonData(filepath);

  // Returns the JSON file
  return json;
}


// Function to generate the text for tricks
function generateTrickText(trickName: string, trickObj: TrickObj, noHeading: boolean = false) {

  // Initialise the text list for the tricks
  const textList: string[] = [];

  // If a heading is wanted
  if (!noHeading) {

    // Adds the bolded trick name to the list
    textList.push(utils.bold(trickName));
  }

  // Iterates the items in the trick object
  for (const [label, value] of Object.entries(trickObj)) {

    // If the value of the label is an object (a dictionary containing the video information)
    if (Array.isArray(value)) {

      // Continues the loop if the array has no items
      if (value.length === 0) continue;

      // Gets the heading
      const heading = utils.bold(
        `${utils.titlecase(label)}:`
      );

      // If there is only one item in the array
      if (value.length === 1) {

        // Remove the "s" from the end of the heading
        const newHeading = heading.replace(/s(?=:)/, "");

        // Gets th channel name and the video link
        const [channelName, link] = value[0];

        // Adds the channel name hyperlinked with the video link to the text list
        textList.push(`${newHeading} ${utils.hyperlink(channelName, link)}`);
      }

      // Otherwise, adds all the channel names hyperlinked with the video link to the text list
      else textList.push(
        `${
          heading
        }\n${value.map(
          ([channelName, link], index) => `${index + 1}. ${utils.hyperlink(channelName, link)}`
        ).join("\n")}`
      );
    }

      // If the label is "description" and the value isn't empty, then just add the value to the list
    else if (label === "description" && value) textList.push(value);

    // Otherwise, add the bolded label with the information behind it if the value isn't empty
    else if (value) {
      textList.push(
        `${utils.bold(`${label}:`)} ${value}`
      );
    }
  }

  // Returns the text list joined with the label spacing
  return textList.join(LABEL_SPACING);
}


// Function to get the tricks data and generate the text for the trick given
async function getTrickText(jsonFiles: string[], trick: string = "") {

  // Loads the JSON files
  const jsons = await Promise.all(jsonFiles.map(file => loadTricksJson(file))) as {
    [trickName: string]: TrickObj
  }[];

  // Initialise the list of text to send to the user
  const trickTextList: string[] = [];

  // Iterates the JSON files
  for (const json of jsons) {

    // If the trick is given, calls the generateTrickText function to get the text for the trick and add the text to the list
    if (trick) {
      trickTextList.push(
        generateTrickText(trick, json[trick], true)
      );
    }

    // Otherwise, generates the text for each trick in the file and add it to the text list
    else {

      // Initialise the generated text
      const generatedText: string[] = [];

      // Iterates the JSON file
      for (const [trickName, trickObj] of Object.entries(json)) {

        // Generates the trick text and adds it to the list of generated text
        generatedText.push(
          generateTrickText(trickName, trickObj)
        );
      }

      // Adds the generated text to the trick list
      trickTextList.push(generatedText.join(TRICK_SPACING));
    }
  }

  // Returns the trick text
  return trickTextList.join(CATEGORY_SPACING);
}


// Function to handle the tricks command
export async function handler(message: string) {

  // Remove the tricks command from the message
  message = message.replace(regex, "").trim();

  // Remove the bot's username from the message
  message = removeBotUsername(message);

  // Makes the message lowercase
  const msg = message.toLowerCase();

  // Initialise the JSON files to load
  let jsonFiles: string[];

  // Initialise the trick name to get from the data
  let trickName: string = "";

  // Initialise the heading
  let heading: string = "";

  // If the message given is empty
  if (!msg) {
    
    // Set the JSON files to load to the JSON file containing the fundamentals
    jsonFiles = ["fundamentals"];

    // Sets the heading to "Fundamental tricks"
    heading = "Fundamental tricks";
  }

  // Otherwise, if the message is some other word
  else {

    // Loads the tricks mapping
    const tricksMapping = await loadTricksJson("tricks-mapping");

    // Gets the information from the tricks mapping
    const info = utils.dictGet(tricksMapping, msg);

    // If the trick isn't found in the dictionary, immediately returns the message to tell the user the trick wasn't found
    if (!info) return [message, `No trick was found for '${message}'.`];

    // Otherwise, get the JSON file to load and the trick name
    const [jsonFile, trick] = info;

    // Set the JSON files to load to the JSON file obtained from the mapping
    jsonFiles = [jsonFile];

    // Set the trick name to the trick name found from the mapping
    trickName = trick;

    // If the trick name exists
    if (trick) {

      // Set the heading to the trick name
      heading = trickName;
    }

    // Otherwise
    else {

      // Get the heading from the file path mapping for the tricks
      heading = utils.dictGet(TRICK_FILEPATH_MAP, jsonFile, ["Category not found", "Trick heading not found", null])[1];
    }
  }

  // Gets the result of the getTrickText function
  const trickText = await getTrickText(jsonFiles, trickName);

  // Returns the heading and the trick text
  return [heading, trickText];
}
