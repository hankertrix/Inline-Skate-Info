// The utilities for the discount info command

import * as utils from "../utils";
import { SPACING } from "../../src/lib/constants";
import type { Dict, Place } from "../types";


// The type of the discount info JSON data
type DiscountInfo = {
  title: string,
  messageParts: string[],
  pdfFiles: string[],
  listSlice: number[]
};

// The regex to check for the discount info command
export const regex = /^\/?\bdiscount[ _\-]?(?:info(?:rmation)?)?\b/i;


// Function to get the stores that have a student discount
async function getDiscountApplicableStoresDetails(listSlice: number[]) {

  // Loads the JSON data for the retailers in Singapore
  const data = await utils.loadJsonData("places/singapore-retailers") as Dict<Place>;

  // The list of strings to make up the final string containing all the stores' details
  const detailStrList: string[] = [];

  // Iterates over the relevant portion of the data (Hvper Sport / HiRoller, Ernsports and Inlinex)
  for (const [store, info] of Object.entries(data).slice(...listSlice) as Array<[string, Place]>) {

    // Initialise the list to store the information for the store
    const infoStrList: string[] = [];

    // Adds the store name to the list
    infoStrList.push(utils.bold(
      utils.hyperlink(store, info.website as string)
    ));

    // Iterates the information
    for (const [label, value] of Object.entries(info)) {

      // If the label is "description", "website" or "mapLink" continues the loop
      if (["description", "website", "mapLink"].includes(label)) continue;

      // If the label is "address"
      else if (label === "address") {

        // Adds the address hyperlinked with the map link
        infoStrList.push(`${utils.bold(
        `${utils.titlecase(label)}:`
      )} ${utils.hyperlink(value, info.mapLink as string)}`)
      }

      // Otherwise, add the information to the list
      else infoStrList.push(`${utils.bold(
        `${utils.titlecase(label)}:`
      )} ${value}`);
    }

    // Adds the details of the store to the list
    detailStrList.push(infoStrList.join("\n"));
  }

  // Returns the joined string for all the details of the stores
  return detailStrList.join(SPACING);
}


// Function to generate the discount info message as well as the files needed
export async function generateDiscountInfo() {

  // Loads the JSON data containing the discount info
  const { title, messageParts, pdfFiles, listSlice } = await utils.loadJsonData("misc/discount-info") as DiscountInfo;

  // Gets the details of the stores with the student discount
  const details = await getDiscountApplicableStoresDetails(listSlice);

  // The discount info message
  const message = `${utils.bold(title)}\n\n\n${messageParts.join("\n\n")}\n\n\n${details}`.trim();
  
  // Returns the discount info message and the list of paths to pdf files
  return [message, pdfFiles];
}