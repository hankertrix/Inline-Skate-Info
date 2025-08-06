// The module containing all the utilities for the PayNow QR command
//
// References:
// https://github.com/xkjyeah/paynow-qr-generator/blob/master/src/App.vue
// https://www.emvco.com/specifications/emv-qr-code-specification-for-payment-systems-emv-qrcps-merchant-presented-mode/

import { BOT_USERNAME } from "$lib/constants";
import { regexEscape } from "../utils";
import crc16ccitt from "crc/calculators/crc16ccitt";
import { createQrCodeDataUrl } from "./qr-code";

// The regex for the PayNow QR command
export const regex = new RegExp(
  String.raw`^\/?\bpaynow[ _-]?(?:qr[ _-]?(?:code)?)?\b(?:${regexEscape(BOT_USERNAME)})?`,
  "i"
);

// The regex to check if the key is a 2 digit code
const twoDigitKeyRegex = /^\d{2}$/;

// The regex to check if the phone number is 8 digits
const phoneRegex = /^\d{8}$/;

// The regex to find whether the single-use flag is given
const singleUseRegex = /\bsingle(?:[ _-]?use)\b/i;

// The type of the QRData component value
type QRDataComponentValue = null | string | QRData;

// The QR data class
class QRData {
  components: Record<string, QRDataComponentValue>;

  // Constructor
  constructor(components: Record<string, QRDataComponentValue>) {
    this.components = components;
  }

  // Function to convert the QR data to a string
  toString(): string {
    //

    // Get the component entries but sort them by key
    const entries = Object.entries(this.components).sort();

    // The list of strings to join
    const strings: string[] = [];

    // Iterate over the entries
    for (const [key, component] of entries) {
      //

      // If the key is not a 2-digit numeric key code, throw an error
      if (!key.match(twoDigitKeyRegex)) {
        throw new Error(
          `Key should be a 2-digit numeric key code, key is "${key}" instead`
        );
      }

      // If the component is null, continue the loop
      if (component == null) {
        continue;
      }

      // Otherwise, get the value of the component as a string
      const value =
        typeof component === "string" ? component : component.toString();

      // Get the length of the value
      const length = value.length;

      // If the length is greater than 99, throw an error
      if (length > 99) {
        throw new Error(
          "The length of a value should not exceed 99, " +
          `value length is ${length}`
        );
      }

      // Otherwise, add the key, the length, and the value
      // joined as a string
      strings.push(`${key}${length.toString().padStart(2, "0")}${value}`);
    }

    // Return the list of strings joined together
    return strings.join("");
  }

  // Function to convert the QR data to a string with CRC
  toStringWithCrc(): string {
    //

    // Get the data as a string and add the code for the CRC
    const dataString = this.toString() + "6304";

    // Get the CRC code
    const crcCode = crc16ccitt(new TextEncoder().encode(dataString))
      .toString(16)
      .padStart(4, "0")
      .toUpperCase();

    // Return the data with the CRC
    return dataString + crcCode;
  }
}

// The function to normalise the phone or UEN
function normalise(phoneOrUen: string) {
  //

  // Convert the phone or UEN number to uppercase
  phoneOrUen = phoneOrUen.toUpperCase();

  // If the phone number is an 8 digit phone number,
  // return it with +65 in front
  if (phoneOrUen.match(phoneRegex)) {
    return `+65${phoneOrUen}`;
  }

  // Otherwise, just return the string
  return phoneOrUen;
}

// The function to handle the PayNow QR command
export async function handler(message: string) {
  //

  // Remove the command from the message
  message = message.replace(regex, "").trim();

  // If the message is empty, the return the message and an empty string
  if (!message) return [message, ""];

  // Get whether the single use flag is present
  const isSingleUse = message.match(singleUseRegex) ? true : false;

  // If the single use flag exists
  if (isSingleUse) {
    //

    // Remove it from the message
    message = message.replace(singleUseRegex, "").trim();

    // If the message is empty, the return the message and an empty string
    if (!message) return [message, ""];
  }

  // Split the message at the space character and pull out the arguments
  const [phoneOrUenRaw, amount] = message.split(" ").map((arg) => arg.trim());

  // Normalise the phone or UEN number
  const phoneOrUen = normalise(phoneOrUenRaw);

  // Create the QR code data
  //
  // EMV-Co QR specifications:
  // https://www.emvco.com/specifications/emv-qr-code-specification-for-payment-systems-emv-qrcps-merchant-presented-mode/
  const data = new QRData({
    //

    // Payload format indicator for the version we are using
    "00": "01",

    // Point of initiation method
    // 11 for static, which means the QR code can be used infinitely
    // 12 for dynamic, which means the QR code is one time use only
    "01": isSingleUse ? "12" : "11",

    // PayNow specific data
    "26": new QRData({
      //

      // Type of QR code data
      "00": "SG.PAYNOW",

      // Type of payee, phone number or UEN
      // 2 for UEN and 0 for phone number
      "01": phoneOrUen.startsWith("UEN") ? "2" : "0",

      // The payee, either a phone number or UEN
      "02": phoneOrUen,

      // Whether the amount is editable or not
      // 1 for editable and 0 for not editable.
      //
      // It is not editable when the amount is given
      // but editable when it isn't given,
      // which should be the majority of use cases.
      "03": amount ? "0" : "1",
    }),

    // Merchant category code
    "52": "0000",

    // ISO 4217 currency code
    // 702 is the ISO 4217 code for SGD
    "53": "702",

    // The amount to pay
    "54": amount,

    // Country code
    "58": "SG",

    // Merchant name, doesn't matter as PayNow has its own lookup
    "59": "NA",

    // City
    "60": "Singapore",
  }).toStringWithCrc();

  // Create the QR code data url
  const qrCodeDataUrl = await createQrCodeDataUrl(data);

  // Return the message and the QR code data url
  return [message, qrCodeDataUrl];
}
