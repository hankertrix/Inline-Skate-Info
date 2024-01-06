// Module to handle all the commands related to places, like where to buy skates, where to rent skates and so on

import * as utils from "../utils";
import { removeBotUsername } from "../bot-utils";
import { SPACING, CATEGORY_SPACING, LABEL_SPACING } from "../../src/lib/constants";
import type { ObjectValues, Dict, Place } from "../types";


// The enum representing the various places
export const PLACES = {
  RetailersInSingapore: "retailers-in-singapore",
  SingaporeRentalShops: "places-to-rent",
  OverseasRetailers: "overseas-retailers",
  OnlineRetailers: "online-retailers",
  SkateParks: "skate-parks",
  SkatingRinks: "skating-rinks"
} as const;

// The type representing the places
export type Places = ObjectValues<typeof PLACES>;

// The regex to check for the where to buy command
export const whereToBuyRegex = /^\/?\b(?:(?:(?:places?|where)(?:[ _-]?to[ _-]?buy))|buy(?:ing)?)\b/i;

// The regex to check for the where to rent command
export const whereToRentRegex = /^\/?\b(?:(?:(?:places?|where)(?:[ _-]?to[ _-]?rent))|rent(?:ing)?)\b/i;

// The regex to check for the skate parks command
export const skateParksRegex = /^\/?\b(?:skate)?[ _-]?(?:park|ramp)s?\b/i;

// The regex to check for the skating rinks command
export const skatingRinksRegex = /^\/?\b(?:skat(?:e|ing))?[ _-]?rinks?\b/i;


// The spacing between each place
const PLACES_SPACING = SPACING;

// The spacing between the title and the rest of the content (it includes the places spacing as well, so the effective title spacing would be PLACES_SPACING + TITLE_SPACING)
const TITLE_SPACING = "";


// Function to load the JSON data of the places
export async function loadPlacesJson(place: Places) {

  // Loads and returns the JSON data
  return await utils.loadJsonData(`places/${place}`);
}


// Function to return the text from the JSON data
export async function generatePlacesText(place: Places, formatFunc: (text: string) => string = utils.titlecase, separator: string = ": " ) {

  // Loads the JSON data
  const json = await loadPlacesJson(place) as Dict<Place>;

  // The list containing the information about the places
  const infoStrList: string[] = [];

  // Adds the title to the information list
  infoStrList.push(`${utils.bold(
    utils.getTitleFromFilename(place, formatFunc)
  )}${TITLE_SPACING}`);

  // Iterates the JSON data
  for (const [placeName, placeInfo] of Object.entries(json)) {

    // The list containing the information about the place
    const placeInfoStrList = [];

    // If the place has a website, adds the bold and hyperlinked place name to the list
    if (typeof placeInfo.website === "string")
      placeInfoStrList.push(
        utils.bold(
          utils.hyperlink(placeName, placeInfo.website)
        )
      );

    // Otherwise, just add the place name, bolded
    else placeInfoStrList.push(utils.bold(placeName));

    // Iterates the information
    for (const [key, value] of Object.entries(placeInfo)) {

      // If the label is for the map link or the website, skip the label
      if (["website", "mapLink"].includes(key)) continue;

      // Bolds the label and the separator
      const label = utils.bold(
        `${utils.titlecase(key)}${separator}`
      );

      // If the current label is the address and there is a map link in the place information
      if (key === "address" && typeof placeInfo.mapLink === "string") {

        // Adds the address hyperlinked with the map link
        placeInfoStrList.push(`${label}${
          utils.hyperlink(value, placeInfo.mapLink)
        }`);
      }

      // Otherwise, just add the label and the information the list
      else placeInfoStrList.push(`${label}${value}`);
    }

    // Adds the place information to the main information list
    infoStrList.push(placeInfoStrList.join(LABEL_SPACING));
  }
  
  // Returns the information list joined into a string
  return infoStrList.join(PLACES_SPACING).trim();
}


// Function to handle the where to buy command
export async function whereToBuyHandler(message: string) {

  // Remove the bot's username from the message
  message = removeBotUsername(message);

  // Makes the message lowercase and removes the command from the message
  const msg = message.toLowerCase()
    .replace(whereToBuyRegex, "").trim();

  // Initialise the jsonFiles variable
  let jsonFiles: Places[];
  
  // If the msg is all
  if (msg === "all") jsonFiles = [
    PLACES.RetailersInSingapore,
    PLACES.OverseasRetailers,
    PLACES.OnlineRetailers
  ];

  // Otherwise, if the message is some other words
  else {

    // Loads the categories
    const categories = await utils.loadJsonData(
      "places/where-to-buy-categories"
    );

    // Gets the category from the categories dictionary
    const category = utils.dictGet(categories, msg) as Places | null;
    
    // If the category is found, sets the list of JSON files to the one in the category
    if (category) jsonFiles = [category];
  
    // Otherwise, load the data for the retailers in Singapore
    else jsonFiles = [PLACES.RetailersInSingapore];
  }

  // Converts all the JSON files into a list of text
  const replyStrList = await Promise.all(jsonFiles.map(place => generatePlacesText(place)));

  // Returns the list of text joined by the category spacing
  return replyStrList.join(CATEGORY_SPACING);
}


// Function to handle the commands to get the places without categories
export async function uncategorisedPlacesHandler(places: Places) {

  // Returns the text generated for the given places
  return await generatePlacesText(places);
}
