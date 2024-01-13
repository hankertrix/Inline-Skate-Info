// Module to export all the functions to generate the training message

import type { Scenes } from "telegraf";
import type { Message } from "telegraf/types";
import { DEV } from "../../../src/lib/constants";
import { getModuleString } from "../../utils";
import * as trgMsgUtils from "./utils";
import * as ntu from "./ntu";
import * as nus from "./nus";


// The type representing a training message handler
export type TrainingMessageHandler = (
  ctx: Scenes.WizardContext & { message: Message.TextMessage },
  message: string
) => Promise<unknown>;

// The interface for the training message module
interface TrainingMessageModule {
  handler: TrainingMessageHandler,
  help: string
};

// The type of the training message modules
type TrainingMessageModules = {
  [name: string]: TrainingMessageModule
};

// The dictionary containing all the mappings between the name
// and the training message modules
const trgMsgModules: TrainingMessageModules = {
  ntu: ntu,
  nus: nus,
} as const;

// The list of training message scenes
export const trainingMsgScenes = [
  nus.validateScene
] as const;


// Function to handle the training message command
export async function handler(
  ...[ctx, message]: Parameters<TrainingMessageHandler>
): ReturnType<TrainingMessageHandler> {

  // Gets the module string for the current chat
  const moduleStr = getModuleString(ctx.chat!.id);

  // If the module string isn't found
  // (the chat ID wasn't found in the database),
  // then calls the function to handle the training message command
  // when it hasn't been set up
  if (!moduleStr) {
    return await trgMsgUtils.handleTrgMsg(ctx, message);
  }

  // Otherwise, get the training message handler from the module mapping
  const trgMsgHandler = trgMsgModules[moduleStr].handler;

  // Calls the training message function
  await trgMsgHandler(ctx, message);
}


// Function to generate the help text for the training message help command
export function generateHelpText(chatId: number) {

  // Gets the module string
  const moduleStr = getModuleString(chatId);

  // If the module string isn't found
  // (the chat ID wasn't found in the database),
  // then tells the user that the training message hasn't been set up
  if (!moduleStr) {
    return `The training message has not been set up for this chat. Please contact ${DEV} if you would like to set up a training message.`;
  }

  // Gets the help message from the data
  const helpText = trgMsgModules[moduleStr].help;

  // Returns the help text
  return helpText;
}
