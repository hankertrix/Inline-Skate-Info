// Module that contains all the utility functions

import type { Dict, ReversibleDict } from "./types";
import { readFile, readdir } from "node:fs/promises";
import * as pathLib from "path";
import { getBasePath, LETTER_TO_ZERO_WIDTH_CHARS } from "../src/lib/constants";

// The dictionary to convert a character to a HTML entity
const charToHtmlEntity = {
  ">": "&gt;",
  "<": "&lt;",
  "&": "&amp;",
} as const;

// The regular expression to get all the non-letters
const nonLetterRegex = /[^A-Za-z]/g;


// Function to check if something is an object
export function isObject(obj: unknown) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}


// Function to merge two objects
// This function will MODIFY the base object
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
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
export async function loadPdfFile(path: string, root: string = "./static/pdfs/") {
  
  // Gets the file path
  const filePath = `${root ? root : "./static/"}${path}${path.endsWith(".pdf") ? "" : ".pdf"}`;

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
  else return `${getBasePath()}${path.replace(/\.\/static/g, "")}`;
}


// Function to convert a lowercase string to a label (the first character after a forward slash "/", the character at the start of the string, as well as everything within brackets is capitalised)
export function convertToLabel(label: string) {

  // Capitalise the first character that is after a forward slash or at the start of the string as well as everything in brackets if there isn't any space inside the brackets. If there are spaces inside the brackets, make the string title case instead
  return label.replace(/(?<=\/ ?|^)\w|[[(].*?[)\]]/g, str => str.includes(" ") ? titlecase(str) : str.toUpperCase());
}


// Function to get the module mapping
function getModuleMapping(): [number, string][] {

  // Gets the module mapping as a string
  const moduleMapping = process.env.MODULE_MAPPING as string;

  // Replace all of the single quotes ' with double quotes "
  // And return the module mapping
  return JSON.parse(moduleMapping.replaceAll(`'`, `"`));
}


// Function to the module data from the module mapping
function getModuleString(chatId: number): string | null {

  // Gets the module mapping
  const moduleMapping = getModuleMapping();

  // Gets the data for the given chat ID in the module mapping
  const data = moduleMapping.filter(data => data[0] === chatId);

  // If the data isn't found, then return null
  if (data.length < 1) return null;

  // Otherwise, gets the module string from the data
  const [ , moduleStr] = data[0];

  // Returns the module string
  return moduleStr;
}


// Function to get the module
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function getModule(chatId: number, modules: any) {

  // Gets the module string
  const moduleString = getModuleString(chatId);

  // If the module string is not found, then return null
  if (!moduleString) return null;

  // Gets the module from the modules given
  return modules[moduleString];
}


// Function to get a key from a dictionary and return a default value
// if the key is not found (mimics the python dict.get method)
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function dictGet(dict: Dict<unknown>, key: string | number, defaultValue: any = null) {

  // If the key is inside the dictionary, return the value
  if (key in dict) return dict[key];

  // Otherwise return the default value
  else return defaultValue;
}


// Function to search a dictionary using dictGet (basically only searching for keys that fully match)
export function dictGetSearch(dict: Dict<string>, searchTerm: string | number) {

  // Tries searching in the top level of the dictionary first
  let result = dictGet(dict, searchTerm);

  // If the result isn't null, then return the result
  if (result != null) return result;

  // Otherwise iterate the dictionaries in the dictionary
  for (const [ , innerDict] of Object.entries(dict)) {

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


// Function to format a string with the arguments given
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
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
    // The args[arg] works in both situations (array and object)
    // because iterating in an array gets the index of the array,
    // so args[arg] is essentially args[index]
    str = str.replace(new RegExp(`\\{${arg}\\}`, "gi"), args[arg]);
  }

  // Returns the formatted string
  return str;
}


// Function to get a title from the file name
export function getTitleFromFilename(filename: string, formatFunc: (text: string) => string = titlecase) {

  // Remove the file extension from the file name
  filename = filename.replace(/\.\w*$/, "");

  // Convert all the underscores and dashes to spaces
  filename = filename.replace(/[_-]/g, " ");

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


// Function to escape the characters for regular expressions
export function regexEscape(str: string) {

  // Escapes all the special regex characters in the string
  return str.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
}


// Function to remove all html tags from the given text
export function removeHtml(text: string) {
  return text.replace(/<\/?.*?(?:>|$)/g, "");
}


// Function to strip HTML characters from the given text
export function stripHtml(text: string) {
  return text.replace(
    /[&<>]/g,

    // The HTML characters in the given text are replaced with their
    // respective HTML entities using the charToHtmlEntity dictionary
    char => dictGet(charToHtmlEntity, char, char) as string
  );
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


// Function to reverse a dictionary
export function reverseDict(dict: ReversibleDict) {

  // Initialise the reverse dictionary
  const reversedDict: ReversibleDict = {};

  // Iterates over the dictionary
  for (const [key, value] of Object.entries(dict)) {

    // Sets the value of the original dictionary as the key in the reversed dictionary and vice versa
    reversedDict[value] = key;
  }

  // Returns the reversed dictionary
  return reversedDict;
}


// Function to make the first line of the text given bold
export function boldFirstLine(text: string) {

  // Gets the splitted text
  const splittedText = text.trim().split("\n");

  // Strips the HTML from the first line
  const strippedFirstLine = stripHtml(splittedText[0]);

  // Bold the first line
  const firstLine = bold(strippedFirstLine);

  // Returns the message with the first line bolded
  return `${firstLine}\n${splittedText.slice(1).join("\n") ?? ""}`.trim();
}


// Function to add days to a date
export function addDays(date: Date, days: number) {

  // Creates a new date object with the original date
  const newDate = new Date(date.getTime());

  // Adds the days to the new date object
  newDate.setDate(date.getDate() + days);

  // Returns the new date
  return newDate;
}


// Function to add hours to a date
export function addHours(date: Date, hours: number) {

  // Creates a new date object with the original date
  const newDate = new Date(date.getTime());

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


// Function to generate a zero-width code
// from a string consisting of letters only
export function generateZeroWidthCode(text: string) {

  // Removes everything in the string that isn't a letter
  // of the alphabet
  text = text.replaceAll(nonLetterRegex, "");

  // Initialise the list that contains the zero-width code
  const codeList: string[] = [];

  // Iterates over the string
  for (const char of text) {

    // Gets the code character for the character in the string
    const codeChar = dictGet(
      LETTER_TO_ZERO_WIDTH_CHARS,
      char.toUpperCase(),
      char
    );

    // Adds the code character to the list
    codeList.push(codeChar);
  }

  // Returns the list of code characters joined together with an empty string
  return codeList.join("");
}
