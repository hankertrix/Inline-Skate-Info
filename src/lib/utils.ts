// The module containing the utility functions for the website

// The regular expression to match all the symbols
const symbolRegex = /[\-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;

// Function to change the title into a url friendly string
export function makeUrlFriendlyString(str: string) {
  return str.replace(symbolRegex, "").replaceAll(" ", "-").toLowerCase();
}