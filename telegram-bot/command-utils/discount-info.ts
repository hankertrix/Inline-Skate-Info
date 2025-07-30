// The utilities for the discount info command

import * as utils from "../utils";
import { SPACING } from "../../src/lib/constants";
import type { Place } from "../types";

// The type of the retailer data
type RetailerData = {
  [path: string]: {
    listSlice: number[];
  };
};

// The type of the discount info JSON data
type DiscountInfo = {
  title: string;
  messageParts: string[];
  files: string[];
  retailerData: RetailerData;
};

// The regex to check for the discount info command
export const regex =
  /^\/?\b(?:students?)?[ _-]?disc(?:ount)?[ _-]?(?:info(?:rmation)?)?\b/i;

// Function to get the stores that have a student discount
async function getDiscountApplicableStoresDetails(retailerData: RetailerData) {
  //

  // The list of strings to make up
  // the final string containing all the stores' details
  const detailStrList: string[] = [];

  // Load all the JSON data
  const jsonData = await Promise.all(
    Object.keys(retailerData).map((path) => utils.loadJsonData(path, ""))
  );

  // Iterate over all of the metadata in the retailer data
  for (const [index, metadata] of Object.values(retailerData).entries()) {
    //

    // Iterates over the relevant portion of the data
    for (const [store, info] of Object.entries(jsonData[index]).slice(
      ...metadata.listSlice
    ) as Array<[string, Place]>) {
      //

      // Initialise the list to store the information for the store
      const infoStrList: string[] = [];

      // Adds the store name to the list
      infoStrList.push(
        utils.bold(utils.hyperlink(store, info.website as string))
      );

      // Iterates the information
      for (const [label, value] of Object.entries(info)) {
        //

        // If the label is "description", "website" or "mapLink",
        // continue the loop
        if (["description", "website", "mapLink"].includes(label)) {
          continue;
        }

        // If the label is "address"
        else if (label === "address") {
          //

          // Adds the address hyperlinked with the map link
          infoStrList.push(
            `${utils.bold(
              `${utils.titlecase(label)}:`
            )} ${utils.hyperlink(value, info.mapLink as string)}`
          );
        }

        // Otherwise, add the information to the list
        else
          infoStrList.push(
            `${utils.bold(`${utils.titlecase(label)}:`)} ${value}`
          );
      }

      // Adds the details of the store to the list
      detailStrList.push(infoStrList.join("\n"));
    }
  }

  // Returns the joined string for all the details of the stores
  return detailStrList.join(SPACING);
}

// Function to generate the discount info message as well as the files needed
export async function generateDiscountInfo(): Promise<[string, string[]]> {
  //

  // Loads the JSON data containing the discount info
  const { title, messageParts, files, retailerData } =
    (await utils.loadJsonData("misc/discount-info")) as DiscountInfo;

  // Join the message parts together
  const joinedParts = messageParts.join("\n\n");

  // Gets the details of the stores with the student discount
  const details = await getDiscountApplicableStoresDetails(retailerData);

  // The discount info message
  const message =
    `${utils.bold(title)}\n\n\n${joinedParts}\n\n\n${details}`.trim();

  // Returns the discount info message and the list of paths to files
  return [message, files];
}
