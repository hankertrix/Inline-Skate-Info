// The module containing all the utilities for the QR code command

import { BOT_USERNAME } from "$lib/constants";
import { regexEscape } from "../utils";


// The regex for the QR code command
export const qrCodeRegex = new RegExp(
  String.raw`^\/?\bqr[ _-]?(?:code)?s?\b(?:${
    regexEscape(BOT_USERNAME)})?`,
  "i"
);


// Function to handle the QR code command and generate the reply
export async function handler(message: string) {

  // Removes the command from the message
  message = message.replace(qrCodeRegex, "").trim();

  // If the message is empty, returns the message and an empty string in a list
  if (!message) return [message, ""];

  // Otherwise, import the QR code library
  const qrCodeLib = await import("qrcode");
  
  // Creates the QR code and returns it
  const qrCode = await qrCodeLib.toDataURL(message);

  // Removes the data URL identifier from the front of the image string
  const qrCodeDataUrl = qrCode.replace(/^data:image\/\w+;base64,/, "").trim();

  // Returns the QR code data URL
  return [message, qrCodeDataUrl];
}
