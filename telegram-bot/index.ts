// The module that contains the telegraf bot

import { Telegraf, Scenes, session } from "telegraf";
import type { Context } from "telegraf";
import type { InlineQueryResult, InlineKeyboardButton, CallbackQuery, Message } from "telegraf/types";
import { SPACING } from "../constants";
import * as utils from "./utils";
import { ctxReply, answerInlineQuery, isAdmin, deleteMessages, messageAndFileCommandHandler, messageAndFileInlineQueryHandler, wrapCallbackWithMessageDeleter } from "./bot-utils";
import * as scenes from "./bot-scenes";
import * as commandUtils from "./command-utils";




// Initialising the telegraf bot

// The telegraf bot
const bot = new Telegraf<Scenes.WizardContext>(process.env.BOT_TOKEN as string);

// Use the session and adds the scenes
bot.use(session());

// Adds the scene stage to the bot
bot.use(scenes.stage.middleware());










// The start command

// The handler for the start command
bot.command("start", async ctx => {

  // The start message
  const startMsg = `Hello! This bot aims to be the ultimate resource for all things inline skating!

Use the /help command to see what the bot can do.`;

  // Replies to the user
  await ctxReply(ctx, startMsg);
});










// The help command

// The handler for the help command
bot.command("help", async ctx => {

  // Gets the sections of the help message
  const sections = commandUtils.help.generateMsg();

  // Joins the sections of the help message with 3 new lines
  const helpMsg = sections.join("\n\n\n");

  // Sends the help message to the user
  await ctxReply(ctx, helpMsg);
});










// Terminology command

// The handler for the terminology command
bot.command([
  "terminology",
  "term",
  "terms"
], async ctx => {

  // Gets the message string from the text
  const msgText = ctx.message.text;

  // Calls the handler to get the reply as a string
  const [term, definition] = await commandUtils.terminology.handler(msgText);

  // Initialise the reply
  let reply: string;

  // Checks if the definition is the no definition found message
  if (definition.startsWith("No definition was found for")) {

    // Sets the reply to the no definition found message
    reply = definition;
  }
  
  // Otherwise, adds the term on top of the definition
  else reply = `${utils.bold(term)}${SPACING}${definition}`;

  // Replies to the user
  await ctxReply(ctx, reply);
});


// The inline query handler for the terminology command
bot.inlineQuery(commandUtils.terminology.regex, async ctx => {

  // Gets the query text
  const queryText = ctx.inlineQuery.query;

  // Gets the term and the definition
  const [term, definition] = await commandUtils.terminology.handler(queryText);

  // Answers the inline query
  await answerInlineQuery(ctx, definition, term);
});










// Tricks command

// The handler for the tricks command
bot.command([
  "tricks",
  "trick"
], async ctx => {

  // Calls the function to get the text for the tricks command
  const [trickName, trickText] = await commandUtils.tricks.handler(ctx.message.text);

  // Creates the reply
  const reply = `${utils.bold(trickName)}${SPACING}${trickText}`;

  // Replies the user with the text
  await ctxReply(ctx, reply);
});


// The inline query handler for the tricks command
bot.inlineQuery(commandUtils.tricks.regex, async ctx => {
  
  // Calls the function to get the text for the tricks command
  const [trick, reply] = await commandUtils.tricks.handler(ctx.inlineQuery.query);

  // Answers the inline query with the text
  await answerInlineQuery(ctx, reply, trick);
});










// The trick lists command

// The handler for the trick lists command
bot.command([
  "trick_lists",
  "trick_list", 
  "tricklists",
  "tricklist"
], async ctx => {

  // Use the general handler for this command as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileCommandHandler(ctx, commandUtils.lists.generateTrickLists);
});


// The inline query handler for the trick lists command
bot.inlineQuery(commandUtils.lists.trickListsRegex, async ctx => {
  
  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, commandUtils.lists.generateTrickLists);
});










// The rulebooks command

// The handler for the rulebooks command
bot.command([
  "rulebooks",
  "rulebook", 
  "rule_books",
  "rule_book"
], async ctx => {

  // Use the general handler for this command as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileCommandHandler(ctx, commandUtils.lists.generateRulebooks);
});


// The inline query handler for the rulebooks command
bot.inlineQuery(commandUtils.lists.rulebooksRegex, async ctx => {
  
  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, commandUtils.lists.generateRulebooks);
});










// The buying guides command

// The handler for the buying guides command
bot.command([
  "buying_guides",
  "buying_guide", 
  "buyingguides",
  "buyingguide"
], async ctx => {

  // Use the general handler for this command as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileCommandHandler(ctx, commandUtils.lists.generateBuyingGuides);
});


// The inline query handler for the buying guides command
bot.inlineQuery(commandUtils.lists.buyingGuidesRegex, async ctx => {
  
  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, commandUtils.lists.generateBuyingGuides, false);
});










// The maintenance guides command

// The handler for the maintenance guides command
bot.command([
  "maintenance_guides",
  "maintenance_guide",
  "maintain_guides",
  "maintain_guide",
  "maintaining_guides",
  "maintaining_guide",
  "maintenanceguides",
  "maintenanceguide",
  "maintainguides",
  "maintainguide",
  "maintainingguides",
  "maintainingguide"
], async ctx => {

  // Use the general handler for this command as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileCommandHandler(ctx, commandUtils.lists.generateMaintenanceGuides);
});


// The inline query handler for the maintenance guides command
bot.inlineQuery(commandUtils.lists.maintenanceGuidesRegex, async ctx => {
  
  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, commandUtils.lists.generateMaintenanceGuides);
});










// The glossaries command

// The handler for the glossaries command
bot.command([
  "glossaries",
  "glossary",
  "dictionaries",
  "dictionary"
], async ctx => {

  // Use the general handler for this command as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileCommandHandler(ctx, commandUtils.lists.generateGlossaries);
});


// The inline query handler for the glossaries command
bot.inlineQuery(commandUtils.lists.glossariesRegex, async ctx => {
  
  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, commandUtils.lists.generateGlossaries);
});










// The miscellaneous resources command

// The handler for the miscellaneous resources command
bot.command([
  "misc_resources",
  "misc_resource", 
  "miscresources",
  "miscresource",
  "miscellaneous_resources",
  "miscellaneous_resource", 
  "miscellaneousresources",
  "miscellaneousresource"
], async ctx => {

  // Use the general handler for this command as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileCommandHandler(ctx, commandUtils.lists.generateMiscResources);
});


// The inline query handler for the miscellaneous resources command
bot.inlineQuery(commandUtils.lists.miscResourcesRegex, async ctx => {
  
  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, commandUtils.lists.generateMiscResources);
});










// The skate boot types command

// The handler for the skate boot types command
bot.command([
  "skate_boot_types",
  "skate_boot_type",
  "skateboot_type",
  "skateboot_types",
  "boot_type",
  "boot_types",
  "skateboottypes",
  "skateboottype",
  "skateboottype",
  "skateboottypes",
  "boottype",
  "boottypes"
], async ctx => {

  // Gets the skate boot types message
  const msg = await commandUtils.bootTypes.generateMsg();

  // Replies the user with the message
  await ctxReply(ctx, msg);
});


// The inline query handler for the skate boot types command
bot.inlineQuery(commandUtils.bootTypes.regex, async ctx => {
  

  // Gets the skate boot types message
  const msg = await commandUtils.bootTypes.generateMsg();

  // Answers the inline query
  await answerInlineQuery(ctx, msg);
});










// The skate recommendations command

// The handler for the skate recommendations command
bot.command([
  "skate_recs",
  "skate_rec",
  "skate_recommendation",
  "skate_recommendations",
  "skaterec",
  "skaterecs",
  "skaterecommendation",
  "skaterecommendations"
], async ctx => {

  // Gets the skate recommendations
  const skateRecs = await commandUtils.skateRecs.generateMsg();

  // Iterates each part of the skate recommendations and send it to the user
  for (const skateRec of skateRecs) await ctxReply(ctx, skateRec);
});


// The inline query handler for the skate recommendations command
bot.inlineQuery(commandUtils.skateRecs.regex, async ctx => {

  // Gets the skate recommendations
  const skateRecs = await commandUtils.skateRecs.generateMsg();

  // Answers the inline query and take out the preface
  await answerInlineQuery(ctx, skateRecs.slice(1), "Skate recommendations");
});










// The discount information command

// The handler for the discount information command
bot.command([
  "discount_info",
  "discountinfo",
  "discount"
], async ctx => {

  // Use the general handler for this command as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileCommandHandler(ctx, commandUtils.discountInfo.generateDiscountInfo);
});


// The inline query handler for the discount information command
bot.inlineQuery(commandUtils.discountInfo.regex, async ctx => {

  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, commandUtils.discountInfo.generateDiscountInfo, true, "\n\n\n\n\nLinks to the PDF files with pricing information:\n\n\n");
});










// The command to show where to buy skates

// The handler for the where to buy command
bot.command([
  "where_to_buy",
  "wheretobuy"
], async ctx => {

  // Calls the handler for the where to buy command to get the reply
  let reply = await commandUtils.places.whereToBuyHandler(ctx.message.text);

  /// Adds the heading "Inline Skate Retailers" to the top of the message
  reply = `${utils.bold("Inline skate retailers")}\n\n\n${reply}`;

  // Replies the user with the message
  await ctxReply(ctx, reply);
});


// The inline query handler for the where to buy command
bot.inlineQuery(commandUtils.places.whereToBuyRegex, async ctx => {

  // Calls the handler for the where to buy command to get the reply
  const reply = await commandUtils.places.whereToBuyHandler(ctx.inlineQuery.query);

  // Answers the inline query
  await answerInlineQuery(ctx, reply, "Inline skate retailers");
});










// The command to show where to rent skates

// The handler for the where to rent command
bot.command([
  "where_to_rent",
  "wheretorent"
], async ctx => {

  // Calls the handler for the where to rent command to get the reply
  const reply = await commandUtils.places.uncategorisedPlacesHandler(
    commandUtils.places.PLACES.SingaporeRentalShops
  );

  // Replies the user with the message
  await ctxReply(ctx, reply);
});


// The inline query handler for the where to rent command
bot.inlineQuery(commandUtils.places.whereToRentRegex, async ctx => {

  // Calls the handler for the where to rent command to get the reply
  const reply = await commandUtils.places.uncategorisedPlacesHandler(
    commandUtils.places.PLACES.SingaporeRentalShops
  );

  // Answers the inline query
  await answerInlineQuery(ctx, reply);
});










// The command to show all the skate parks

// The handler for the skate parks command
bot.command([
  "skateparks",
  "skatepark"
], async ctx => {

  // Calls the handler for the skate parks command to get the reply
  const reply = await commandUtils.places.uncategorisedPlacesHandler(
    commandUtils.places.PLACES.SkateParks
  );

  // Replies the user with the message
  await ctxReply(ctx, reply);
});


// The inline query handler for the skate parks command
bot.inlineQuery(commandUtils.places.skateParksRegex, async ctx => {

  // Calls the handler for the skate parks command to get the reply
  const reply = await commandUtils.places.uncategorisedPlacesHandler(
    commandUtils.places.PLACES.SkateParks
  );

  // Answers the inline query
  await answerInlineQuery(ctx, reply);
});










// The command to show all the skate rinks

// The handler for the rinks command
bot.command([
  "rinks",
  "rink"
], async ctx => {

  // Calls the handler for the rinks command to get the reply
  const reply = await commandUtils.places.uncategorisedPlacesHandler(
    commandUtils.places.PLACES.Rinks
  );

  // Replies the user with the message
  await ctxReply(ctx, reply);
});


// The inline query handler for the rinks command
bot.inlineQuery(commandUtils.places.rinksRegex, async ctx => {

  // Calls the handler for the rinks command to get the reply
  const reply = await commandUtils.places.uncategorisedPlacesHandler(
    commandUtils.places.PLACES.Rinks
  );

  // Answers the inline query
  await answerInlineQuery(ctx, reply);
});










// The command to list the brands in inline skating

// The handler for the brands command
bot.command([
  "brands",
  "brand"
], async ctx => {

  // Gets the message to send to the user
  const reply = await commandUtils.brands.handler(ctx.message.text);

  // Sends the brands message to the user
  await ctxReply(ctx, reply);
});


// The inline query handler for the brands command
bot.inlineQuery(commandUtils.brands.regex, async ctx => {

  // Gets the message to send to the user
  const reply = await commandUtils.brands.handler(ctx.inlineQuery.query);

  // Answers the inline query
  await answerInlineQuery(ctx, reply, "Brands");
});









// The command to explain the differences between FR skates

// The handler for the FR differences command
bot.command([
  "fr_differences",
  "fr_difference",
  "fr_diff",
  "frdifferences",
  "frdifference",
  "frdiff"
], async ctx => {

  // Gets the FR difference message
  const msg = await commandUtils.frDiff.generateMsg();

  // Replies to the user with the message that talks about the differences between the FR skates
  await ctxReply(ctx, msg);
});


// The inline query handler for the FR differences command
bot.inlineQuery(commandUtils.frDiff.regex, async ctx => {

  // Gets the FR difference message
  const msg = await commandUtils.frDiff.generateMsg();

  // Answers the inline query with the message that talks about the differences between the FR skates
  await answerInlineQuery(ctx, msg);
});










// The command to explain the differences between triskates and regular skates

// The handler for the triskate differences command
bot.command([
  "triskate_differences",
  "triskate_difference",
  "triskate_diff",
  "triskatedifferences",
  "triskatedifference",
  "triskatediff",
  "triskates",
  "triskate"
], async ctx => {

  // Gets the triskate difference message
  const msg = await commandUtils.triskateDiff.generateMsg();

  // Replies to the user with the message
  await ctxReply(ctx, msg);
});


// The inline query handler for the triskate differences command
bot.inlineQuery(commandUtils.triskateDiff.regex, async ctx => {

  // Gets the triskate difference message
  const msg = await commandUtils.triskateDiff.generateMsg();

  // Answers the inline query with the message
  await answerInlineQuery(ctx, msg);
});










// Accessories command

// The handler for the accessories command
bot.command([
  "accessories",
  "accessory",
  "accs",
  "acc"
], async ctx => {

  // Generates the text for the list of accessories
  const accessoriesText = await commandUtils.products.generateProductsText(commandUtils.products.ProductTypes.Accessories);

  // Replies to the user with the list of accessories
  await ctxReply(ctx, accessoriesText);
});


// The inline query handler for the accessories command
bot.inlineQuery(commandUtils.products.accessoriesRegex, async ctx => {

  // Generates the text for the list of accessories
  const accessoriesText = await commandUtils.products.generateProductsText(commandUtils.products.ProductTypes.Accessories);

  // Replies to the inline query with the list of accessories
  await answerInlineQuery(ctx, accessoriesText);
});










// Protective gear command

// The handler for the protective gear command
bot.command([
  "protective_gear",
  "protectivegear",
  "protection",
  "protect"
], async ctx => {

  // Generates the text for the list of protective gear
  const protectiveGearText = await commandUtils.products.generateProductsText(commandUtils.products.ProductTypes.ProtectiveGear);

  // Replies to the user with the list of protective gear
  await ctxReply(ctx, protectiveGearText);
});


// The inline query handler for the protective gear command
bot.inlineQuery(commandUtils.products.protectiveGearRegex, async ctx => {

  // Generates the text for the list of protective gear
  const protectiveGearText = await commandUtils.products.generateProductsText(commandUtils.products.ProductTypes.ProtectiveGear);

  // Replies to the inline query with the list of protective gear
  await answerInlineQuery(ctx, protectiveGearText);
});










// The clothing command

// The handler for the protective gear command
bot.command([
  "clothing",
  "clothing_item",
  "clothing_items",
  "clothingitem",
  "clothingitems",
  "apparel",
  "socks"
], async ctx => {

  // Generates the text for the list of clothing items
  const clothingText = await commandUtils.products.generateProductsText(commandUtils.products.ProductTypes.Clothing);

  // Replies to the user with the list of clothing items
  await ctxReply(ctx, clothingText);
});


// The inline query handler for the clothing command
bot.inlineQuery(commandUtils.products.clothingRegex, async ctx => {

  // Generates the text for the list of clothing items
  const clothingText = await commandUtils.products.generateProductsText(commandUtils.products.ProductTypes.Clothing);

  // Replies to the inline query with the list of clothing items
  await answerInlineQuery(ctx, clothingText);
});










// The maintenance items command

// The handler for the protective gear command
bot.command([
  "maintenance_items",
  "maintenance_item",
  "maintainance_items",
  "maintainance_item",
  "maintainence_items",
  "maintainence_item",
  "maintenanceitems",
  "maintenanceitem",
  "maintainanceitems",
  "maintainanceitem",
  "maintainenceitems",
  "maintainenceitem"
], async ctx => {

  // Generates the text for the list of maintenance items
  const maintenanceItemsText = await commandUtils.products.generateProductsText(commandUtils.products.ProductTypes.MaintenanceItems);

  // Replies to the user with the list of maintenance items
  await ctxReply(ctx, maintenanceItemsText);
});


// The inline query handler for the maintenance command
bot.inlineQuery(commandUtils.products.maintenanceItemsRegex, async ctx => {

  // Generates the text for the list of maintenance items
  const maintenanceItemsText = await commandUtils.products.generateProductsText(commandUtils.products.ProductTypes.MaintenanceItems);

  // Replies to the inline query with the list of maintenance items
  await answerInlineQuery(ctx, maintenanceItemsText);
});










// Poll message and training message command (they function similarly, only that the training message command will have a default output which is the training message)

// The handler for the poll message command
bot.command([
  "poll_msg",
  "pollmsg"
], async ctx => {

  // If the user isn't an admin, immediately exit the function
  if (!(await isAdmin(ctx))) return;

  // Gets the text from the message
  let messageText = ctx.message.text;

  // Gets the poll options
  const pollOptions = commandUtils.poll.DEFAULT_POLL_OPTIONS;

  // Gets the message and the callback from the generatePollCallback function
  const { message, callback } = commandUtils.poll.generatePollMessage(messageText, pollOptions);

  // If the message is empty, enters the scene to get the user's input
  if (!message) {

    // Wrap the callback with a message deleter
    const wrappedCallback = wrapCallbackWithMessageDeleter(callback);

    // Enters the scene to get the user's input
    return await ctx.scene.enter("validate", { message: "Please enter the poll message.", callback: wrappedCallback, messagesToDelete: [] });
  }

  // Tries to delete the message that the user has sent
  await deleteMessages(ctx, ctx.message.message_id);

  // Calls the callback function
  return await callback(ctx, message);
});


// The handler for the training message command
bot.command([
  "trg_msg",
  "trgmsg"
], async ctx => {

  // If the user isn't an admin, immediately exit the function
  if (!(await isAdmin(ctx))) return;

  // Gets the text from the message sent
  let msg = ctx.message.text;

  // Remove the command from the message
  msg = msg.replace(commandUtils.trainingMsg.regex, "").trim();

  // Gets the training message handler to handle the training message command
  await commandUtils.trainingMsg.handler(ctx, msg);
});


// The callback query handler for the poll message
bot.on("callback_query", async ctx => {

  // Cast the callbackQuery type
  const callbackQuery = ctx.callbackQuery as CallbackQuery & { data: string };

  // Gets the poll option and the poll message
  const pollOption = callbackQuery.data;

  // Cast the callback query message type
  const message = callbackQuery.message as Message & {
    text: string,
    reply_markup: {
      inline_keyboard: InlineKeyboardButton[][]
    }
  };

  // Gets the message text
  const messageText = message.text;

  // If the poll option doesn't exist, then tells the user
  if (messageText.indexOf(pollOption) === -1) return await ctx.answerCbQuery(`The option "${pollOption}" doesn't exist on the poll you are responding to.`);

  // Gets the list of poll options
  const pollOptions = commandUtils.poll.getPollOptions(message.reply_markup.inline_keyboard);

  // Gets the poll message
  const pollMessage = commandUtils.poll.getPollMessage(messageText, pollOptions);

  // Gets the name of the person responding
  const name = commandUtils.poll.getName(callbackQuery.from);

  // Gets the reformed poll message and the variable to indicated whether the person has been added or removed from the poll option
  const { reformedPollMessage, removed } = commandUtils.poll.reformPollMessage(messageText, pollMessage, pollOption, pollOptions, name);

  // Answers the callback query
  await ctx.answerCbQuery(`Your name has been ${removed ? "removed from" : "added to"} '${pollOption}'!`);

  // Edit the message with the reformed poll message
  return await ctx.editMessageText(reformedPollMessage, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: message.reply_markup.inline_keyboard
    }
  });
});










// The training message help command

// The handler for the training message help command
bot.command([
  "trg_msg_help",
  "trg_help",
  "msg_help",
  "trgmsghelp",
  "trghelp",
  "msghelp"
], async ctx => {

  // Calls the function to get the help text for the training message
  const helpText = commandUtils.trainingMsg.generateHelpText(ctx.chat.id);

  // Replies the user with the help text
  await ctxReply(ctx, helpText);
});










// QR code command

// The handler for the QR code command
bot.command([
  "qr_code",
  "qrcode"
], async ctx => {

  // Gets the message text from the context
  const msgText = ctx.message.text;

  // Calls the QR code handler to generate the QR code
  const [_, qrCodeDataURL] = await commandUtils.qrCode.qrCodeHandler(msgText);

  // If the QR code is generated, reply to the user with the image
  if (qrCodeDataURL) return await ctx.replyWithPhoto({ source: Buffer.from(qrCodeDataURL, "base64") });

  // The callback function to call when the user has given a valid input
  async function callback(ctx: Context, input: string) {

    // Calls the QR code handler to generate the QR code
    const [_, qrCodeDataURL] = await commandUtils.qrCode.qrCodeHandler(input);

    // Reply to the user with the image
    return await ctx.replyWithPhoto({ source: Buffer.from(qrCodeDataURL, "base64") });
  }

  // Enter the scene to validate user input
  await ctx.scene.enter("validate", { message: "Please enter the text you want to convert to a QR code.", callback: callback });
});


// The inline query handler for the QR code command
bot.inlineQuery(commandUtils.qrCode.qrCodeRegex, utils.debounce(async (ctx: Context) => {

  // Gets the text from the inline query
  const queryText = ctx.inlineQuery!.query;

  // Call the handler to generate the QR code
  const [message, qrCodeDataURL] = await commandUtils.qrCode.qrCodeHandler(queryText);

  // If the QR code isn't generated, exit the function
  if (!qrCodeDataURL) return;

  // Otherwise, send the QR code to the QR code group and gets the photo message object
  const photoMessage = await ctx.telegram.sendPhoto(process.env.QR_CODE_GROUP_ID! as string, { source: Buffer.from(qrCodeDataURL, "base64") }, { caption: message });

  // Gets the last photo in the message that was sent
  const qrCode = photoMessage.photo.pop();

  // Gets the file id
  const qrCodeFileId = qrCode!.file_id;

  // Generates the inline query reply
  const queryReply = {
    type: "photo",
    id: "QR Code",
    photo_file_id: qrCodeFileId,
    caption: message
  } as InlineQueryResult;

  // Answers the inline query
  await ctx.answerInlineQuery([queryReply], { cache_time: 2 ** 31 - 1 });
}));










// The chat ID command (this function is purely to help with the setting up of the training message)

// The handler for the get chat ID command
bot.command([
  "get_chat_id",
  "get_id",
  "chat_id",
  "getchatid",
  "getid",
  "chatid"
], async ctx => {

  // Sends a message telling the user that the next message is the chat ID of the current chat
  await ctx.reply("The chat ID of this chat is:");

  // Gets the chat ID of the chat
  const chatID = ctx.message.chat.id;

  // Sends the chat ID to the user
  await ctx.reply(`${chatID}`);
});










// The command to view the source code of the bot
bot.command([
  "source",
  "src"
], async ctx => {

  // The message to send to the user
  const msg = `View the source code of the bot on:\n\n${utils.hyperlink("Replit", "https://replit.com/@hankertrix/Inline-Skate-Info?v=1")}`;

  // Sends the message to the user
  await ctxReply(ctx, msg);
});










// The command to generate the list of commands with their description (for updating the list of commands for the bot in Bot Father)
bot.command([
  "commands",
  "command"
], async ctx => {

  // Immediately exits the function if the user isn't the developer
  if (ctx.message.chat.id != parseInt(process.env.DEV_ID as string)) return;

  // The message to send to the developer
  const msg = commandUtils.help.generateCommandMsg();

  // Sends the message to the user
  await ctxReply(ctx, msg);
});










// Export the bot as a default export
export default bot;