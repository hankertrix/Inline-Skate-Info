// Module containing all the utility functions for the telegram bot

import type { Context } from "telegraf";
import type { InlineQueryResult, InputMediaDocument } from "telegraf/types";
import { Scenes } from "telegraf";
import { MAX_CHARACTERS, CACHE_TIME, SPACING, OPERATION_CANCELLED_MSG, EXIT_MESSAGE, MESSAGE_ENTITY_LIMIT } from "../src/lib/constants";
import * as utils from "./utils";
import { ENABLE_DELETING_COMMAND_MESSAGES, ENABLE_ADMIN_CHECK } from "../config";

// The regular expression to get the message entities (currently HTML tags)
const messageEntityRegex = /<.+?>/g;


// Function to get the number of message entities in the message
function getMessageEntityCount(message: string) {

  // Gets all the message entities in the string
  const matches = message.match(messageEntityRegex);

  // Returns the number of matches
  return matches ? matches.length : 0;
}


// Function to get a message segment (this function is more space efficient as it fits more characters into a single message by ignoring the HTML tags, which don't count towards Telegram's character limit)
function getMsgSegment(startIndex: number, endIndex: number, message: string, maxLength: number = MAX_CHARACTERS, maxEntity: number = MESSAGE_ENTITY_LIMIT) {

  // Initialise the message segment
  let msgSegment = "";

  // Initialise the message length
  const msgLen = message.length;

  // Loop while the message segment without HTML isn't equal to the max length
  while (true) {

    // Gets the message segment
    msgSegment = message.slice(startIndex, endIndex);

    // If the message segment has more than the maximum number of message entities
    if (getMessageEntityCount(msgSegment) > maxEntity) {

      // Gets all the message entities in the message
      const messageEntities = Array.from(msgSegment.matchAll(messageEntityRegex));

      // Gets the message entity that is after the last message entity (the last messsage entity is the message entity at the message entity limit)
      const messageEntity = messageEntities[maxEntity];

      // Slice the message segment until the position of that message entity that is after the last message entity and return it
      return msgSegment.slice(0, messageEntity.index);
    }

    // Breaks the loop if the message segment is already shorter than the max length or if the end index is equal to or past the length of the message
    else if (msgSegment.length < maxLength || endIndex >= msgLen) break;

    // Otherwise, remove the HTML from the message segment
    const msgSegmentWithoutHtml = utils.removeHtml(msgSegment);

    // Gets the length of the message segment with the HTML removed
    const segmentWithoutHtmlLen = msgSegmentWithoutHtml.length;
    
    // Breaks the loop if the message segment without HTML is equal to the max length
   if (segmentWithoutHtmlLen === maxLength) break;
    
    // Otherwise, increase the end index by the difference in length between the maximum length and the length of the segment without HTML
    endIndex += (maxLength - segmentWithoutHtmlLen);
  }

  // Returns the message segment
  return msgSegment;
}


// Function to split the message if it's too long
function splitMessage(message: string, maxLength: number = MAX_CHARACTERS, maxEntity: number = MESSAGE_ENTITY_LIMIT) {

  // If the length of the message with the HTML removed is less than or equal to the maximum length
  // And the number of message entities in the message doesn't exceed the maximum number of message entities
  if (utils.removeHtml(message).length <= maxLength && getMessageEntityCount(message) <= maxEntity) {

    // Returns the message in a list
    return [message];
  }

  // Otherwise, gets the length of the message
  const msgLen = message.length;

  // Initialise the list of messages
  const msges: string[] = [];

  // Initialise the index of the last new line character to 0
  let startIndex = 0;

  // Initialise the end index of a message segment to be more than the start index by the maximum length
  let endIndex = startIndex + maxLength;

  // Iterates while the index is less than the length of the message
  while (endIndex < msgLen) {

    // Gets the first segment of the message that is of the maximum length
    const msgSegment = getMsgSegment(startIndex, endIndex, message, maxLength, maxEntity);

    // Gets the last match index of a new line character
    const [lastMatchIndex, matchStr] = utils.getLastMatchChained(msgSegment, "\n\n", "\n");

    // Gets the end index of the message segment
    const msgSegmentEndIndex = startIndex + lastMatchIndex + matchStr.length;

    // Adds the message segment to the list
    msges.push(message.slice(startIndex, msgSegmentEndIndex).trim());

    // Sets the new start index to the end index of the message segment
    startIndex = msgSegmentEndIndex;

    // Sets the end index to be more than the start index by the maximum length
    endIndex = startIndex + maxLength;
  }

  // Adds the final message segment to the list of messages
  msges.push(message.slice(startIndex, endIndex));

  // Returns the list of messages
  return msges;
}


// Function to reply to a context with message splitting and with HTML parse mode
export async function ctxReply(ctx: Context, reply: string, options = {}) {

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


// Function to generate an inline query reply
function generateInlineQueryReply(title: string, message: string, id: string | number, options: any = {}, queryTitle: string = ""): InlineQueryResult {

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
    }
  } as InlineQueryResult;

  // Returns the inline query reply
  return queryReply;
}


// Function to answer the inline query
export async function answerInlineQuery(ctx: Context, messages: string | string[], title: string | null = null, options: any = {}) {

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

  // If the message passed is a single message and the message with its HTML removed is shorter than the maximum number of characters in a message
  if (messages.length === 1 && utils.removeHtml(firstMsg).length + title.length + SPACING.length <= MAX_CHARACTERS) {

    // Creates the inline query reply
    const queryReply = generateInlineQueryReply(title, firstMsg, 1, options);
    
    // Replies to the inline query
    return await ctx.answerInlineQuery([queryReply], { cache_time: CACHE_TIME });
  }

  // Otherwise, initialise the list of inline query replies
  const replies = [];

  // Initialise the index variable
  let index = 0;

  // Iterates over the list of messages
  for (const msgPart of messages) {

    // Initialise the splitted message segments
    const segments = splitMessage(msgPart, MAX_CHARACTERS - title.length - SPACING.length);

    // Iterates the splitted message
    for (const segment of segments) {

      // Creates the title with the page number with the HTML removed
      const titleWithPageNum = utils.removeHtml(`${title} page ${++index}`);

      // Creates the reply for each segment
      const queryReply = generateInlineQueryReply(title, segment, index, options, titleWithPageNum);

      // Adds the reply to the list of replies
      replies.push(queryReply);
    }
  }

  // Replies to the inline query
  await ctx.answerInlineQuery(replies, { cache_time: CACHE_TIME });
}


// Function to send documents from the given paths
export async function sendDocGroupFromPaths(ctx: Context, ...paths: string[]) {

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
export async function messageAndFileCommandHandler(ctx: Context, fn: Function) {

  // Gets the message and the files
  const [message, files] = await fn() as [string, string[]];

  // Sends the message to the user
  await ctxReply(ctx, message);

  // Sends the files to the user
  await sendDocGroupFromPaths(ctx, ...files);
}


// Function to handle the commands that generate a message and send files
export async function messageAndFileInlineQueryHandler(ctx: Context, fn: Function, isHyperlinked: boolean = true, joiningSection: string = "\n\n") {

  // Gets the message and the files
  let [message, files] = await fn() as [string, string[]];

  // Adds the links to the files to the back of the message
  message = `${message}${joiningSection}${files.map(
    path => {

      // Gets the URL for the file
      const fileUrl = utils.convertStaticFilePathToUrl(path);

      // If the link is to be hyperlinked, hyperlink the filename with the URL and returns the result
      if (isHyperlinked) return utils.hyperlink(utils.getFilenameFromPath(path, true), fileUrl);

      // Otherwise, returns the URL for the file
      else return fileUrl;
      
    }).join("\n\n")}`;

  // Answers the inline query
  await answerInlineQuery(ctx, message);
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
  if (user.status === "administrator" || user.status === "creator") return true;

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
export async function deleteMessages(ctx: Context, ...message_ids: number[]): Promise<boolean> {

  // If deleting the command message is disabled or if the bot isn't allowed to delete messages, immediately return false
  if (!ENABLE_DELETING_COMMAND_MESSAGES) return false;

  // Check whether the bot can delete messages
  const deletingAllowed = await canDeleteMessages(ctx);

  // If the bot isn't allowed to delete messages, immediately return false
  if (!deletingAllowed) return false;

  // Otherwise, creates the tasks to delete the given messages
  const tasks = message_ids.map(id => ctx.deleteMessage(id));

  // Deletes all messages given
  await Promise.all(tasks);

  // Return true
  return true;
}


// Function to add the current message to the list of messages to be deleted
export function markMessageForDeletion(ctx: any, ...message_ids: number[]) {

  // Gets the list of message IDs to be deleted
  const messagesToDelete = ctx.wizard.state.messagesToDelete;

  // Checks if the list of message IDs exists
  if (Array.isArray(messagesToDelete)) ctx.wizard.state.messagesToDelete = messagesToDelete.concat(message_ids);
}


// Function to wrap the callback function to include the function to delete messages
export function wrapCallbackWithMessageDeleter(callback: Function) {

  // Returns a function that takes the arguments of the callback function
  return async (ctx: any, input: string) => {

    // Calls the callback function
    await callback(ctx, input);

    // Gets the list of messages to delete from the state in the wizard scene
    const messagesToDelete: any = ctx.wizard.state.messagesToDelete;

    // If the list of message IDs exists, calls the function to delete the messages
    if (Array.isArray(messagesToDelete)) await deleteMessages(ctx, ...messagesToDelete);
  }
}


// Prompts the user for an input
export async function promptUserForInput(ctx: Context, message: string) {
  
  // Asks the user for an input
  const botMessage = await ctx.reply(`${message} ${EXIT_MESSAGE}`, { parse_mode: "HTML" });

  // Mark the user's message as well as the bot's message for deletion if possible
  markMessageForDeletion(ctx, ctx.message!.message_id, botMessage.message_id);
}


// The function to exit a validator (cancel the ongoing operation)
async function exitValidator(ctx: any) {

  // Tells the user that the operation has been cancelled
  await ctx.reply(OPERATION_CANCELLED_MSG);

  // Exits the scene
  await ctx.scene.leave();
}

// The array containing the cancel command
export const cancelCommand: [string, any] = ["cancel", exitValidator];


// The function to create a wizard scene
export function createWizardScene(name: string, handler: any) {

  // Returns the new scene
  return new Scenes.WizardScene<Scenes.WizardContext>(name, handler);
}
