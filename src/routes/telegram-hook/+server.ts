// Module to handle the request from telegram

import type { RequestHandler } from "@sveltejs/kit";
import { ENABLE_SETTING_WEBHOOK } from "../../../config";
import { getBasePath } from "$lib/constants";
import bot from "../../../telegram-bot";
import path from "path";


// Function to handle the POST request
export const POST: RequestHandler = async function({ request, url }) {

  const child = await import("node:child_process");
  child.exec("ls -R", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });

  // Try block to handle errors
  try {

    // Checks if the query is to set a webhook
    if (url.searchParams.get("setWebhook") === "true" && ENABLE_SETTING_WEBHOOK) {

      // Gets the webhook URL
      const webhookUrl = `${getBasePath()}/telegram-hook?secretHash=${process.env.SECRET_HASH}`;

      // Sets the webhook on the bot
      const isSet = await bot.telegram.setWebhook(webhookUrl);

      // Sets the message to tell me that the webhook has been set
      const message = isSet ? `Webhook URL has been set to ${webhookUrl}.` : "Failed to set the webhook url.";

      // Logs the message
      console.log(message);
    }

    // Otherwise, if the query has a secret hash (telegram update)
    else if (url.searchParams.get("secretHash") === process.env.SECRET_HASH) {

      // Gets the body of the request
      const body = await request.json();

      // Calls the bot's handle update method
      await bot.handleUpdate(body);
    }
  }

  // Catch the error
  catch (error) {

    // If the typescript recognises the error
    if (error instanceof Error) {

      // Logs the error string
      console.error(error.toString());
    }

    // Otherwise, just log the error object
    else console.error(error);
  }

  // Returns a 200 response to telegram
  return new Response("200 OK", {status: 200, statusText: "OK"});
}