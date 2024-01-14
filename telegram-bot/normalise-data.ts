// Module to normalise the data in the json files and export it for the bot to use

import type { Dict } from "./types";
import { isObject, loadJsonData, monospace } from "./utils";

// All the string type keys in an object converted to lowercase
type LowercaseStringKeys<T> = Lowercase<Extract<keyof T, string>>;

// All non-string keys in an object
type NonStringKeys<T> = Exclude<keyof T, string>;

// An object having the same values of the original object but the keys are converted to lowercase
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type LowercaseObjectKeys<T extends { [key: string | number | symbol]: any }> = {
  [x in LowercaseStringKeys<T> | NonStringKeys<T>]: x extends string ? T[Lowercase<x>]: T[x];
};


// Function to convert all the keys in an object to lower case
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
function convertKeysToLowercase<T extends Record<any, any>>(obj: T): LowercaseObjectKeys<T> {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => {

    // If the value is an object, return the key in lowercase and convert the keys in the object to lowercase
    if (isObject(value)) return [`${key}`.toLowerCase(), convertKeysToLowercase(value)];

    // Otherwise return the key in lowercase and it's corresponding value
    else return [`${key}`.toLowerCase(), value];
  })) as LowercaseObjectKeys<T>;
}


// Function to load and edit the data in the terminology JSON
export async function loadTerminology() {

  // Loads the terminology JSON
  const json = await loadJsonData("terminology/terminology");

  // Adds the information to the data
  json["Tricks"]["Grinds"] += ` Use the ${monospace("/tricks grinds")} command to see the list of grind tricks.`;
  json["Tricks"]["Slides"] += ` Use the ${monospace("/tricks slides")} command to see the list of slide tricks.`;
  json["Tricks"]["Stops"] += ` Use the ${monospace("/tricks stops")} command to see the list of stops.`;

  // Returns the JSON data
  return convertKeysToLowercase(json) as Dict<string>;
}


// Function to load and edit the data in the skate recommendations JSON
export async function loadSkateRecs() {

  // Loads the skate recommendations JSON
  const json = await loadJsonData("misc/skate-recs");

  // Adds the information to the data
  json["recommendations"]["Urban / Freestyle Skates"][0]["FRX"]["reason"] += " If you want to know the differences between the FRX and the FRW, use the /fr_diff command.";
  json["recommendations"]["Urban / Freestyle Skates"][0]["Flying Eagle F5S Eclipse"]["reason"] += " If you want to know the differences between the Flying Eagle F5S and the Flying Eagle F6S, use the /f5s_vs_f6s command.";

  // Returns the JSON data
  return json;
}


// Function to load and edit the data in the fundamentals.json file
export async function loadFundamentalTricks() {

  // Loads the fundamental tricks JSON
  const json = await loadJsonData("tricks/fundamentals");

  // Adds the information to the data
  json["Forward stride"]["description"] += ` You can use the ${monospace("/tricks scootering")} and the ${monospace("/tricks double push")} commands to learn more about the two tricks.`;
  json["Improving your stride"]["description"] += ` You can use the ${monospace("/tricks double push")} command to learn more about the double push.`;
  json["Traversing stairs"]["description"] += ` Use the ${monospace("/tricks stair ride")} command to learn more.`;

  // Returns the JSON data
  return json;
}


