// The module containing all the utilities for the routes command

import * as utils from "../utils";
import { BOT_USERNAME, SPACING, LABEL_SPACING } from "$lib/constants";
import { regexEscape } from "../utils";
import type { ObjectValues, RouteData } from "../types";

// The regex for the routes command
export const routesRegex = new RegExp(
  String.raw`^\/?\b(?:urban)?[\s_-]?routes?\b(?:${regexEscape(BOT_USERNAME)})?`,
  "i"
);

// The enum for the difficulties
export const DIFFICULTY = {
  BEGINNER: "beginner",
  BEGINNER_TO_INTERMEDIATE: "beginner-to-intermediate",
  INTERMEDIATE: "intermediate",
  INTERMEDIATE_TO_ADVANCED: "intermediate-to-advanced",
  ADVANCED: "advanced",
  ADVANCED_TO_MASTER: "advanced-to-master",
  MASTER: "master",
} as const;

// The type representing the difficulties
type Difficulty = ObjectValues<typeof DIFFICULTY>;

// Function to load the routes JSON data
async function loadRoutesJson(): Promise<RouteData> {
  //

  // Loads and returns the JSON data
  return (await utils.loadJsonData("misc/routes")) as RouteData;
}

// The function to generate the routes text for a particular difficulty
function generateRoutesForDifficulty(
  jsonData: RouteData,
  difficulty: string,
  ignoreEmpty: boolean,
  separator: string = ": "
): string[] {
  //

  // Get the routes for the difficulty
  const routes = jsonData.difficulty[difficulty as Difficulty];

  // If there are no routes for the difficulty,
  // return the message that there are no routes
  if (!routes || routes.length < 1) {
    return ignoreEmpty
      ? []
      : [`Unfortunately, there are no routes for '${difficulty}'.`];
  }

  // Get the human readable string for the difficulty
  const difficultyStr = utils.titlecase(difficulty.replace(/[-_]/g, " "));

  // Initialise the list to store the text
  const routesTextList: string[] = [utils.bold(`${difficultyStr} Routes`)];

  // Iterate over the routes in the difficulty
  for (const route of routes) {
    //

    // Initialise the list for the route
    const routeInfoList: string[] = [];

    // Iterate over all the properties of the route
    for (const [key, value] of Object.entries(route)) {
      //

      // If the key is the name
      if (["name"].includes(key)) {
        //

        // Hyperlink the name with the link and add it to the list
        routeInfoList.push(utils.bold(utils.hyperlink(value, route.link)));

        // Continue the loop
        continue;
      }

      // If the value is empty, or the key is in the list, continue the loop
      if (!value || ["link"].includes(key)) continue;

      // Get the formatted key
      const formattedKey = utils.bold(`${utils.titlecase(key)}${separator}`);

      // Add the property to the route info list
      routeInfoList.push(`${formattedKey}${value}`);
    }

    // Add the route info to the list of routes
    routesTextList.push(routeInfoList.join(LABEL_SPACING));
  }

  // Return the list of routes
  return routesTextList;
}

// The function to generate the text when no difficulty is given
function generateFullRoutesText(
  data: RouteData,
  separator: string = ": "
): string[] {
  //

  // The list containing information about the routes
  const routesTextList: string[] = [
    `${utils.bold("Routes")}`,
    data.explanation,
  ];

  // Iterate over the difficulties
  for (const difficulty of Object.keys(data.difficulty)) {
    //

    // Generate the routes for the difficulty
    const difficultyRouteList = generateRoutesForDifficulty(
      data,
      difficulty as Difficulty,
      true,
      separator
    );

    // If the routes for the difficulty is empty then continue the loop
    if (difficultyRouteList.length < 1) continue;

    // Add the difficulty to the route info
    routesTextList.push(difficultyRouteList.join(SPACING));
  }

  // Return the route info
  return routesTextList;
}

// The function to generate the message
async function generateRoutesText(
  difficulty: string,
  separator: string = ": "
): Promise<string> {
  //

  // Load the JSON data
  const jsonData = await loadRoutesJson();

  // If the difficulty isn't given
  if (!difficulty) {
    //

    // Return the full routes text joined with the spacing
    return generateFullRoutesText(jsonData, separator).join(SPACING);
  }

  // Otherwise, return the routes text for the difficulty
  return generateRoutesForDifficulty(
    jsonData,
    difficulty,
    false,
    separator
  ).join(SPACING);
}

// Function to handle the routes command and generate the reply
export async function handler(message: string): Promise<string> {
  //

  // Remove the command from the message
  message = message.replace(routesRegex, "").trim();

  // Try to get the difficulty
  const difficulty = message
    .toLowerCase()
    .replace(/[\s_]/g, "-")
    .replace(/2/g, "to");

  // Create the route info
  const routesInfo = generateRoutesText(difficulty);

  // Return the route info
  return routesInfo;
}
