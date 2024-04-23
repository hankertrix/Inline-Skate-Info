// Module to handle the help command

import * as utils from "../utils";
import { DEV, SPACING } from "../../src/lib/constants";
import { TRICK_FILEPATH_MAP } from "./tricks";
import { BRAND_CATEGORY } from "./brands";

// The type of the info object in the command dictionary
type HelpInfo = {
  explanation: string,
  usage?: string,
  example?: string,
  categories?: string[]
};

// The regular expression to get the first sentence
const firstSentenceRegex = /^.*?(?:\.|$)/m;


// Function to get the command dictionary so that it doesn't always load when the bot is started and is only loaded when the help command is called
function getCommandDict() {

  // The command dictionary containing all the information on how to use the various bot commands
  const commandDict = {

    "start": {
      explanation: "Starts the bot and displays a basic overview of what the bot does."
    },

    "help": {
      explanation: `Displays information about how to use the bot and its commands. You can get the help message for a specific command by entering a bot command after the /help command.`,
      usage: "<bot command (optional)>",
      example: "/help start",
    },

    "terminology": {
      explanation: "Displays the common terms that are regularly used in inline skating. You can search for a term or display a category of terms with this command.",
      usage: "<category or term (optional)>",
      categories: [
        "all",
        "general terms",
        "styles of inline skate",
        "parts of an inline skate",
        "tricks"
      ]
    },

    "tricks": {
      explanation: "Displays information about inline skating tricks. You can choose to either display a specific category of tricks or search for a trick. The videos are ranked by their usefulness, so the most useful video is first and the least useful video is last.",
      usage: "<category or trick name (optional)>",
      categories: Object.values(TRICK_FILEPATH_MAP).map(info => info[0])
    },

    "trick_lists": {
      explanation: "Provides a list of trick lists for you to peruse."
    },

    "rulebooks": {
      explanation: "Provides a list of official rulebooks for you to peruse."
    },

    "buying_guides": {
      explanation: "Provides a list of buying guides for you to peruse."
    },

    "maintenance_guides": {
      explanation: "Provides a list of maintenance guides for you to peruse."
    },

    "glossaries": {
      explanation: "Provides a list of glossaries for you to peruse."
    },

    "misc_resources": {
      explanation: "Provides a list of miscellaneous resources for you to peruse."
    },

    "skate_boot_types": {
      explanation: "Displays information about the different types of skate boots."
    },

    "skate_recs": {
      explanation: "Displays the recommended skates for beginners."
    },

    "discount_info": {
      explanation: "Displays information about the tertiary student discount. This discount is only available to tertiary students studying in Singapore."
    },

    "where_to_buy": {
      explanation: "Displays information about the places you can buy skates from. You can display a specific category of places, such as online-only stores.",
      usage: "<category (optional)>",
      categories: [
        "all",
        "local",
        "overseas",
        "online"
      ]
    },

    "where_to_rent": {
      explanation: "Displays information about the places where you can rent inline skates in Singapore."
    },

    "skate_parks": {
      explanation: "Displays information about skate parks in Singapore."
    },

    "skating_rinks": {
      explanation: "Displays information about skating rinks in Singapore."
    },

    "brands": {
      explanation: "Displays information about the brands related to inline skating. You can display a specific category of brands, such as brands that only sell wheels.",
      usage: "<category (optional)>",
      categories: [
        "all",
        ...Object.values(BRAND_CATEGORY).map(
          category => category.replace(/[ _-]brands?/g, "")
        )
      ]
    },

    "fr_differences": {
      explanation: "Displays information about the differences between the various FR skates."
    },

    "f5s_vs_f6s": {
      explanation: "Displays information about the differences between the Flying Eagle F5S and the Flying Eagle F6S."
    },

    "triskate_differences": {
      explanation: "Displays information about the differences between triskates and regular 4-wheeled inline skates."
    },

    "accessories": {
      explanation: "Displays information about the accessories that you can buy for inline skating."
    },

    "protective_gear": {
      explanation: "Displays information about the protective gear you can buy."
    },

    "clothing": {
      explanation: "Displays information about the clothing you can buy, which are mostly just socks."
    },

    "maintenance_items": {
      explanation: "Displays information about the maintenance items you might need to maintain your skates."
    },

    "poll": {
      explanation: "Gets the bot to send a @countmeinbot styled poll message but with only one option called 'Coming'. You can also add the bot as an admin to your group to have the bot automatically delete the messages you sent to create the poll.",
      usage: "<poll message (optional)>"
    },

    "trg_msg": {
      explanation: `Gets the bot to send the training message that has been set up for your group. You will have to add the bot to your group and have the developer set up a training message for you. Use the /trg_msg_help command to see how to use the /trg_msg command. It functions the same way as the /poll_msg command if you have not set up a training message. Also, you can add the bot as an admin to your group to have the bot automatically delete the messages you sent to create the poll. If you want to set up a training message, please contact ${DEV}.`
    },

    "trg_msg_help": {
      explanation: "Displays how to use the /trg_msg command if you have set it up."
    },

    "rental_msg": {
      explanation: `Gets the bot to send the rental message that has been set up for your group. You will have to add the bot to your group and have the developer set up a rental message for you. Use the /rental_msg_help command to see how to use the /rental_msg command. It functions the same way as the /create_rental_msg command if you have not set up a rental message. Also you can add the bot as an admin to your group to have the bot automatically delete the messages you sent to create the rental message. If you want to set up a rental message, please contact ${DEV}.`
    },

    "rental_msg_help": {
      explanation: "Displays how to use the /rental_msg command if you have set it up."
    },

    "create_poll": {
      explanation: "Create a @countmeinbot styled poll with custom poll options. The bot will guide you through the process of creating a poll message using this function. The bot will automatically delete the messages you sent to create the poll if you have added the bot as an admin to your group.",
      usage: "<poll message (optional)>"
    },

    "create_rental_msg": {
      explanation: "Create a rentals-oriented @countmeinbot styled poll with custom rental options. The bot will automatically delete the messages you sent to create the rental message if you have added the bot as an admin to your group.",
      usage: "<rental message (optional)>"
    },

    "qr_code": {
      explanation: "Gets the bot to turn your text into a QR code.",
      usage: "<text that you want to convert to a QR code>"
    },

    "get_chat_id": {
      explanation: "Gets the bot to send the chat ID of the chat. This command is just here to facilitate the creation of the training message and the rental message for the /trg_msg command and /rental_msg command respectively."
    },

    "source": {
      explanation: "View the source code for the bot. Under the GNU Affero General Public License (AGPL) Version 3, a developer is required to make the source code available to all users who use his application."
    },

  } as const;

  // Returns the command dictionary
  return commandDict;
}


// Function to create the help message for a specific command
export function getCommandHelpMsg(args: {
  command?: string,
  entry?: [string, HelpInfo]
}): string {

  // Initialise the entry variable
  let entry: [string, HelpInfo | null] | undefined = args.entry;

  // If the command is given
  if (args.command) {

    // Remove the slash before the command
    const command = args.command.replace(/^\/\s*/, "").trim();

    // Gets the command dictionary
    const commandDict = getCommandDict();

    // Sets the entry variable to the command
    // and the value returned from the command dictionary
    entry = [command, utils.dictGet(commandDict, command) as HelpInfo | null];
  }

  // Pulls out the command and the information from the data
  const [cmd, info] = entry as [string, HelpInfo | null];

  // If the information is not found
  if (!info) {

    // Returns a string to tell the user that the command is not found
    return `No command called "${cmd}" was found.`;
  }

  // Initialise the list to store the command information
  const infoList: string[] = [];

  // Adds the command to the list
  infoList.push(`/${cmd}`);

  // Iterates the information
  for (const [label, value] of Object.entries(info)) {

    // If the label is "usage"
    if (label === "usage") {

      // Add the information about how to use the command to the list
      infoList.push(`${utils.bold(
        utils.titlecase(`${label}:`)
      )} ${utils.monospace(
        `/${cmd} ${utils.stripHtml(value as string)}`
      )}`);
    }

    // If the label is "example"
    else if (label === "example") {

      // Add the example of how to use the command to the list
      infoList.push(`${utils.bold(
        utils.titlecase(`${label}:`)
      )} ${utils.monospace(utils.stripHtml(value as string))}`);
    }

    // If the label is "categories"
    else if (label === "categories") {

      // Adds the categories to the list
      infoList.push(`${utils.bold(
        `Available ${label}:`
      )}\n${
        (value as string[]).map(
        (category: string) => `- ${utils.monospace(`/${cmd} ${category}`)}`
      ).join("\n")}`);
    }

    // Otherwise
    else {

      // Add the information to the list
      infoList.push(value as string);
    }
  }

  // Returns the info list joined with a new line
  return infoList.join("\n");
}


// Function to generate the help message for the commands
function getAllCommandHelpMsges() {

  // Gets the command dictionary
  const commandDict = getCommandDict();

  // Initialise the list to tstore the help message
  const commandHelpList: string[] = [];

  // Iterates the command dictionary
  for (const entry of Object.entries(commandDict)) {

    // Adds the information about the command to the list
    commandHelpList.push(
      getCommandHelpMsg({entry: entry as [string, HelpInfo]})
    );
  }

  // Returns the help message for the bot commands
  return commandHelpList.join("\n\n");
}


// Function to generate the help message
export function generateMsg() {

  // The preface
  const preface = `Hi, this bot aims to be the one-stop shop for all things inline skating! This bot is created with Singaporean skaters in mind, so all prices are in SGD and 'local' refers to Singapore. The skate recommendations may include skates exclusive to Singapore and the student discount is only relevant to tertiary students studying in Singapore.\n\nHere is how you can use the bot:`;

  // Get the help message for the commands
  const commandHelpMsg = `${utils.bold("Bot Commands")}${SPACING}${getAllCommandHelpMsges()}`;

  // The help message for other miscellaneous bot features
  const otherBotFeaturesHelpMsg = `
  
${utils.bold("Other Features")}
  
The bot is also capable of deleting the messages that are sent when a someone joins or leaves the group. All you need to do is to make the bot an admin and give it the permission to delete messages.

`.trim();

  // The part of the help message talking about inline mode
  const inlineModeHelp = `

${utils.bold("Inline Mode")}


To use the bot's inline mode, first type the bot's username, @inlineskatebot, then type the command that you want and any other arguments that the command takes. The bot will then respond with the result of that command.
Here's an example: ${utils.monospace("@inlineskatebot /terminology general terms")}

All commands are available in inline mode, except for /start, /help, /poll_msg, /trg_msg, /trg_msg_help, /rental_msg, /rental_msg_help, /create_poll_msg, /create_rental_msg, /get_chat_id and /source.

Do note that if you use the /qr_code command in inline mode, the developer will be able to see the QR code you have generated. If you are not comfortable with this, then please do not use the /qr_code command in inline mode. This is due to Telegram's Bot API not supporting the ability to answer inline queries with images created in memory. Instead, Telegram only allows images that have been uploaded online through a link, or images that have been uploaded to Telegram through an image ID. Thus, the QR code is first sent to a private group chat on Telegram, where the bot and the developer are the only members, before the QR code is sent to the user. Once again, if you are not comfortable with this, please do not use the /qr_code command in inline mode.

All other commands are completely anonymous, even when used in inline mode. You can verify this by using the /source command to view the source code of the bot.

  `.trim();

  // Returns the help message and the inline mode help message
  return [preface, commandHelpMsg, otherBotFeaturesHelpMsg, inlineModeHelp];
}


// Function to generate the list of commands (to update the list of commands in Bot Father)
export function generateCommandMsg() {

  // Gets the command dictionary
  const commandDict = getCommandDict();

  // Initialise the list to store the message
  const msgList: string[] = [];

  // Iterates the dictionary of commands
  for (const [command, info] of Object.entries(commandDict)) {

    // Adds the command and the first sentence of its explanation to the list
    msgList.push(`${command} - ${info.explanation.match(firstSentenceRegex)![0]}`);
  }

  // Returns the command message
  return msgList.join("\n");
}
