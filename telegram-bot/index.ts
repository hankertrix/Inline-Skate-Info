// The module that contains the telegraf bot

import { Telegraf, Scenes, session } from "telegraf";
import type { Context } from "telegraf";
import type { InlineQueryResult } from "telegraf/types";
import * as filters from "telegraf/filters";
import { SPACING, DEV, getBasePath } from "../src/lib/constants";
import * as utils from "./utils";
import {
  ctxReply,
  answerInlineQuery,
  isAdmin,
  deleteMessages,
  messageAndFileCommandHandler,
  messageAndFileInlineQueryHandler,
  wrapCallbackWithMessageDeleter,
  removeBotUsernameAndCommand,
  generateInlineKeyboard
} from "./bot-utils";
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

${utils.hyperlink("Here", getBasePath())} is the bot's website if you prefer to view the information presented here on a website.

If you find that the resource is not ultimate enough, or that the information presented is wrong, inaccurate or outdated, please contact ${DEV}. Please contact ${DEV} as well if you have any feedback, suggestions, enquiries or bug reports.

Use the /help command to see what the bot can do.`;

  // Replies to the user
  await ctxReply(ctx, startMsg);
});










// The help command

// The handler for the help command
bot.command("help", async ctx => {

  // Remove the command and the bot's username from the message
  const givenCommand = removeBotUsernameAndCommand(ctx.message.text);

  // If a command is given
  if (givenCommand) {

    // Sends the result of the getCommandHelpMessage function to the user
    return await ctxReply(
      ctx,
      commandUtils.help.getCommandHelpMsg({command: givenCommand})
    );
  }

  // Otherwise, gets the sections of the help message
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
  await messageAndFileCommandHandler(ctx, () => commandUtils.lists.generateListsText(
    commandUtils.lists.Lists.TrickLists
  ));
});


// The inline query handler for the trick lists command
bot.inlineQuery(commandUtils.lists.trickListsRegex, async ctx => {

  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, () => commandUtils.lists.generateListsText(
    commandUtils.lists.Lists.TrickLists
  ));
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
  await messageAndFileCommandHandler(ctx, () => commandUtils.lists.generateListsText(
    commandUtils.lists.Lists.Rulebooks
  ));
});


// The inline query handler for the rulebooks command
bot.inlineQuery(commandUtils.lists.rulebooksRegex, async ctx => {

  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, () => commandUtils.lists.generateListsText(
    commandUtils.lists.Lists.Rulebooks
  ));
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
  await messageAndFileCommandHandler(ctx, () => commandUtils.lists.generateListsText(
    commandUtils.lists.Lists.BuyingGuides
  ));
});


// The inline query handler for the buying guides command
bot.inlineQuery(commandUtils.lists.buyingGuidesRegex, async ctx => {

  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, () => commandUtils.lists.generateListsText(
    commandUtils.lists.Lists.BuyingGuides
  ));
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
  await messageAndFileCommandHandler(ctx, () => commandUtils.lists.generateListsText(
    commandUtils.lists.Lists.MaintenanceGuides
  ));
});


// The inline query handler for the maintenance guides command
bot.inlineQuery(commandUtils.lists.maintenanceGuidesRegex, async ctx => {

  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, () => commandUtils.lists.generateListsText(
    commandUtils.lists.Lists.MaintenanceGuides
  ));
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
  await messageAndFileCommandHandler(ctx, () => commandUtils.lists.generateListsText(
    commandUtils.lists.Lists.Glossaries
  ));
});


// The inline query handler for the glossaries command
bot.inlineQuery(commandUtils.lists.glossariesRegex, async ctx => {

  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, () => commandUtils.lists.generateListsText(
    commandUtils.lists.Lists.Glossaries
  ));
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
  await messageAndFileCommandHandler(ctx, () => commandUtils.lists.generateListsText(
    commandUtils.lists.Lists.MiscResources
  ));
});


// The inline query handler for the miscellaneous resources command
bot.inlineQuery(commandUtils.lists.miscResourcesRegex, async ctx => {

  // Use the general handler for this inline query as the function to generate a the data returns a message and a list of paths to the files
  await messageAndFileInlineQueryHandler(ctx, () => commandUtils.lists.generateListsText(
    commandUtils.lists.Lists.MiscResources
  ));
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
  await messageAndFileInlineQueryHandler(ctx, commandUtils.discountInfo.generateDiscountInfo, true, "\n\n\n\n\nLinks to the PDF catalogues:\n\n\n");
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
  "skate_parks",
  "skate_park",
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
  "skating_rinks",
  "skating_rink",
  "rinks",
  "rink"
], async ctx => {

  // Calls the handler for the rinks command to get the reply
  const reply = await commandUtils.places.uncategorisedPlacesHandler(
    commandUtils.places.PLACES.SkatingRinks
  );

  // Replies the user with the message
  await ctxReply(ctx, reply);
});


// The inline query handler for the rinks command
bot.inlineQuery(commandUtils.places.skatingRinksRegex, async ctx => {

  // Calls the handler for the rinks command to get the reply
  const reply = await commandUtils.places.uncategorisedPlacesHandler(
    commandUtils.places.PLACES.SkatingRinks
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










// The command to explain the differences between
// the Flying Eagle F5S and F6S

// The handler for the F5S vs F6S command
bot.command([
  "f5s_vs_f6s",
  "f5svsf6s",
], async ctx => {

  // Gets the F5S vs F6S message
  const msg = await commandUtils.flyingEagleDiff.generateMsg();

  // Replies to the user with the message that talks
  // about the differences between the F5S and F6S
  await ctxReply(ctx, msg);
});


// The inline query handler for the F5S vs F6S command
bot.inlineQuery(commandUtils.flyingEagleDiff.regex, async ctx => {

  // Gets the FR difference message
  const msg = await commandUtils.flyingEagleDiff.generateMsg();

  // Answers the inline query with the message that talks
  // about the differences between the F5S and F6S
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










// Poll message and training message command
// (they function similarly, only that the training message command
// will have a default output which is the training message)

// The handler for the poll message command
bot.command([
  "poll_msg",
  "pollmsg",
  "poll_message",
  "pollmessage"
], async ctx => {

  // If the user isn't an admin,
  // tries to delete the message that the user has sent
  if (!(await isAdmin(ctx))) return await deleteMessages(
    ctx, ctx.message.message_id
  );

  // Gets the text from the message
  const message = ctx.message.text;

  // Gets the message and the callback from the generatePollCallback function
  const { userMessage, callback } = commandUtils.poll.generatePollMessage(
    message,
    commandUtils.poll.DEFAULT_POLL_OPTIONS,
    [],
    commandUtils.poll.DEFAULT_NUMBERING_STYLE,
    commandUtils.poll.DEFAULT_FORMAT_OPTIONS,
    commandUtils.poll.DEFAULT_PRESERVE_LINES,
    commandUtils.poll.DEFAULT_SHOW_REMAINING,
    commandUtils.poll.POLL_TYPES.DEFAULT,
    generateInlineKeyboard
  );

  // If the message is empty, enters the scene to get the user's input
  if (!userMessage) {

    // Wrap the callback with a message deleter
    const wrappedCallback = wrapCallbackWithMessageDeleter(callback);

    // Enters the scene to get the user's input
    return await ctx.scene.enter(
      "validate",
      {
        message: "Please enter the poll message.",
        callback: wrappedCallback,
        messagesToDelete: []
      }
    );
  }

  // Calls the callback function
  await callback(ctx, userMessage);

  // Tries to delete the message that the user has sent
  await deleteMessages(ctx, ctx.message.message_id);
});


// The handler for the training message command
bot.command([
  "trg_msg",
  "trgmsg",
  "trg_message",
  "trgmessage"
], async ctx => {

  // If the user isn't an admin,
  // tries to delete the message that the user has sent
  if (!(await isAdmin(ctx))) return await deleteMessages(
    ctx, ctx.message.message_id
  );

  // Set the default timezone to "Asia/Singapore"
  process.env.TZ = "Asia/Singapore";

  // Gets the text from the message sent
  let msg = ctx.message.text;

  // Remove the command from the message
  msg = removeBotUsernameAndCommand(msg);

  // Gets the training message handler to handle the training message command
  await commandUtils.trainingMsg.handler(ctx, msg);
});


// The callback query handler for the poll message
bot.on(filters.callbackQuery("data"), async ctx => {

  // Calls the callback handler in the poll message to
  // handle the callback query
  await commandUtils.poll.callback_handler(ctx);
});










// The create poll message and create rental message commands
// (they function similarly, just creating different types of polls)

// The handler for the create poll message command
bot.command([
  "create_poll_msg",
  "create_custom_poll_msg",
  "make_poll_msg",
  "make_custom_poll_msg",
  "custom_poll_msg",
  "create_poll_message",
  "create_custom_poll_message",
  "make_poll_message",
  "make_custom_poll_message",
  "custom_poll_message",
  "createpollmsg",
  "createcustompollmsg",
  "makepollmsg",
  "makecustompollmsg",
  "custompollmsg",
  "createpollmessage",
  "createcustompollmessage",
  "makepollmessage",
  "makecustompollmessage",
  "custompollmessage"
], async ctx => {

  // If the user isn't an admin,
  // tries to delete the message that the user has sent
  if (!(await isAdmin(ctx))) return await deleteMessages(
    ctx, ctx.message.message_id
  );

  // Gets the message from the user
  const message = removeBotUsernameAndCommand(ctx.message.text);

  // Enters the create poll message scene
  ctx.scene.enter(
    "createPollMessage",
    {
      message: message,
      pollOptions: [],
      messagesToDelete: [ctx.message.message_id],
      ...commandUtils.poll.DEFAULT_CREATE_POLL_MSG_CONFIG
    }
  );
});


// The handler for the create rental message command
bot.command([
  "create_rental_msg",
  "create_custom_rental_msg",
  "make_rental_msg",
  "make_custom_rental_msg",
  "custom_rental_msg",
  "create_rental_message",
  "create_custom_rental_message",
  "make_rental_message",
  "make_custom_rental_message",
  "custom_rental_message",
  "createrentalmsg",
  "createcustomrentalmsg",
  "makerentalmsg",
  "makecustomrentalmsg",
  "customrentalmsg",
  "createrentalmessage",
  "createcustomrentalmessage",
  "makerentalmessage",
  "makecustomrentalmessage",
  "customrentalmessage"
], async ctx => {

  // If the user isn't an admin,
  // tries to delete the message that the user has sent
  if (!(await isAdmin(ctx))) return await deleteMessages(
    ctx, ctx.message.message_id
  );

  // Gets the message from the user
  const message = removeBotUsernameAndCommand(ctx.message.text);

  // Enters the create poll message scene
  // with the rental message configuration
  ctx.scene.enter(
    "createPollMessage",
    {
      message: message,
      pollOptions: [],
      messagesToDelete: [ctx.message.message_id],
      ...commandUtils.rentalMsg.DEFAULT_CREATE_RENTAL_MSG_CONFIG
    }
  );
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
  const [ , qrCodeDataURL] = await commandUtils.qrCode.handler(msgText);

  // If the QR code is generated, reply to the user with the image
  if (qrCodeDataURL) return await ctx.replyWithPhoto({
    source: Buffer.from(qrCodeDataURL, "base64")
  });

  // The callback function to call when the user has given a valid input
  async function callback(ctx: Context, input: string) {

    // Calls the QR code handler to generate the QR code
    const [ , qrCodeDataURL] = await commandUtils.qrCode.handler(input);

    // Reply to the user with the image
    return await ctx.replyWithPhoto({
      source: Buffer.from(qrCodeDataURL, "base64")
    });
  }

  // Enter the scene to validate user input
  await ctx.scene.enter(
    "validate",
    {
      message: "Please enter the text you want to convert to a QR code.",
      callback: callback
    }
  );
});


// The inline query handler for the QR code command
bot.inlineQuery(commandUtils.qrCode.qrCodeRegex, async ctx => {

  // Gets the text from the inline query
  const queryText = ctx.inlineQuery!.query;

  // Call the handler to generate the QR code
  const [message, qrCodeDataURL] = await commandUtils.qrCode.handler(
    queryText
  );

  // If the QR code isn't generated, exit the function
  if (!qrCodeDataURL) return;

  // Otherwise, send the QR code to the QR code group
  // and gets the photo message object
  const photoMessage = await ctx.telegram.sendPhoto(
    process.env.QR_CODE_GROUP_ID! as string,
    { source: Buffer.from(qrCodeDataURL, "base64") },
    { caption: message }
  );

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
});










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
  await ctxReply(ctx, "The chat ID of this chat is:");

  // Gets the chat ID of the chat
  const chatID = ctx.message.chat.id;

  // Sends the chat ID to the user
  await ctxReply(ctx, `${chatID}`);
});










// The command to view the source code of the bot
bot.command([
  "source",
  "src"
], async ctx => {

  // The list of hyperlinks to where the source of the bot is hosted
  const sources = [
    utils.hyperlink("Codeberg", "https://codeberg.org/Hanker/Inline-Skate-Info"),
    utils.hyperlink("GitHub", "https://github.com/hankertrix/Inline-Skate-Info"),
    utils.hyperlink("Replit", "https://replit.com/@hankertrix/Inline-Skate-Info?v=1")
  ];

  // The message to send to the user
  const msg = `View the source code of the bot on:\n\n${sources.join("\n")}`;

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










// The function to immediately delete messages of people joining the group
bot.on(filters.message("new_chat_members"), async ctx => {
  await deleteMessages(ctx, ctx.message.message_id);
});










// The function to immediately delete messages of people leaving the group
bot.on(filters.message("left_chat_member"), async ctx => {
  await deleteMessages(ctx, ctx.message.message_id);
});










// Export the bot as a default export
export default bot;
