// Module to handle the commands that returns a list of links and files

import * as utils from "../utils";
import { SPACING } from "../../src/lib/constants";

// The enumeration representing all the different lists available
export enum Lists {
  TrickLists = "trick-lists",
  Rulebooks = "rulebooks",
  BuyingGuides = "buying-guides",
  MaintenanceGuides = "maintenance-guides",
  Glossaries = "glossaries",
  MiscResources = "misc-resources"
};

// The type of the data in the JSON file for the lists
type ListData = {
  heading: string,
  links: [string, string][],
  files: string[]
};

// The regular expression to check for the trick list command
export const trickListsRegex = /^\/?\b(?:others?[ _\-]?)?tricks?[ _\-]?lists?\b/i;

// The regular expression to check for the rulebooks command
export const rulebooksRegex = /^\/?\brules?[ _\-]?(?:book)?s?\b/i;

// The regex to check for the buying guide command
export const buyingGuidesRegex = /^\/?\bbuy(?:ing)?[ _\-]?guides?\b/i;

// The regular expression to check for the maintenance guide command
export const maintenanceGuidesRegex = /^\/?\bmain(?:tenance|tain(?:[ea]nce|ing)?)[ _\-]?(?:guides?)\b/i;

// The regular expression to check for the glossaries command
export const glossariesRegex = /^\/?\b(?:(?:glossar(?:y|ies?)|dict?(?:ionar(?:y|ie?))?s?)(?:[ _\-]?of[ _\-]?term(?:s|inology|inologies?)?)?)\b/i;

// The regular expression to check for the miscellaneous resources command
export const miscResourcesRegex = /^\/?\b(?:misc(?:ell?an[ea]ous)?s?|ran(?:dom)?s?)?[ _\-]?(?:resour?ce|guide)s?\b/i;


// Function to generate the lists text
export async function generateListsText(lists: Lists) {

  // Asynchronously load the JSON data for the lists
  const data = await utils.loadJsonData(`/lists/${lists}.json`) as ListData;

  // Gets the heading, links and the files from the data
  const { heading, links, files } = data;

  // The list containing the processed links
  const processedLinks = [];

  // Iterates the list of links
  for (const [linkTitle, link] of links.values()) {

    // Initialise the processedLink variable
    let processedLink;
    
    // If the first item in the link list exists, hyperlink the link
    if (linkTitle.length !== 0) processedLink = utils.hyperlink(linkTitle, link);

    // Otherwise, set the processed link to the website link without hyperlinking
    else processedLink = link;

    // Adds the link to the list of processed links
    processedLinks.push(processedLink);
  }

  // Creates the message to return to the bot
  const message = `${utils.bold(heading)}${SPACING}${processedLinks.join("\n\n")}`;

  // Returns the message and the list of paths to the files
  return [message, files];
}
