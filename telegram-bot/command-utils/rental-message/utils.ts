// The utility functions for the rental message

import { type Scenes, Markup } from "telegraf";
import { type PollConfig, numberingStyleRegex } from "../poll-message";
import { regexEscape } from "../../utils";


// The function to generate an inline keyboard
export function generateRentalMsgInlineKeyboardFunc(
  tagString: string
) {

  // Define a function to return that just takes the rental options
  // as an argument
  function inlineKeyboardGenerator(rentalOptions: string[]) {

    // The list of inline keyboard buttons
    const inlineKeyboard = [];

    // Iterates over the rental options and add them to the inline keyboard
    for (const rentalOption of rentalOptions) {

      // Add the rental option as an inline keyboard button
      inlineKeyboard.push(
        [Markup.button.callback(rentalOption, rentalOption)]
      );
    }

    // Adds the default tag string to the inline keyboard
    inlineKeyboard.push(
      [Markup.button.callback(tagString, tagString)]
    );

    // Returns the keyboard
    return Markup.inlineKeyboard(inlineKeyboard);
  }

  // Returns the inline keyboard generator wrapped with the
  // tag string given
  return inlineKeyboardGenerator;
}


// The function to answer the rental message callback
export async function answerRentalMessageCbQuery(
  ctx: Scenes.WizardContext,
  isTag: boolean,
  removed: boolean | null,
  tagged: boolean | null,
  rentalOption: string | null = null,
) {

  // If it is a tagging button that was pressed
  if (isTag) {

    // If the tagged variable isn't null
    if (tagged != null) {

      // Tells the user that that have indicated that they
      // have or have not paid.
      const callbackReply = tagged
        ? "Successfully indicated that you have paid! Thank you!"
        : "Removed the indication that you have paid.";

      // Sends the callback reply to the user
      await ctx.answerCbQuery(callbackReply);
    }

    // Otherwise
    else {

      // Otherwise, tells the user that they need to add their name to the
      // rental message first
      await ctx.answerCbQuery(
        `You need to add your name to the rental message before you can indicate that you have paid.`
      );

      // Returns false to tell the calling function that there's no need
      // to edit the message
      return false;
    }
  }

  // Otherwise, if the rental option is given
  else if (rentalOption) {

    // If the removed variable isn't null
    if (removed != null && rentalOption) {

      // Tells the user that they have either added
      // or removed their name from the rental option
      await ctx.answerCbQuery(
        `Your name has been ${
          removed ? "removed from" : "added to"
        } '${rentalOption}'!`
      );
    }

    // Otherwise, the removed variable is null
    else {

      // Tells the user that the rental option they chose is full
      await ctx.answerCbQuery(
        `Sorry, the rental option that you picked, '${rentalOption}', is full.`
      );

      // Returns false to tell the calling function that there's
      // no need to edit the message
      return false;
    }
  }

  // Otherwise, return false because a rental option wasn't given
  // and the button pressed was not a tag button
  else return false;

  // Returns true to tell the calling function that the message needs
  // to be edited
  return true;
}


// The function to answer the callback query
// if the global (poll-wide) limit is hit
export async function answerIfGlobalLimitIsHit(
  ctx: Scenes.WizardContext,
  reformedPollMessage: string,
  entry: string,
  pollConfig: Required<PollConfig>,
  removerRegex: RegExp | null = null
): Promise<boolean> {

  // This function returns true if the callback query has been answered,
  // and false if the callback query hasn't been answered

  // If the poll is a single choice poll, return false
  if (pollConfig.isSingleChoicePoll) return false;

  // If the limit given less than 1, return false
  if (pollConfig.maxNumberOfEntries < 1) return false;

  // If the remover regex is given,
  // replace the things in the remover regex with an empty string
  if (removerRegex) entry = entry.replace(removerRegex, "");

  // Create the regular expression to search the poll message for the entry
  const regex = new RegExp(
    String.raw`^[^\S\r\n]*${
      numberingStyleRegex.source
    }[^\S\r\n]*${regexEscape(entry)}.*?$`,
    "gm"
  );

  // Gets the matches in the entire message
  const matches = Array.from(reformedPollMessage.matchAll(regex));

  // Gets the number of entries
  const numberOfEntries = matches.length;

  // If the number of entries is less than or equal to the limit,
  // then return false.
  if (numberOfEntries <= pollConfig.maxNumberOfEntries) return false;

  // Otherwise, if the number of entries is more than the limit,
  // get the item string
  const itemString = pollConfig.maxNumberOfEntries === 1 ? "item" : "items";

  // Otherwise, answers the callback query
  await ctx.answerCbQuery(
    `Sorry, you may only rent a total of ${
      pollConfig.maxNumberOfEntries
    } ${itemString}.`
  );

  // Return true to tell the calling function
  return true;
}
