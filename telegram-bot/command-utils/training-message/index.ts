// Module to export all the functions to generate the training message

import type { Context } from "telegraf";
import { DEV } from "../../../constants";
import * as trgMsgUtils from "./utils";
import * as ntu from "./ntu";
import * as nus from "./nus";


// The type representing a training message function
type TrainingMessageFunction = (ctx: Context, message: string) => Promise<void>;

// The interface for the training message module
interface TrainingMessageModule {
  handler: TrainingMessageFunction,
  help: string
};

// The type of the training message modules
type TrainingMessageModules = {
  [name: string]: TrainingMessageModule
};

// The dictionary containing all the mappings between the name and the training message function
const trgMsgModules: TrainingMessageModules = {
  ntu: ntu,
  nus: nus,
} as const;

// The list of training message scenes
export const trainingMsgScenes = [
  nus.validateScene
];

// The regex for the training message command
export const regex = /^\/?(?:train(?:ing)?|trg|trng?)_?(?:msg|message)?/i;


// Function to get the module mapping
function getModuleMapping(): [number, string][] {
  return JSON.parse(process.env.MODULE_MAPPING as string);
}


// Function to handle the training message command
export async function handler(ctx: Context, message: string) {

  // Gets the module mapping
  const moduleMapping = getModuleMapping();

  // Gets the data for the given chat ID
  // It's in the format [chatID: number, location: string, message: string, dates: string[], moduleName: string]
  const relevantData = moduleMapping.filter(data => data[0] === ctx.chat!.id);

  // If the data is empty (the chat ID wasn't found in the database) then calls the function to handle the training message command when it hasn't been set up
  if (relevantData.length === 0) return await trgMsgUtils.handleTrgMsg(ctx, message);

  // Gets the module string for the current chat
  const [_, moduleStr] = relevantData[0];

  // Gets the training message function from the function mapping
  const trgMsgFunction = trgMsgModules[moduleStr].handler;

  // Calls the training message function
  await trgMsgFunction(ctx, message);
}


// Function to generate the help text for the training message help command
export function generateHelpText(chatID: number) {

  // Gets the module mapping
  const moduleMapping = getModuleMapping();
  
  // Gets the data for the given chat ID
  // It's in the format [chatID: number, location: string, message: string, dates: string[], moduleName: string]
  const relevantData = moduleMapping.filter(data => data[0] === chatID);

  // If the data is empty (the chat ID isn't in the database), then tells the user that the training message hasn't been set up
  if (relevantData.length === 0) return `The training message has not been set up for this chat. Please contact ${DEV} if you would like to set up a training message.`;

  // Otherwise, gets the training message module string
  const [_, trgMsgModuleStr] = relevantData[0];

  // Gets the help message from the data
  const helpText = trgMsgModules[trgMsgModuleStr].help;

  // Returns the help text
  return helpText;
}
