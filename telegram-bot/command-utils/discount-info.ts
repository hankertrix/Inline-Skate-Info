// The utilities for the discount info command

import * as utils from "../utils";
import { SPACING } from "../../constants";
import type { Dict, Place } from "../types";


// The regex to check for the discount info command
export const regex = /^\/?\bdiscount[ _\-]?(?:info(?:rmation)?)?\b/i;


// Function to get the stores that have a student discount
async function getDiscountApplicableStoresDetails() {

  // Loads the JSON data for the retailers in Singapore
  const data = await utils.loadJsonData("places/singapore-retailers") as Dict<Place>;

  // The list of strings to make up the final string containing all the stores' details
  const detailStrList: string[] = [];

  // Iterates over the first 3 items of the data (Hvper Sport / HiRoller and Ernsports)
  for (const [store, info] of Object.entries(data).slice(0, 4) as Array<[string, Place]>) {

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

  // Gets the details of the stores with the student discount
  const details = await getDiscountApplicableStoresDetails();

  // The discount info message
  const message = `

${utils.bold("Information about the student discount")}


You can only use the student discount at 3 skate shops, namely Hvper Sport / HiRoller, Ernsports, and Inlinex. Hvper Sport / HiRoller and Ernsports only have discounts for skates on their catalogue, while Inlinex provides a 15% discount on all non-discounted skates. To obtain the student discount, it's quite likely that simply telling the shops the name of your inline skating club president would be sufficient, but you should still ask your club's president for the exact details.

Here are the details of the 3 places:


${details}

  `.trim();

  // The list of paths to the PDF files containing the discount info
  // The paths are with respect to the root directory
  const pdfFiles = [
    "./static/pdfs/hvper-sport-discount-catalogue.pdf",
    "./static/pdfs/ernsports-discount-catalogue.pdf"
  ];

  // Returns the discount info message and the list of paths to pdf files
  return [message, pdfFiles];
}