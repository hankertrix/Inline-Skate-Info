// Module that contains the functions to handle the brands command

import type { ObjectValues } from "../types";
import * as utils from "../utils";
import { removeBotUsername } from "../bot-utils";
import { SPACING } from "../../src/lib/constants";


// The enums for the brand categories
export const BRAND_CATEGORY = {
  Skates: "skate-brands",
  Frames: "frame-brands",
  Wheels: "wheel-brands",
  Liners: "liner-brands"
} as const;

// The type of for the brand categories
type BrandCategory = ObjectValues<typeof BRAND_CATEGORY>;

// The regex to check for the brands command
export const regex = /^\/?\bbrands?\b/i;

// The spacing between each brand
const BRANDS_SPACING = SPACING;

// The spacing between each category
const CATEGORY_SPACING = "\n\n\n\n\n";


// Function to load the JSON data of the brands
async function loadBrandsJson(category: BrandCategory) {

  // Loads and returns the JSON data
  return await utils.loadJsonData(`brands/${category}`);
}


// Function to generate the text for the list of brands
async function generateText(category: BrandCategory) {

  // Loads the JSON data for the category
  const data = await loadBrandsJson(category) as {
    [brandName: string]: {
      link: string,
      description: string
    }
  };

  // Initialise the list to store the brands message to send to the user
  const brandsMsgList: string[] = [];

  // Adds the bolded title to the message list
  brandsMsgList.push(utils.bold(
    utils.getTitleFromFilename(category)
  ));

  // Iterates the data
  for (const [brandName, info] of Object.entries(data)) {

    // Adds the information about the brand to the list
    brandsMsgList.push(`${utils.bold(
      utils.hyperlink(brandName, info.link)
    )}\n${info.description}`);
  }

  // Returns the brands message joined by the spacing between each brand
  return brandsMsgList.join(BRANDS_SPACING);
}


// Function to handle the brands command
export async function handler(message: string) {

  // Remove the bot's username from the message
  message = removeBotUsername(message);

  // Makes the message lower case and removes the brands command from the message
  const msg = message.toLowerCase().replace(regex, "").trim();

  // Initialise the list of JSON files to load
  let jsonFiles: BrandCategory[];

  // Loads the brand categories JSON
  const brandCategories = await utils.loadJsonData("brands/brand-categories");

  // Gets the category from the brand categories JSON
  const category = utils.dictGet(brandCategories, msg) as BrandCategory | null;

  // If there is a category found, set the JSON files to be the file with the category
  if (category) jsonFiles = [category];

  // Otherwise, set the JSON files to be all of the brand categories
  else jsonFiles = [
    BRAND_CATEGORY.Skates,
    BRAND_CATEGORY.Frames,
    BRAND_CATEGORY.Wheels,
    BRAND_CATEGORY.Liners
  ];

  // Gets the text from the JSON files
  const textList = await Promise.all(jsonFiles.map(file => generateText(file)));

  // Returns the text list joined by the category spacing
  return textList.join(CATEGORY_SPACING);
}
