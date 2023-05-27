// Module that contains all the utility functions

import { readFile, readdir } from "node:fs/promises";
import * as pathLib from "path";
import { BASE_PATH } from "../constants";
import type { Dict } from "./types";


// Function to check if something is an object
export function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}


// Function to merge two objects
// This function will MODIFY the base object
export function mergeObjects(baseObj: any, objToMerge: object, errorOnConflict: boolean = true, overwriteBaseObject: boolean = false) {

  // Iterates the object to merge
  for (const [key, value] of Object.entries(objToMerge)) {

    // If the key is found in the base object
    if (key in baseObj) {

      // If the function is set to error on conflict, then throw an error to tell the user that a conflict has occured
      if (errorOnConflict) throw new Error(`The key '${key}' exists in both the base object and the object to merge.`);
      
      // If the function is set to overwrite the base object, then overwrite the key in the base object
      else if (overwriteBaseObject) baseObj[key] = value;
    }

    // Otherwise, just set the key and value in the base object since there is no conflict
    else baseObj[key] = value;
  }

  // Returns the base object
  return baseObj;
}


// Function to merge a list of objects into a single object
export function mergeListOfObjects(listOfObjects: object[]) {

  // Initialise the base object
  let baseObj;
  
  // Iterates the list of objects
  for (const obj of listOfObjects) {

    // If the base object isn't defined yet
    if (!baseObj) {

      // Set the base object to the current object
      baseObj = obj;

      // Continues the loop
      continue;
    }

    // Otherwise
    else {

      // Merge the current object with the base object
      mergeObjects(baseObj, obj);
    }
  }

  // Returns the base object
  return baseObj;
}


// Function to load all the JSON files in a directory
export async function loadJsonDirectory(path: string) {
  
  // Inner function that does the actual directory loading
  async function loadJsonDir(dirPath: string, tasks: Promise<string>[]) {

    // Gets everything in the directory
    const dirents = await readdir(dirPath, {withFileTypes: true});

    // Iterates the directory
    for (const dirent of dirents) {

      // If the file extension is ".json", adds the task to load the file to the list of tasks
      if (dirent.name.endsWith(".json")) tasks.push(
        readFile(pathLib.join(dirPath, dirent.name), "utf8")
      );

      // Otherwise, if the item is a directory, calls the loadJsonDir function on the directory
      else if (dirent.isDirectory()) {
        await loadJsonDir(
          pathLib.join(dirPath, dirent.name), tasks
        );
      }
    }
    
    // Returns the list of tasks
    return tasks;
  }
  
  // The list of tasks
  const tasks: Promise<string>[] = [];

  // Call the function to iterate the directory given
  await loadJsonDir(path, tasks);

  // Loads all the JSON files
  const jsonFiles = await Promise.all(tasks);

  // Parse all the JSON files into JSON objects
  const jsons = jsonFiles.map(jsonFile => JSON.parse(jsonFile));

  // Merge all the objects into a single object and return the result
  return mergeListOfObjects(jsons);
}


// Function to load a JSON file from the data folder
export async function loadJsonData(path: string, root: string = "./src/lib/data/") {

  // Gets the file path
  let filePath = `${root ? root : "./src/lib/"}${path}`;
  
  // Replace multiple consecutive slashes in the file path with a single slash
  filePath = filePath.replace(/\/{2,}/g, "/");

  // If the path given ends with a slash (which means a directory), then return the result of the loadJsonDirectory function
  if (filePath.endsWith("/")) return loadJsonDirectory(filePath);

  // Adds the ".json" file extension if the file path given doesn't have a file extension
  filePath = `${filePath}${filePath.endsWith(".json") ? "" : ".json"}`;

  // Loads the file from the file path
  const file = await readFile(filePath, "utf8");

  // Returns the JSON object
  return JSON.parse(file);
}


// Function to load a PDF file from the PDF folder
export async function loadPdfFile(path: string, root: string = "./static/pdf/") {
  
  // Gets the file path
  let filePath = `${root ? root : "./src/lib/"}${path}${path.endsWith(".pdf") ? "" : ".pdf"}`;

  // Loads the PDF file
  const file = await readFile(filePath, "utf8");

  // Returns the file
  return file;
}


// Convert a path to a file in the static folder into a URL
export function convertStaticFilePathToUrl(path: string) {

  // If the path doesn't start with "./static/"
  if (!path.startsWith("./static/")) {

    // Raise an error
    throw new Error("The file is not in the static folder.");
  }

  // Otherwise, returns the path converted into a URL
  else return `${BASE_PATH}${path.replace(/\.\/static/g, "")}`;
}


// Function to convert a lowercase string to a label (the first character after a forward slash "/", the character at the start of the string, as well as everything within brackets is capitalised)
export function convertToLabel(label: string) {

  // Capitalise the first character that is after a forward slash or at the start of the string as well as everything in brackets if there isn't any space inside the brackets. If there are spaces inside the brackets, make the string title case instead
  return label.replace(/(?<=\/ ?|^)\w|[\[(].*?[)\]]/g, str => str.includes(" ") ? titlecase(str) : str.toUpperCase());
}


// Function to get a key from a dictionary and return a default value if the key is not found (mimics the python dict.get method)
export function dictGet(dict: Dict<any>, key: string | number, default_value: any = null) {

  // If the key is inside the dictionary, return the value
  if (key in dict) return dict[key];

  // Otherwise return the default value
  else return default_value;
}


// Function to search a dictionary using dictGet (basically only searching for keys that fully match)
export function dictGetSearch(dict: Dict<string>, searchTerm: string | number) {

  // Tries searching in the top level of the dictionary first
  let result = dictGet(dict, searchTerm);

  // If the result isn't null, then return the result
  if (result != null) return result;

  // Otherwise iterate the dictionaries in the dictionary
  for (const [_, innerDict] of Object.entries(dict)) {

    // If the inner dictionary is actually a string then continue the loop
    if (typeof innerDict === "string") continue;

    // Call the dictGetSearch function on the inner dictionary
    result = dictGetSearch(innerDict, searchTerm);

    // If the result isn't null, return the result
    if (result != null) return result;
  }

  // Return the result anyway if it's not found (should be null)
  return result;
}


// Function to get the index of the last match in a string
export function getLastMatch(str: string, matchStr: string): [number, string] {

  // Gets the length of the match string
  const matchStrLen = matchStr.length;

  // The index of the last match
  let lastMatchIndex = 0;

  // Iterates backwards
  for (let i = str.length - matchStrLen; i >= 0; --i) {

    // Gets the token of the length of the match string
    const token = str.slice(i, i + matchStrLen);

    // If the token is equal to the match string
    if (token === matchStr) {

      // Sets the index of the last match
      lastMatchIndex = i;

      // Breaks the loop
      break;
    }
  }

  // Returns the index of the last match
  return [lastMatchIndex, matchStr];
}


// Function to try getting the last match of the given match strings, it will return the first string that has a match
export function getLastMatchChained(text: string, ...matchStrings: string[]): [number, string] {

  // Initialise the last match index to 0
  let lastMatchIndex = 0;

  // Initialise the last match index to the last match string
  let matchStr =  matchStrings[matchStrings.length - 1];

  // Iterates the list of strings to get the last match of
  for (const matchString of matchStrings) {

    // Gets the last match index and the match string
    [lastMatchIndex, matchStr] = getLastMatch(text, matchString);

    // If the last match index isn't 0, breaks the loop
    if (lastMatchIndex !== 0) break;
  }

  // Returns the last match index and the match string
  return [lastMatchIndex, matchStr];
}


// Function to make a string titlecase
export function titlecase(str: string) {

  // Gets the length of the string
  const strLen = str.length

  // If the length of the string is less than 1, return the string
  if (strLen < 1) return str;

  // Change all the characters to lowercase first
  str = str.toLowerCase();

  // Initialise the list of characters
  const chars = new Array(strLen);

  // Adds the first character in uppercase to the list of characters
  chars[0] = str[0].toUpperCase();

  // Iterates the string
  for (let i = 1; i < strLen; ++i) {

    // Gets the current character
    const currentChar = str[i];

    // Gets the character before the current one
    const charBefore = str[i-1];

    // If the character before the current one is a space, adds the uppercase version of the current character to the list of characters
    if (!charBefore.trim()) chars[i] = currentChar.toUpperCase();

    // Otherwise, just add the current character without changing anything
    else chars[i] = currentChar;
  }

  // Returns the new titlecased string
  return chars.join("");
}


// Function to capitalise the first character of the first word in the string only, with the rest of the string in lowercase
export function sentencecase(str: string) {

  // Gets the first character and makes it uppercase
  const firstChar = str[0].toUpperCase();

  // Converts the rest of the string to lowercase
  const restOfString = str.slice(1).toLowerCase();

  // Joins the first character back with the rest of the string and returns the result
  return `${firstChar}${restOfString}`;
}


// Function to format a string with the arguments given
export function strFormat(str: string, ...args: any[]) {

  // If arguments aren't given, return the string passed immediately
  if (!args.length) return str;

  // Gets the type of the arguments by checking the type of the first argument passed
  const argsType = typeof args[0];

  // If the type of the arguments passed is a string or a number, then get all the arguments passed
  // Otherwise it takes the first argument given
  args = (argsType === "string" || argsType === "number") ? [...args] : args[0];

  // Iterates the array or object given
  for (const arg in args) {

    // Replace the text in brackets with the argument given
    // The args[arg] works in both situations (array and object) because iterating in an array gets the index of the array, so args[arg] is essentially args[index]
    str = str.replace(new RegExp(`\\{${arg}\\}`, "gi"), args[arg]);
  }

  // Returns the formatted string
  return str;
}


// Function to get a title from the filename
export function getTitleFromFilename(filename: string, formatFunc: Function = titlecase) {

  // Remove the file extension from the filename
  filename = filename.replace(/\.\w*$/, "");

  // Convert all the underscores and dashes to spaces
  filename = filename.replace(/[_\-]/g, " ");

  // Returns the titlecased file name
  return formatFunc(filename).trim();
}


// Function to get the filename from a path
export function getFilenameFromPath(path: string, removeFileExt: boolean = false, formatted: boolean = true) {

  // Initialise the index of the "/" character
  let slashIndex = 0;

  // Iterate backwards until the a "/" is found
  for (let i = path.length - 1; i >= 0; i--) {

    // If the slash character is found
    if (path[i] === "/") {

      // Sets the slash index to the current index
      slashIndex = i;

      // Breaks the loop
      break;
    }
  }

  // Gets the filename
  let filename = path.slice(slashIndex + 1, path.length);

  // If the file extension isn't wanted, remove the file extension
  if (removeFileExt) filename = filename.replace(/\.\w+$/, "");

  // Returns the filename if the a nicely formatted filename isn't wanted
  if (!formatted) return filename;

  // Otherwise, return a nicely formatted filename
  else return titlecase(filename.replace(/-|_/g, " "))
}


// A debounce function to stop the a function from responding when the input is being changed
export function debounce(func: Function, timeInMs: number = 2000) {

  // Initialise the timer variable
  let timer: ReturnType<typeof setTimeout>;

  // Returns a function that clears the timeout if the function is called again within the time given and eventually calls it after the time given if the function isn't called again
  return function (this: any, ...args: any[]) {

    // Removes the timer (restarts the timer again)
    clearTimeout(timer);

    // Sets the timer to call the function after the time given
    timer = setTimeout(() => func.apply(this, args), timeInMs);
  }
}


// Function to remove a command from a message
export function removeCommand(message: string) {
  return message.replace(/^\/[\w\-]+/, "").trim();
}


// Function to remove all html tags from the given text
export function removeHtml(text: string) {
  return text.replace(/<\/?.*?(?:>|$)/g, "");
}


// The function to replace the HTML characters in the stripHtml function
function stripHtmlReplacer(match: string) {

  // Initialise the replacement string
  let replacementStr = match;

  // Switch statement to deal with all the cases
  switch (match) {

    // Returns the matched string by default
    default:
      break;

    // Replace the ampersand character with the HTML escaped version
    case "&":
      replacementStr = "&amp;";
      break;

    // Replace the left arrow character with the HTML escaped version
    case "<":
      replacementStr = "&lt;";
      break;

    // Replace the right arrow character with the HTML escaped version
    case ">":
      replacementStr = "&gt;";
      break;
  }

  // Returns the replacement string
  return replacementStr;
}


// Function to strip html characters from the given text
export function stripHtml(text: string) {
  return text.replace(/&|<|>/g, stripHtmlReplacer);
}


// Function to make the text a hyperlink using html
export function hyperlink(text: string, link: string) {
  return `<a href="${link}">${text}</a>`;
}


// Function to make the text monospaced
export function monospace(text: string) {
  return `<code>${text}</code>`;
}


// Function to italicise the text using html
export function italicise(text: string) {
  return `<i>${text}</i>`;
}


// Function to make the text bold using html
export function bold(text: string) {
  return `<b>${text}</b>`;
}


// Function to make the first line of the text givevn bold
export function boldFirstLine(text: string) {

  // Gets the splitted text
  const splittedText = text.trim().split("\n");

  // Returns the message with the first line bolded
  return `${bold(stripHtml(splittedText[0]))}\n${splittedText.slice(1).join("\n") ?? ""}`.trim();
}


// Function to add days to a date
export function addDays(date: Date, days: number) {

  // Creates a new date object with the original date
  let newDate = new Date(date.getTime());

  // Adds the days to the new date object
  newDate.setDate(date.getDate() + days);

  // Returns the new date
  return newDate;
}


// Function to add hours to a date
export function addHours(date: Date, hours: number) {

  // Creates a new date object with the original date
  let newDate = new Date(date.getTime());

  // Adds the hours to the new date object
  newDate.setHours(date.getHours() + hours);

  // Returns the new date
  return newDate;
}


// Function to get the day as a string from a date
export function getDayStr(date: Date, format: ("narrow" | "short" | "long") = "short") {

  // Returns the day as a string
  return Intl.DateTimeFormat("en-SG", {
    weekday: format
  }).format(date);
}


// Function to get the time as a string from a date
export function getTimeStr(date: Date) {

  // Returns the time as a string
  return Intl.DateTimeFormat("en-SG", {
    hour: "numeric",
    minute: "numeric"
  }).format(date).replace(/ |:00/g, "").trim();
}
