// Module containing all the scenes for the telegram bot

import { Scenes, Composer } from "telegraf";
import * as filters from "telegraf/filters";
import {
  cancelCommand,
  createWizardScene,
  markMessageForDeletion,
  promptUserForInput,
  removeCommand
} from "./bot-utils";
import { TRAINING_MSG_SCENES } from "./command-utils/training-message";
import { createPollMessageScene } from "./command-utils/poll";


// The wizard scene to validate user input

// The validate handler
const validateHandler = new Composer<Scenes.WizardContext>();

// Function to handle the cancel command in the scene
validateHandler.command(...cancelCommand);


// Function to run when the user is in the scene and sends a message
validateHandler.on(filters.message("text"), async ctx => {

  // Gets the state object
  const state = ctx.wizard.state as {
    message: string,
    callback: (ctx: Scenes.WizardContext, input: string) => Promise<void>,
    validator?: (input: string) => boolean,
  };

  // Gets the message from the state
  const message = state.message;

  // Gets the user's input while removing the command at the start,
  // as well as the bot's username
  const input = removeCommand(ctx.message.text);

  // The default validator to use when no validator is given
  function defaultValidator(input: string) {

    // Returns true if the input isn't empty and false otherwise
    return !!input;
  }

  // Gets the validator given and use the default validator if none is given
  const validator = state.validator ?? defaultValidator;

  // If the validator returns false
  if (!validator(input)) {

    // Prompts the user for an input and exits the function
    return await promptUserForInput(ctx, message);
  }

  // Otherwise, mark the current message sent
  // by the user for deletion if possible
  markMessageForDeletion(ctx, ctx.message.message_id);

  // Get the callback function from the state
  const callback = state.callback;

  // Calls the function with the context and the user's input
  await callback(ctx, input);

  // Exits the scene
  await ctx.scene.leave();
});


// The scene to validate user input
const validateScene = createWizardScene("validate", validateHandler);




// The list of all the scenes to attach to the telegram bot
const scenes = [
  validateScene,
  createPollMessageScene,
  ...TRAINING_MSG_SCENES
] as const;

// The scene stage to attach to the telegram bot
export const stage = new Scenes.Stage<Scenes.WizardContext>(scenes);
