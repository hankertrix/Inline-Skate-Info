// The module containing the utility functions for the website

// The regular expression to match all the symbols
const symbolRegex = /[!$%^&*()_+|~=`{}[\]:";'<>?,./]/g;

// The regular expression to get the file extension
const fileExtensionRegex = /\.\w*$/;

// Function to change the title into a url friendly string
export function makeUrlFriendlyString(str: string): string {
  return str.replace(symbolRegex, "").replaceAll(" ", "-").toLowerCase();
}

// Function to make a string titlecase
export function titlecase(str: string): string {
  //

  // Gets the length of the string
  const strLen = str.length;

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
    //

    // Gets the current character
    const currentChar = str[i];

    // Gets the character before the current one
    const charBefore = str[i - 1];

    // If the character before the current one is a space,
    // adds the uppercase version of the current character
    // to the list of characters
    if (!charBefore.trim()) {
      chars[i] = currentChar.toUpperCase();
    }

    // Otherwise, just add the current character without changing anything
    else chars[i] = currentChar;
  }

  // Returns the new titlecased string
  return chars.join("");
}

// Function to convert a file path to a URL
export function convertFilePathToUrl(filePath: string): string {
  return filePath.replace(/^.*\/static/, "").trim();
}

// Function to get the file extension of a file
export function getFileExtension(path: string): string {
  //

  // Gets the match using the regular expression
  const regexMatch = path.match(fileExtensionRegex);

  // If the file extension isn't found, then return an empty string
  if (!regexMatch) return "";

  // Otherwise, get the file extension from the regex match array
  const [fileExtension] = regexMatch;

  // Return the file extension without the dot
  return fileExtension.slice(1);
}

// Function to get the file name from a file path
export function getFilenameFromFilePath(filePath: string): string {
  //

  // Remove everything from the start of the file path to get the file name
  let filename = filePath.replace(/^.*\//, "");

  // Remove the file extension from the file name
  filename = filename.replace(fileExtensionRegex, "");

  // Convert all the underscores and dashes to spaces
  filename = filename.replace(/[_-]/g, " ");

  // Returns the titlecased file name
  return titlecase(filename).trim();
}

// Function to get a list of unique filenames from a list of paths
export function getUniqueFilenamesFromFilePaths(filePaths: string[]): string[] {
  //

  // Gets the list of filenames
  const filenames = filePaths.map((path) => getFilenameFromFilePath(path));

  // Gets the set of duplicated filenames
  const duplicatedFilenames = new Set(
    filenames.filter(
      (filename, index, array) => array.indexOf(filename) !== index
    )
  );

  // Iterates over the filenames
  for (const [index, path] of filePaths.entries()) {
    //

    // Gets the filename
    const filename = filenames[index];

    // If the filename is inside the set of duplicated filenames,
    // then add the file extension in parentheses
    if (duplicatedFilenames.has(filename)) {
      filenames[index] = `${filename} (${getFileExtension(
        path
      ).toUpperCase()})`;
    }
  }

  // Returns the list of filenames
  return filenames;
}
