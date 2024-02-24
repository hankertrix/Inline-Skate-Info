// Module containing all the utility functions for the telegram bot

import type { Context, Types } from "telegraf";
import type {
  InlineKeyboardMarkup,
  InlineQueryResult,
  InputMediaDocument,
  InputMessageContent,
  Message
} from "telegraf/types";
import type { OptionalPropertiesOf } from "./types";
import { Scenes, Markup, Composer } from "telegraf";
import * as utils from "./utils";
import {
  MAX_CHARACTERS,
  CACHE_TIME,
  SPACING,
  OPERATION_CANCELLED_MSG,
  EXIT_MESSAGE,
  MESSAGE_ENTITY_LIMIT
} from "../src/lib/constants";
import {
  ENABLE_DELETING_COMMAND_MESSAGES,
  ENABLE_ADMIN_CHECK
} from "../config";

// The regular expression to get the message entities (currently HTML tags)
const messageEntityRegex = /<.+?>/g;

// The regular expression to remove the bot's username
const removeBotUsernameRegex = /@inlineskatebot/g;

// The regular expression to remove the command from the start of the message
const removeCommandRegex = /^\/\w+/;


// Function to remove the bot's username from a message
export function removeBotUsername(message: string) {
  return message.replace(removeBotUsernameRegex, "").trim();
}


// Function to remove a command from a message
function removeCommand(message: string) {
  return message.replace(removeCommandRegex, "").trim();
}


// Function to remove the bot's username
// as well as the command from a message
export function removeBotUsernameAndCommand(message: string) {
  return removeBotUsername(removeCommand(message)).trim();
}


// Function to get the number of message entities in the message
function getMessageEntityCount(message: string) {

  // Gets all the message entities in the string
  const matches = message.match(messageEntityRegex);

  // Returns the number of matches
  return matches ? matches.length : 0;
}


// Function to get a message segment.
// This function is more space efficient as
// it fits more characters into a single message by
// ignoring the HTML tags,
// which don't count towards Telegram's character limit.
function getMsgSegment(
  startIndex: number,
  endIndex: number,
  message: string,
  maxLength: number = MAX_CHARACTERS,
  maxEntity: number = MESSAGE_ENTITY_LIMIT
) {

  // Initialise the message segment
  let msgSegment = "";

  // Initialise the message length
  const msgLen = message.length;

  // The variable to decide whether to continue the loop
  let continueLoop = true;

  // Loop while the message segment
  // without HTML isn't equal to the max length
  while (continueLoop) {

    // Gets the message segment
    msgSegment = message.slice(startIndex, endIndex);

    // If the message segment has more than
    // the maximum number of message entities
    if (getMessageEntityCount(msgSegment) > maxEntity) {

      // Gets all the message entities in the message
      const messageEntities = Array.from(
        msgSegment.matchAll(messageEntityRegex)
      );

      // Gets the message entity that is after the last message entity.
      // The last messsage entity is the message entity
      // at the message entity limit.
      const messageEntity = messageEntities[maxEntity];

      // Slice the message segment until the position of that message entity
      // that is after the last message entity and return it
      return msgSegment.slice(0, messageEntity.index);
    }

    // Breaks the loop if the message segment is already
    // shorter than the max length
    // or if the end index is equal to or past the length of the message
    else if (msgSegment.length < maxLength || endIndex >= msgLen) {
      continueLoop = false;
    }

    // Otherwise, remove the HTML from the message segment
    const msgSegmentWithoutHtml = utils.removeHtml(msgSegment);

    // Gets the length of the message segment with the HTML removed
    const segmentWithoutHtmlLen = msgSegmentWithoutHtml.length;
    
    // Breaks the loop if the message segment
    // without HTML is equal to the max length
   if (segmentWithoutHtmlLen === maxLength) continueLoop = false;
    
    // Otherwise, increase the end index by the difference in length
   // between the maximum length and the length of the segment without HTML
    endIndex += (maxLength - segmentWithoutHtmlLen);
  }

  // Returns the message segment
  return msgSegment;
}


// Function to split the message if it's too long
function splitMessage(
  message: string,
  maxLength: number = MAX_CHARACTERS,
  maxEntity: number = MESSAGE_ENTITY_LIMIT
) {

  // If the length of the message with the HTML removed is less than
  // or equal to the maximum length,
  // and the number of message entities in the message
  // doesn't exceed the maximum number of message entities
  if (utils.removeHtml(message).length <= maxLength
      && getMessageEntityCount(message) <= maxEntity) {

    // Returns the message in a list
    return [message];
  }

  // Otherwise, gets the length of the message
  const msgLen = message.length;

  // Initialise the list of messages
  const msges: string[] = [];

  // Initialise the index of the last new line character to 0
  let startIndex = 0;

  // Initialise the end index of a message segment
  // to be more than the start index by the maximum length
  let endIndex = startIndex + maxLength;

  // Iterates while the index is less than the length of the message
  while (endIndex < msgLen) {

    // Gets the first segment of the message that is of the maximum length
    const msgSegment = getMsgSegment(
      startIndex, endIndex, message, maxLength, maxEntity
    );

    // Gets the last match index of a new line character
    const [lastMatchIndex, matchStr] = utils.getLastMatchChained(
      msgSegment, "\n\n", "\n"
    );

    // Gets the end index of the message segment
    const msgSegmentEndIndex = startIndex + lastMatchIndex + matchStr.length;

    // Adds the message segment to the list
    msges.push(message.slice(startIndex, msgSegmentEndIndex).trim());

    // Sets the new start index to the end index of the message segment
    startIndex = msgSegmentEndIndex;

    // Sets the end index to be more than
    // the start index by the maximum length
    endIndex = startIndex + maxLength;
  }

  // Adds the final message segment to the list of messages
  msges.push(message.slice(startIndex, endIndex));

  // Returns the list of messages
  return msges;
}


// Function to reply to a context with message splitting
// and with HTML parse mode
export async function ctxReply(
  ctx: Context,
  reply: string,
  options: Types.ExtraReplyMessage = {}
) {

  // Iterates the splitted reply
  for (const segment of splitMessage(reply)) {

    // Replies to the user
    await ctx.reply(segment, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      ...options
    });
  }
}


// Function to generate the inline keyboard markup
export function generateInlineKeyboard(buttons: string[]) {

  // The list of inline keyboard buttons
  const inlineKeyboard = [];

  // Iterates over the buttons and add them to the inline keyboard
  for (const button of buttons) {

    // Adds the button to the inline keyboard
    inlineKeyboard.push(
      [Markup.button.callback(button, button)]
    );
  }

  // Returns the inline keyboard object
  return Markup.inlineKeyboard(inlineKeyboard);
}


// Function to generate a reply keyboard
export function generateReplyKeyboard(
  possible_replies: string[],
  options: {
    oneTime?: boolean,
    resize?: boolean,
    persistent?: boolean,
    selective?: boolean,
    placeholder?: string
  } = {
    oneTime: true,
    resize: true
  }
) {

  // Initialise the variable to store the keyboard
  const replyKeyboard = [];

  // Iterates over the possible replies
  for (const reply of possible_replies) {

    // Adds the reply to the keyboard
    replyKeyboard.push(reply);
  }

  // Turns the reply keyboard into a markup
  const replyKeyboardMarkup = Markup.keyboard(replyKeyboard);

  // The type of the functions on the reply keyboard markup
  // This is just to get typescript to behave when using the string
  // value of the property to call the function
  type ReplyKeyboardMethods = keyof typeof replyKeyboardMarkup;

  // Iterates over the options
  for (const [method, value] of Object.entries(options)) {

    // If the value is a string
    if (typeof value === "string") {

      // Calls the function with the value
      // This is just to get typescript to behave when using the string
      // value of the property to call the function
      (replyKeyboardMarkup[
        method as ReplyKeyboardMethods
      ] as CallableFunction)(value);
    }

    // Otherwise, if the value is a boolean and is true
    else if (value) {

      // Calls the function with the value
      // This is just to get typescript to behave when using the string
      // value of the property to call the function
      (replyKeyboardMarkup[
        method as ReplyKeyboardMethods
      ] as CallableFunction)(value);
    }
  }

  // Returns the reply keyboard
  return replyKeyboardMarkup;
}


// Function to generate an inline query reply
function generateInlineQueryReply(
  title: string,
  message: string,
  id: string | number,
  options: OptionalPropertiesOf<InputMessageContent> = {},
  queryTitle: string | null = null,
  markup: Types.Markup<InlineKeyboardMarkup> | null = null
): InlineQueryResult {

  // Gets the query title from the title
  queryTitle = queryTitle || title;

  // Creates the inline query reply
  const queryReply = {
    type: "article",
    id: `${id}`,
    title: queryTitle,
    description: utils.removeHtml(message),
    input_message_content: {
      message_text: `${utils.bold(title)}${SPACING}${message}`,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      ...options
    },
    ...markup
  } as InlineQueryResult;

  // Returns the inline query reply
  return queryReply;
}


// Function to answer the inline query
export async function answerInlineQuery(
  ctx: Context,
  messages: string | string[],
  title: string | null = null,
  options: OptionalPropertiesOf<InputMessageContent> = {},
  markup: Types.Markup<InlineKeyboardMarkup> | null = null,
) {

  // If the message given is not a list of messages
  if (typeof messages === "string") messages = [messages];

  // If the title isn't given
  if (!title) {

    // Gets the splitted message
    const splittedMsg = messages[0].trim().split("\n");

    // Gets the first line of the message
    const firstPart = splittedMsg[0];

    // Removes the HTML from the first line and makes that the title
    title = utils.removeHtml(firstPart).trim();

    // Change the first message to be the rest of the message
    messages[0] = splittedMsg.slice(1).join("\n").trim();
  }

  // Gets the first message
  const firstMsg = messages[0];

  // Gets the total message length
  const totalMessageLength =
    utils.removeHtml(firstMsg).length + title.length + SPACING.length;

  // If the message passed is a single message
  // and the message with its HTML removed is
  // shorter than the maximum number of characters in a message
  if (messages.length === 1 && totalMessageLength <= MAX_CHARACTERS) {

    // Creates the inline query reply
    const queryReply = generateInlineQueryReply(
      title, firstMsg, 1, options, null, markup
    );
    
    // Replies to the inline query
    return await ctx.answerInlineQuery(
      [queryReply],
      { cache_time: CACHE_TIME }
    );
  }

  // Otherwise, initialise the list of inline query replies
  const replies = [];

  // Initialise the index variable
  let index = 0;

  // Iterates over the list of messages
  for (const msgPart of messages) {

    // Initialise the splitted message segments
    const segments = splitMessage(
      msgPart,
      MAX_CHARACTERS - title.length - SPACING.length
    );

    // Iterates the splitted message
    for (const segment of segments) {

      // Creates the title with the page number with the HTML removed
      const titleWithPageNum = utils.removeHtml(`${title} page ${++index}`);

      // Creates the reply for each segment
      const queryReply = generateInlineQueryReply(
        title, segment, index, options, titleWithPageNum, markup
      );

      // Adds the reply to the list of replies
      replies.push(queryReply);
    }
  }

  // Replies to the inline query
  await ctx.answerInlineQuery(replies, { cache_time: CACHE_TIME });
}


// Function to send documents from the given paths
export async function sendDocGroupFromPaths(
  ctx: Context,
  ...paths: string[]
) {

  // If the list of paths given is empty, immediately exit the function
  if (paths.length < 1) return;

  // The list of document objects to send
  const docObjs = [];

  // Iterates the list of paths
  for (const path of paths) {

    // Creates the document object
    const docObj = {
      type: "document",
      media: {
        source: path,
        filename: utils.getFilenameFromPath(path),
      }
    } as InputMediaDocument;

    // Adds the document object to the list
    docObjs.push(docObj);
  }

  // Sends the media group containing all the documents
  await ctx.sendMediaGroup(docObjs);
}


// Function to handle the commands that generate a message and send files
export async function messageAndFileCommandHandler(
  ctx: Context, fn: () => Promise<[string, string[]]>
) {

  // Gets the message and the files
  const [message, files] = await fn() as [string, string[]];

  // Sends the message to the user
  await ctxReply(ctx, message);

  // Sends the files to the user
  await sendDocGroupFromPaths(ctx, ...files);
}


// Function to handle the commands that generate a message and send files
export async function messageAndFileInlineQueryHandler(
  ctx: Context,
  fn: () => Promise<[string, string[]]>,
  isHyperlinked: boolean = true,
  joiningSection: string = "\n\n"
) {

  // Gets the message and the files
  const [message, files] = await fn() as [string, string[]];

  // Adds the links to the files to the back of the message
  const msg = `${message}${joiningSection}${files.map(
    path => {

      // Gets the URL for the file
      const fileUrl = utils.convertStaticFilePathToUrl(path);

      // If the link is to be hyperlinked,
      // hyperlink the filename with the URL and returns the result
      if (isHyperlinked) return utils.hyperlink(
        utils.getFilenameFromPath(path, true), fileUrl
      );

      // Otherwise, returns the URL for the file
      else return fileUrl;
      
    }).join("\n\n")}`;

  // Answers the inline query
  await answerInlineQuery(ctx, msg);
}


// Function to check whether the user is an admin in a group chat
export async function isAdmin(ctx: Context) {

  // If the admin check option is disabled, immediately return true
  if (!ENABLE_ADMIN_CHECK) return true;

  // If the chat is private, immediately return true
  else if (ctx.chat!.type === "private") return true;

  // Gets the user object
  const user = await ctx.getChatMember(ctx.from!.id);

  // If the user is an admin, return true
  if (
    user.status === "administrator" || user.status === "creator"
  ) return true;

  // Otherwise, returns false
  else return false;
}


// Function to check if the bot can delete messages
export async function canDeleteMessages(ctx: Context): Promise<boolean> {

  // Get the bot's member object
  const bot = await ctx.getChatMember(ctx.botInfo.id);

  // If the bot is allowed to delete messages, return true
  if (bot.status === "administrator" && bot.can_delete_messages) return true;

  // Otherwise, return false
  else return false;
}


// Function to delete messages
export async function deleteMessages(
  ctx: Context,
  ...message_ids: number[]
): Promise<boolean> {

  // If deleting the command message is disabled
  // or if the bot isn't allowed to delete messages, immediately return false
  if (!ENABLE_DELETING_COMMAND_MESSAGES) return false;

  // Check whether the bot can delete messages
  const deletingAllowed = await canDeleteMessages(ctx);

  // If the bot isn't allowed to delete messages, immediately return false
  if (!deletingAllowed) return false;

  // Remove the duplicates in the message IDs.
  // This is so that the function won't try to delete messages twice
  message_ids = [...new Set(message_ids)];

  // Otherwise, creates the tasks to delete the given messages
  const tasks = message_ids.map(id => ctx.deleteMessage(id));

  // Deletes all messages given
  await Promise.all(tasks);

  // Return true
  return true;
}


// Function to add the current message to the list of messages to be deleted
export function markMessageForDeletion(
  ctx: Scenes.WizardContext,
  ...message_ids: number[]
) {

  // Gets the state object
  const state = ctx.wizard.state as { messagesToDelete: number[] };

  // Gets the list of message IDs to be deleted
  const messagesToDelete = state.messagesToDelete;

  // Checks if the list of message IDs exists
  if (Array.isArray(messagesToDelete)) {

    // Add the messages to delete to the list of messages to delete
    state.messagesToDelete = messagesToDelete.concat(message_ids);
  }
}


// Function to wrap the callback function to
// include the function to delete messages
export function wrapCallbackWithMessageDeleter(
  callback: (
    ctx: Scenes.WizardContext, input: string
  ) => Promise<void | Message.TextMessage>
) {

  // Returns a function that takes the arguments of the callback function
  return async (ctx: Scenes.WizardContext, input: string) => {

    // Calls the callback function
    await callback(ctx, input);

    // Gets the list of messages to delete from the state in the wizard scene
    const messagesToDelete: number[] = (
      ctx.wizard.state as object & { messagesToDelete: number[] }
    ).messagesToDelete;

    // If the list of message IDs exists,
    // calls the function to delete the messages
    if (Array.isArray(messagesToDelete)) await deleteMessages(
      ctx, ...messagesToDelete
    );
  }
}


// Prompts the user for an input
export async function promptUserForInput(
  ctx: Scenes.WizardContext,
  message: string,
  additionalOptions = {}
) {
  
  // Asks the user for an input
  const botMessage = await ctx.reply(
    `${message}\n${EXIT_MESSAGE}`,
    { parse_mode: "HTML", ...additionalOptions }
  );

  // Mark the user's message as well as
  // the bot's message for deletion if possible
  markMessageForDeletion(
    ctx,
    ctx.message!.message_id,
    botMessage.message_id
  );

  // Returns the bot's message
  return botMessage;
}


// Function to call a step's function in a scene
export async function callStep(
  ctx: Scenes.WizardContext & { message: Message.TextMessage },
  next: () => Promise<void>,
  previous: boolean = false,
  stepIndex: number | null = null
) {

  // If the step index is given
  // and is greater or equal to zero
  if (stepIndex && stepIndex >= 0) {

    // Calls the select step function to move to the given step
    ctx.wizard.selectStep(stepIndex);
  }

  // Otherwise, if previous is true
  else if (previous) {

    // Calls the back function to move to the previous step
    ctx.wizard.back();
  }

  // Otherwise
  else {

    // Go to the next step in the scene
    ctx.wizard.next();
  }

  // Gets the step
  const step = ctx.wizard.step;

  // If the next step is not defined, then return null
  if (step == null) return null;

  // Sets the message to an empty string,
  // so the bot doesn't respond to the input given
  // by the user again.
  ctx.message.text = "";

  // Calls the function by unwrapping it using the Composer object
  return await Composer.unwrap(step)(ctx, next);
}


// The function to exit a validator (cancel the ongoing operation)
export async function exitValidator(ctx: Scenes.WizardContext) {

  // Tells the user that the operation has been cancelled
  // and removes any reply keyboard generated
  await ctx.reply(
    OPERATION_CANCELLED_MSG,
    { ...Markup.removeKeyboard() }
  );

  // Exits the scene
  await ctx.scene.leave();
}

// The array containing the cancel command
export const cancelCommand: [
  string, (ctx: Scenes.WizardContext) => Promise<void>
] = ["cancel", exitValidator];


// The function to create a wizard scene
export function createWizardScene(
  name: string,
  handler: Composer<Scenes.WizardContext>
) {

  // Returns the new scene
  return new Scenes.WizardScene<Scenes.WizardContext>(name, handler);
}
