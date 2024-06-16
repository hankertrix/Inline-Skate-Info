// Scenes for the poll message

import {
  type NumberingStyle,
  type CreatePollMessageState,
  type CreatePollMessageConfig,
  type CreatePollMessageContext,
  NUMBERING_STYLES,
} from "./config";
import { Scenes, Composer, Markup } from "telegraf";
import * as filters from "telegraf/filters";
import * as utils from "../../utils";
import {
  promptUserForInput,
  markMessageForDeletion,
  deleteMessages,
  removeCommand,
  callStep,
  cancelCommand,
  generateReplyKeyboard,
} from "../../bot-utils";
import { generatePollMessage } from "./utils";


// The scene name for the create poll message scene
const sceneName = "createPollMessage";

// The regex to get the numbering style from the string
// generated from the createNumberingStylesList function
const getNumberingStyleFromStringRegex = /^[A-Za-z_ ]+/;

// The regex to get whether the user said yes
const getYesRegex = /^[yYtT]/;

// The regex to get whether the user said no
const getNoRegex = /^[nNfF]/;


// The function to handle the done command
async function doneCommandHandler(ctx: Scenes.WizardContext) {

  // Gets the state object
  const state = ctx.wizard.state as CreatePollMessageState;

  // Gets the poll config object
  const pollConfig = state.pollConfig as Required<CreatePollMessageConfig>;

  // If the message or poll options are not given
  if (!state.pollMessage || !pollConfig.pollOptions?.length) {

    // Tells the user that the poll message is not completed
    // and they should use the "/cancel" command instead to cancel
    // the operation.
    // Also, exit the function
    return await promptUserForInput(
      ctx, pollConfig.incompleteDataMessage
    );
  }

  // Otherwise, mark the user's message for deletion
  markMessageForDeletion(ctx, ctx.message!.message_id);

  // Create the poll message
  const { userMessage, callback } = generatePollMessage(
    state.pollMessage,
    pollConfig,
  );

  // Calls the callback to send the poll message
  await callback(ctx, userMessage);

  // Delete all the messages sent by the user
  await deleteMessages(
    ctx, ...(state.messagesToDelete ?? [])
  );

  // Exit the scene
  await ctx.scene.leave();
}


// Function to create a step in the poll message scene
function createStep(
  func: (
    ctx: Scenes.WizardContext,
    next: () => Promise<void>
  ) => Promise<unknown>
) {

  // Create a new composer
  const composer = new Composer<Scenes.WizardContext>();

  // Attach the cancel command handler
  composer.command(...cancelCommand);

  // Attach the done command handler
  composer.command("done", doneCommandHandler);

  // Attach the function as the main handler
  composer.on(filters.message("text"), func);

  // Returns the composer
  return composer;
}


// The function to create a list of numbering styles as a string
// from the numbering style constant
export function createNumberingStylesList() {

  // The list of numbering styles to
  // pass to the createReplyKeyboard function
  const numberingStyles: string[] = [];

  // Iterate over the numbering style constant
  for (const [property, value] of Object.entries(NUMBERING_STYLES)) {

    // Replace the underscores with a space
    let propertyStr = property.replaceAll("_", " ").trim();

    // Title case the property string
    propertyStr = utils.titlecase(propertyStr);

    // Adds the property string
    // and the value to the list of numbering styles
    numberingStyles.push(`${propertyStr} ${value}`.trim());
  }

  // Returns the list of numbering styles
  return numberingStyles;
}


// The function to get the numbering style from the string
// created by the createNumberingStylesList function
export function getNumberingStyleFromString(str: string) {
  return str.replace(
    getNumberingStyleFromStringRegex, ""
  ).trim() as NumberingStyle;
}


// The create poll message scene
export const createPollMessageScene = new Scenes.WizardScene(

  // The scene name
  sceneName,

  // The first step to get the poll message
  createStep(
    async (context: Scenes.WizardContext, next: () => Promise<void>) => {

      // Cast the context to the correct type
      const ctx = context as CreatePollMessageContext;

      // Gets the state object
      const state = ctx.wizard.state as CreatePollMessageState;

      // Gets the poll config object
      const pollConfig = state.pollConfig as Required<CreatePollMessageConfig>;

      console.log("1st step");
      console.log(pollConfig);

      // If the message is already given
      if (state.pollMessage) {

        // Calls the next function in the scene
        // and exit the function
        return await callStep(ctx, next);
      }

      // Otherwise, gets the message sent by the user
      let message = ctx.message.text;

      // Gets the message text from the message
      message = removeCommand(message);

      // If the message is empty
      if (!message) {

        // Prompt the user for input with the first prompt.
        // Zero is the first prompt due to zero indexing
        return await promptUserForInput(
          ctx,
          pollConfig.prompts[0]
        );
      }

      // Otherwise
      else {

        // Save the message to the state
        state.pollMessage = message;

        // Calls the next function in the scene
        // and exit the function
        return await callStep(ctx, next);
      }
    }
  ),

  // The second step to get the numbering style
  createStep(
    async (context: Scenes.WizardContext) => {

      // Cast the context to the correct type
      const ctx = context as CreatePollMessageContext;

      // Gets the state object
      const state = ctx.wizard.state as CreatePollMessageState;

      // Gets the poll config object
      const pollConfig = state.pollConfig as Required<CreatePollMessageConfig>;

      console.log("2nd step");
      console.log(pollConfig);

      // Gets the message from the user
      let message = ctx.message.text;

      // Remove the command and the bot's username from the message
      message = removeCommand(message);

      // Gets the list of numbering styles
      const numberingStyles = createNumberingStylesList();

      // Gets the prompts for this step
      // 1 means the second step thanks to zero indexing
      const prompts = pollConfig.prompts[1];

      // If the message is not one of the accepted numbering styles
      if (!numberingStyles.includes(message)) {

        // Tells the user to enter a valid numbering style
        // and exit the function
        return await promptUserForInput(
          ctx,
          utils.strFormat(
            prompts.failure.prompt,
            { numberingStyles: utils.stripHtml(numberingStyles.join("\n")) }
          ),
          {
            ...generateReplyKeyboard(
              numberingStyles,
              {
                oneTime: true,
                resize: true,
                placeholder: prompts.failure.placeholder
              }
            ),
          }
        );
      }

      // Otherwise
      else {

        // Save the numbering style to the state
        pollConfig.numberingStyle = getNumberingStyleFromString(message);

        // Ask the user if they want a poll with only one choice
        await promptUserForInput(
          ctx,
          prompts.success.prompt,
          {
            ...generateReplyKeyboard(
              ["Yes", "No"],
              {
                oneTime: true,
                resize: true,
                placeholder: prompts.success.placeholder
              }
            )
          }
        );

        // Go to the next function in the scene
        return ctx.wizard.next();
      }
    }
  ),

  // The third step to get if the user wants a poll with only one choice
  createStep(
    async (context: Scenes.WizardContext) => {

      // Cast the context to the correct type
      const ctx = context as CreatePollMessageContext;

      // Get the state object
      const state = ctx.wizard.state as CreatePollMessageState;

      // Gets the poll config object
      const pollConfig = state.pollConfig;

      console.log("3rd step");
      console.log(pollConfig);

      // Gets the message from the user with the command removed
      const message = removeCommand(ctx.message.text);

      // Get the prompts for this step
      // 2 is the 3rd step because of zero indexing
      const prompts = pollConfig.prompts[2];

      // The boolean condition representing if the message is valid
      const messageIsValid = message && (
        message.match(getYesRegex) || message.match(getNoRegex)
      );

      // If the message isn't valid
      if (!messageIsValid) {

        // Tells the user to answer either yes or no
        return await promptUserForInput(
          ctx,
          prompts.failure.prompt,
          {
            ...generateReplyKeyboard(
              ["Yes", "No"],
              {
                oneTime: true,
                resize: true,
                placeholder: prompts.failure.placeholder
              }
            )
          }
        );
      }

      // Otherwise, if the user answers yes
      else if (message.match(getYesRegex)) {

        // Set the single choice poll option to true
        pollConfig.isSingleChoicePoll = true;
      }

      // Otherwise, the user must have answered no
      else {

        // Set the single choice poll option to false
        pollConfig.isSingleChoicePoll = false;
      }

      // Ask the user for the poll options
      await promptUserForInput(
        ctx,
        prompts.success,
        { ...Markup.removeKeyboard() }
      );

      // Go to the next function in the scene
      return ctx.wizard.next();
    }
  ),

  // The fourth step to get the poll options
  createStep(
    async (context: Scenes.WizardContext, next: () => Promise<void>) => {

      // Cast the context to the correct type
      const ctx = context as CreatePollMessageContext;

      // Gets the state object
      const state = ctx.wizard.state as CreatePollMessageState;

      // Gets the poll config object
      const pollConfig = state.pollConfig as Required<CreatePollMessageConfig>;

      console.log("4th step");
      console.log(pollConfig);

      // Gets the message from the user
      let message = ctx.message.text;

      // Gets the message text from the message
      message = removeCommand(message);

      // Gets the prompts for this step
      // 3 is the 4th step because of zero indexing
      const prompts = pollConfig.prompts[3];

      // If the message is empty
      if (!message) {

        // Tells the user to enter a poll option
        // and exit the function
        return await promptUserForInput(
          ctx,
          prompts.failure
        );
      }

      // Otherwise
      else {

        // Save the poll option to the state
        pollConfig.pollOptions.push(message);

        // If the there are no additional options
        if (!pollConfig.additionalOptionsFuncList?.length) {

          // Tells the user to enter another poll option
          // and exit the function
          return await promptUserForInput(
            ctx,
            prompts.success
          );
        }

        // Otherwise, set the additional options index to 0
        pollConfig.additionalOptionsIndex = 0;

        // Calls the function in the next step
        return await callStep(ctx, next);
      }
    }
  ),

  // The fifth step in creating the poll message
  // which is to get all the additional options if there are any
  createStep(
    async (context: Scenes.WizardContext, next: () => Promise<void>) => {

      // Cast the context to the correct type
      const ctx = context as CreatePollMessageContext;

      // Gets the state object
      const state = ctx.wizard.state as CreatePollMessageState;

      // Gets the poll config object
      const pollConfig = state.pollConfig as Required<CreatePollMessageConfig>;

      // Gets the additional options index
      let index = pollConfig.additionalOptionsIndex;

      // Gets the additional options function list.
      // The exclamation mark at the end is to assert
      // to typescript that the function list is defined
      // as this step can only be entered if there are
      // functions in the additional options function list.
      const funcList = pollConfig.additionalOptionsFuncList;

      // Gets the message from the user
      let message = ctx.message.text;

      // Gets the message text from the message
      message = removeCommand(message);

      // Calls the function at the current index
      // and get whether the function is successful or not
      const success = await funcList[index](ctx, message, state);

      // If the function is successful,
      // increment the additionalOptionsIndex by 1
      if (success) index = ++pollConfig.additionalOptionsIndex;

      // If the additional options index is
      // past the length of the function list - 1
      // (length is 1 more than the last index)
      if (index > funcList.length - 1) {

        // Sets the index back to 0
        pollConfig.additionalOptionsIndex = 0;

        // Calls the previous step
        return await callStep(ctx, next, true);
      }
    }
  ),
);
