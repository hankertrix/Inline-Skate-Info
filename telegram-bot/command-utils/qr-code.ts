// The module containing all the utilities for the QR code command

import { BOT_USERNAME } from "$lib/constants";
import { regexEscape } from "../utils";

// The regex for the QR code command
export const regex = new RegExp(
  String.raw`^\/?\bqr[ _-]?(?:code)?s?\b(?:${regexEscape(BOT_USERNAME)})?`,
  "i"
);

// Function to create the QR code data url
export async function createQrCodeDataUrl(message: string): Promise<string> {
  //

  // Import the QR code library
  const qrCodeLib = await import("qrcode");

  // Create the QR code
  const qrCode = await qrCodeLib.toDataURL(message);

  // Remove the data URL identifier from the front of the image string
  const qrCodeDataUrl = qrCode.replace(/^data:image\/\w+;base64,/, "").trim();

  // Return the QR code data URL
  return qrCodeDataUrl;
}

// Function to handle the QR code command and generate the reply
export async function handler(message: string) {
  //

  // Remove the command from the message
  message = message.replace(regex, "").trim();

  // If the message is empty, return the message and an empty string in a list
  if (!message) return [message, ""];

  // Otherwise, create the QR code data URL
  const qrCodeDataUrl = await createQrCodeDataUrl(message);

  // Return the QR code data URL
  return [message, qrCodeDataUrl];
}
