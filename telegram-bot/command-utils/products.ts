// The module containing all the utilities for the commands
// that generate a list of products

import * as utils from "../utils";
import type { Dict, Product } from "../types";

// The enum containing the various product types
export enum ProductTypes {
  ProtectiveGear = "protective-gear",
  Accessories = "accessories",
  Tools = "tools",
  MaintenanceItems = "maintenance-items",
  Clothing = "clothing",
}

// The regex to check for the protective gear command
export const protectiveGearRegex =
  /^\/?\b(?:protect(?:ion|ive)?[ _-]?(?:gears?)?|guards?|helmets?)\b/i;

// The regex to check for the accessories command
export const accessoriesRegex = /^\/?\bacc(?:s|essor(?:y|ies))?\b/i;

// The regex to check for the tools command
export const toolsRegex = /^\/?\b(?:inline[ _-]?)?(?:skate[ _-]?)?tools?\b/i;

// The regex to check for the maintenance items command
export const maintenanceItemsRegex =
  /^\/?\bmain(?:tenance|tain(?:[ea]nce|ing)?)[ _-]?items?\b/i;

// The regex to check for the clothing command
export const clothingRegex =
  /^\/?\b(?:(?:apparel|cloth(?:ing)?)[ _-]?(?:items?)?|socks?)\b/i;

// The function to generate the text for the products
export async function generateProductsText(productType: ProductTypes) {
  //

  // Asynchronously load the JSON data for the products
  const data = (await utils.loadJsonData(
    `/products/${productType}.json`
  )) as Dict<Product>;

  // The list containing the final message
  const finalMsgList: string[] = [];

  // Gets the title for the JSON data
  const title = utils.getTitleFromFilename(productType);

  // Adds the bolded title to the final message list
  finalMsgList.push(`${utils.bold(title)}\n`);

  // Iterates the JSON data
  for (const [item, info] of Object.entries(data) as Array<[string, Product]>) {
    //

    // Get the title for the product
    const title = `${utils.hyperlink(item, info.link)} - ${info.price}`;

    // Get the text for the product
    const text = `${utils.bold(title)}\n${info.description ? info.description : ""}`.trim();

    // Adds the text to the final message list
    finalMsgList.push(text);
  }

  // Returns the final message list joined with double new lines
  return finalMsgList.join("\n\n");
}
