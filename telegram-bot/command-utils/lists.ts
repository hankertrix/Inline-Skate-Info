// Module to handle the commands that returns a list of links and files

import * as utils from "../utils";
import { SPACING } from "../../constants";

// The enumeration representing all the different lists available
export enum Lists {
  TrickLists = "trick-lists",
  Rulebooks = "rulebooks",
  BuyingGuides = "buying-guides",
  MaintenanceGuides = "maintenance-guides",
  Glossaries = "glossaries"
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
  for (const [index, [linkTitle, link]] of links.entries()) {

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


// Function to generate the trick lists
export function generateTrickLists() {

  // The heading for the trick lists command
  const heading = "Here are a few trick lists for inline skating:";

  // The list of links to the trick lists
  const links: string[] = [
    utils.hyperlink("SkaMiDan's Trick List of Inline Skating", "https://www.skamidan.com/skatetutorials/basic-knowledge-and-facts-about-inline-skating/skamidans-trick-list-of-inline-skating/?lang=en"),
    utils.hyperlink("SkaMiDan's Trick List of Freestyle Slalom Skating", "https://www.skamidan.com/skatetutorials/basic-knowledge-and-facts-about-freestyle-slalom-skating-rules-inline-freestyle-slalom/skamidans-trick-list-of-freestyle-slalom-skating/?lang=en"),
    utils.hyperlink("SkaMiDan's Trick List of Aggressive Inline Skating", "https://www.skamidan.com/skatetutorials/basic-knowledge-and-facts-about-aggressive-inline-skating-stunt-skating-park-skating/skamidans-trick-list-of-aggressive-inline-skating/?lang=en"),
    utils.hyperlink("Book of Grinds", "https://skateyeg.com/bog/"),
    utils.hyperlink("Toxboe.net Aggressive Trick Guide", "https://toxboe.net/tricks/"),
    utils.hyperlink("Encyclopedia of aggressive inline tricks", "https://tricks-encyclopedia.blogspot.com/"),
    utils.hyperlink("Freshie Slalom Move List", "https://docs.google.com/spreadsheets/d/1mlcrdTsm2diQmZmCiKyPAYYEiifcwMmYmDhykprUNHI/edit#gid=0"),
    utils.hyperlink("Freestyle slalom moves and levels", "https://pagophilia.com/slalom/freestyle-slalom-moves-and-levels/"),
    utils.hyperlink("Aprenda Slalom A-Z Trick List", "https://aprendaslalom.com.br/en/a-z/"),
  ];

  // The list of paths to the files containing the trick lists
  // The paths are with respect to the root directory
  const files: string[] = [
    "./static/pdfs/world-skate-slalom-and-slides-trick-list.pdf",
  ];

  // Returns the result of the generateGuides function
  return generateGuides(heading, links, files);
}


// Function to generate the rulebooks
export function generateRulebooks() {

  // The heading for the rulebooks command
  const heading = "Here are the official rulebooks for the various types of inline skating:";

  // The list of links to the rulebooks
  const links: string[] = [];

  // The list of paths to the files containing the rulebooks
  // The paths are with respect to the root directory
  const files: string[] = [
    "./static/pdfs/world-skate-inline-freestyle-rulebook-2020.pdf",
    "./static/pdfs/world-skate-aggressive-inline-skating-rulebook-2022.pdf",
    "./static/pdfs/world-skate-inline-speed-skating-rulebook-2022.pdf",
  ];

  // Returns the result of the generateGuides function
  return generateGuides(heading, links, files);
}


// Function to generate the buying guides
export function generateBuyingGuides() {
  
  // The heading for the buying guides command
  const heading = "Here are some guides to help you with buying your first pair of skates:";

  // The list of links to the buying guides
  const links: string[] = [
    "https://www.reddit.com/r/rollerblading/comments/v4al05/beginners_guide_to_skating_equipment/",
    "https://www.reddit.com/r/rollerblading/wiki/buyers_guide/",
  ];

  // The list of paths to the files containing the buying guides
  // The paths are with respect to the root directory
  const files: string[] = [
    "./static/pdfs/skate-buying-guide.pdf",
  ];

  // Returns the result of the generateGuides function
  return generateGuides(heading, links, files);
}


// Function to generate the maintenance guides
export function generateMaintenanceGuides() {

  // The heading for the maintenance guides command
  const heading = "Here are some guides to help you with maintaining your skates:";

  // The list of links to the maintenance guides
  const links: string[] = [
    utils.hyperlink("Cleaning bearings (Inline Warehouse)", "https://youtu.be/iTb448Kq3fs"),
    utils.hyperlink("Cleaning bearings (Powerslide Inline Skates)", "https://youtu.be/B4TKr9zAUjc"),
    utils.hyperlink("Cleaning bearings (Back to Blading)", "https://youtu.be/ftBDpkIeBgM"),
    utils.hyperlink("Removing bearings (Tiago)", "https://youtu.be/SIBf_v-CLIk"),
    utils.hyperlink("Cleaning bearings (Tiago)", "https://youtu.be/foPrRcgtJf4"),
    utils.hyperlink("Cleaning bearings (Hockey Tutorial)", "https://youtu.be/KhRAXrMGzWY"),
    utils.hyperlink("Cleaning bearings (Top Puck)", "https://youtu.be/5aFOVREhrwM"),
  ];

  // The list of paths to the files containing the maintenance guides
  // The paths are with respect to the root directory
  const files: string[] = [
    "./static/pdfs/skate-maintenance-guide.pdf",
  ];

  // Returns the result of the generateGuides function
  return generateGuides(heading, links, files);
}


// The function to generate the various glossaries of inline skating terms
export function generateGlossaries() {

  // The heading for the glossaries command
  const heading = `Here is a list of glossaries for you to peruse:`;

  // The list of links to various glossaries of inline skating terms
  const links: string[] = [
    utils.hyperlink("Toxboe.net dictionary of inline skating terms", "https://toxboe.net/all/1997-aggressive-inline-skating-dictionary"),
    utils.hyperlink("Amanda Lane's list of aggressive inline skating terms", "https://www.angelfire.com/home/amandalane/sports/aggressiveinline/terms.html"),
    utils.hyperlink("How to speak skate!", "https://cibcrew.com/blogs/tips/skatepark-language"),
    utils.hyperlink("Roller Skate Nation's Glossary of Skating", "https://rollerskatenation.com/glossary-of-skating/"),
    utils.hyperlink("Figure skating glossary by myinlineskating.com", "https://www.myinlineskating.com/glossary"),
  ];

  // The list of paths to the files containing the various glossaries of inline skating terms
  // The paths are with respect to the root directory
  const files: string[] = [];
  
  // Returns the result of the generateGuides function
  return generateGuides(heading, links, files);
}


// The function to generate the miscellaneous resources
export function generateMiscResources() {

  // The heading for the miscellaneous resources command
  const heading = `Here is a list of miscellaneous resources that you can check out:`;

  // The list of links to various miscellaneous resources
  const links: string[] = [
    utils.hyperlink("Roller School iOS App (Paid)", "https://apps.apple.com/us/app/rollerschool/id962573665"),
    utils.hyperlink("Roller School Android App (Paid)", "https://play.google.com/store/apps/details?id=dv.rollerschool"),
  ];

  // The list of paths to the files containing the miscellaneous resources
  // The paths are with respect to the root directory
  const files: string[] = [
    "./static/pdfs/the-art-of-falling-by-naomi-grigg.pdf",
    "./static/pdfs/lets-skate-by-asha-kirkby-2017-version.pdf",
    "./static/images/slalom-skill-tree.png",
  ];
  
  // Returns the result of the generateGuides function
  return generateGuides(heading, links, files);
}
