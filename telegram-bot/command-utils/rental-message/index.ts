// The utility functions for the rental message
// and create rental message command

import { type Scenes } from "telegraf";
import type { Message, ParseMode } from "telegraf/types";
import type { CbQuery } from "../../types";
import {
  type PollConfig,
  type CreatePollMessageState,
  type CreatePollMessageConfig,
  POLL_TYPES,
  SINGLE_CHOICE_POLL_MARK,
  getName,
  getPollOptions,
  getPollMessage,
  reformPollMessage,
  createConfig,
} from "../poll-message";
import { DEV } from "$lib/constants";
import { getModule } from "../../utils";
import {
  answerIfGlobalLimitIsHit,
  answerRentalMessageCbQuery,
} from "./utils";
import {
  DEFAULT_CREATE_RENTAL_MSG_CONFIG,
  DEFAULT_RENTAL_MSG_CONFIG
} from "./defaults";
import * as ntu from "./ntu";
export { DEFAULT_CREATE_RENTAL_MSG_CONFIG };


// The type of the rental message handler
export type RentalMessageHandler = (
  ctx: Scenes.WizardContext & { message: Message.TextMessage },
  message: string
) => Promise<unknown>;

// The rental message callback context type
type RentalMessageCallbackContext = Scenes.WizardContext & {
  callbackQuery: CbQuery
};

// The type of the rental message callback handler
export type RentalMessageCallbackHandler = (
  ctx: RentalMessageCallbackContext,
  callbackQuery: CbQuery,
  messageText: string,
  pollConfig?: Required<PollConfig>,
) => Promise<unknown>;

// The interface for the rental message module
interface RentalMessageModule {
  handler: RentalMessageHandler,
  help: string,
  callbackHandler?: RentalMessageCallbackHandler
};

// The type of the rental message modules
type RentalMessageModules = {
  [name: string]: RentalMessageModule
};

// The dictionary containing all of the mappings between the name
// and the rental message module
const RENTAL_MSG_MODULES: RentalMessageModules = {
  "ntu": ntu
} as const;


// Function to handle the rental message command
export async function handler(
  ...[ctx, message]: Parameters<RentalMessageHandler>
) {

  // Gets the module
  const module = getModule(ctx.chat!.id, RENTAL_MSG_MODULES);

  // If the module isn't found
  if (!module) {

    // Tells the user that the rental message hasn't been set up
    const botMessage = await ctx.reply(
      `No rental message was found for this chat, so please follow the process to create a rental message. If you would like to set up a rental message for this chat, please contact ${DEV}.`
    );

    // The initial state to pass to the create poll message scene
    const initialState: Required<Omit<CreatePollMessageState, "pollMessage">> =
      {
        messagesToDelete: [botMessage.message_id],
        pollConfig: createConfig<Partial<CreatePollMessageConfig>>(
          {},
          DEFAULT_CREATE_RENTAL_MSG_CONFIG,
        )
      };

    // Enters the create poll message scene with
    // all the default rental message options
    return ctx.scene.enter("createPollMessage", initialState);
  }

  // Otherwise, gets the rental message handler from the module mapping
  const rentalMsgHandler = module.handler;

  // Calls the rental message function
  await rentalMsgHandler(ctx, message);
}


// The default function to use to handle the callback query
export async function defaultCallbackHandler(
  ...[
    ctx,
    callbackQuery,
    messageText,
    pollConfig,
  ]: Parameters<RentalMessageCallbackHandler>
): ReturnType<RentalMessageCallbackHandler> {

  // If the poll configuration object is not given
  if (!pollConfig) {

    // Initialise the default configuration
    pollConfig = createConfig<PollConfig>({}, DEFAULT_RENTAL_MSG_CONFIG);
  }

  // If the message contains the single poll option mark
  if (messageText.includes(SINGLE_CHOICE_POLL_MARK)) {

    // Set the single choice poll option to true
    pollConfig.isSingleChoicePoll = true;
  }

  // Gets the rental option
  const rentalOption = callbackQuery.data;

  // Gets the name of the person
  const name = getName(callbackQuery.from);

  // Gets the message object
  const message = callbackQuery.message;

  // Create the additional options to edit the message
  const additionalOptions = {
    parse_mode: "HTML" as ParseMode,
    reply_markup: {
      inline_keyboard: message.reply_markup.inline_keyboard
    }
  };

  // The variable to indicate that the rental option given
  // is the tag string
  const isTag = rentalOption === pollConfig.tagString;

  // If the rental option doesn't exist,
  // and the selected option isn't the tag string
  if (!isTag && messageText.indexOf(rentalOption) === -1) {

    // Tells the user that the poll option doesn't exist
    return await ctx.answerCbQuery(
      `The option "${rentalOption
      }" doesn't exist on the rental message you are responding to.`
    );
  }

  // Otherwise, gets the list of rental options
  // The inline keyboard will have the last option removed
  // as that is the option to tag the entry
  const rentalOptions = getPollOptions(
    message.reply_markup.inline_keyboard.slice(0, -1)
  );

  // Gets the rental message
  const rentalMessage = getPollMessage(messageText, rentalOptions);

  // Gets the reformed poll message
  // and the variable to indicated whether the person has been added
  // or removed from the rental option
  const { reformedPollMessage, removed, tagged } = reformPollMessage(
    messageText,
    rentalMessage,
    rentalOption,
    rentalOptions,
    name,
    pollConfig,
    isTag ? pollConfig.tagString : null,
  );

  // Get whether the global (poll-wide) limit
  // for the rental message has been reached
  const limitHit = await answerIfGlobalLimitIsHit(
    ctx, reformedPollMessage, name, pollConfig.maxNumberOfVotes
  );

  // If the poll-wide limit has been reached, exit the function
  if (limitHit) return;

  // Answers the rental message callback query
  const shouldEditMessage = await answerRentalMessageCbQuery(
    ctx, isTag, removed, tagged, rentalOption
  );

  // If the message should be edited,
  // edits the message with the reformed poll message
  // and exits the function
  if (shouldEditMessage) {
    return await ctx.editMessageText(reformedPollMessage, additionalOptions);
  }
}


// Function to handle the callback query
export async function callbackHandler(
  context: Scenes.WizardContext,
  next: () => Promise<void>,
  pollConfig?: Required<PollConfig>,
) {

  // Casts the context to the correct type
  const ctx = context as Scenes.WizardContext & {
    callbackQuery: CbQuery
  };

  // Gets the callback query and cast it to the CbQuery type
  const callbackQuery = ctx.callbackQuery;

  // Gets the message from the callback query
  const message = callbackQuery.message;

  // Gets the message text
  const messageText = message.text;

  // If the poll type isn't found in the message,
  // calls the next() function and
  // immediately exit the function so that
  // another handler can take care of the message
  if (!messageText.includes(POLL_TYPES.RENTAL)) return await next();

  // Gets the module from the chat ID
  const module = getModule(message.chat.id, RENTAL_MSG_MODULES);

  // If the module is found
  if (module) {

    // Gets the rental message callback handler for the module
    const rentalMsgCbHandler = module.callbackHandler;

    // If the rental message callback exists
    if (rentalMsgCbHandler) {

      // Calls the rental message callback and exit the function
      return await rentalMsgCbHandler(ctx, callbackQuery, messageText);
    }
  }

  // Otherwise, calls the default callback handler
  // to handle the callback query
  return await defaultCallbackHandler(
    ctx, callbackQuery, messageText, pollConfig
  );
}


// Function to generate the help text for the rental message help command
export function generateHelpText(chatId: number) {

  // Gets the module
  const module = getModule(chatId, RENTAL_MSG_MODULES);

  // If the module isn't found
  // (the chat ID wasn't found in the database),
  // then tells the user that the rental message hasn't been set up
  if (!module) {
    return `The rental message has not been set up for this chat. Please contact ${DEV} if you would like to set up a rental message.`;
  }

  // Gets the help message from the data
  const helpText = module.help;

  // Returns the help text
  return helpText;
}
