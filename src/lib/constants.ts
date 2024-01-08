// Module that contains all the constants

// The function to get the URL of the website
export function getBasePath() {
  return process.env.URL ? process.env.URL : "https://inline-skate-info.hankertrix.repl.co";
}

// The maximum number of characters in a message
export const MAX_CHARACTERS = 4096;

// The maximum number of entities in a message
export const MESSAGE_ENTITY_LIMIT = 200;

// The cache time for the inline query
export const CACHE_TIME = 0;

// The spacing between the title and the message
export const SPACING = "\n\n\n";

// The spacing between each category
export const CATEGORY_SPACING = "\n\n\n\n\n";

// The spacing between each label (e.g. address, email, description, etc.)
export const LABEL_SPACING = "\n";

// The exit message to cancel any validator
export const EXIT_MESSAGE = "Use the /cancel command to cancel this operation.";

// The operation cancelled message
export const OPERATION_CANCELLED_MSG = "The operation has been cancelled.";

// The developer's username
export const DEV = "@hankertrix";

// The pagefind bundle path
export const PAGEFIND_BUNDLE_PATH = "pagefind"

// The dictionary containing all the zero width characters
// mapped to the letters of the alphabet.
// Purposefully left out left to right and right to left marks as those
// will mess with the formatting of the message in Telegram.
// This dictionary of characters is to create a zero-width code to check
// for a specific type of message when answering a callback query.
export const LETTER_TO_ZERO_WIDTH_CHARS = {
  A: "\u00AD",       // Soft hyphen
  B: "\u061C",       // Arabic letter mark
  C: "\u180E",       // Mongolian vowel separator
  D: "\u200B",       // Zero width space
  E: "\u200C",       // Zero width non-joiner
  F: "\u200D",       // Zero width joiner
  G: "\uFEFF",       // Zero width non-breaking space
  H: "\u2060",       // Word joiner
  I: "\u2061",       // Function application
  J: "\u2062",       // Invisible times
  K: "\u2063",       // Invisible separator
  L: "\u2064",       // Invisible plus
  M: "\u206A",       // Inhibit symmetric swapping
  N: "\u206B",       // Activate symmetric swapping
  O: "\u206C",       // Inhibit arabic form swapping
  P: "\u206D",       // Activate arabic form swapping
  Q: "\u206E",       // National digit shapes
  R: "\u206F",       // Nominal digit shapes
  S: "\u{1D173}",    // Musical symbol begin beam
  T: "\u{1D174}",    // Musical symbol end beam
  U: "\u{1D175}",    // Musical symbol begin tie
  V: "\u{1D176}",    // Musical symbol end tie
  W: "\u{1D177}",    // Musical symbol begin slur
  X: "\u{1D178}",    // Musical symbol end slur
  Y: "\u{1D179}",    // Musical symbol begin phrase
  Z: "\u{1D17A}",    // Musical symbol end phrase
}

// The pages in the website
export const PAGES = {

  "Terminology": "",

  "Tricks": {
    "Basics": "",
    "Fundamentals": "",
    "Turns": "",
    "Stops": "",
    "Jumps": "",

    "Slalom": {

      "Class A": {
        "Others": "",
        "Sitting": "",
        "Jumps": "",
        "Wheelings": "",
        "Spins": "",
      },

      "Class B": {
        "Others": "",
        "Sitting": "",
        "Jumps": "",
        "Wheelings": "",
        "Spins": "",
      },

      "Class C": {
        "Others": "",
        "Sitting": "",
        "Jumps": "",
        "Wheelings": "",
        "Spins": "",
      },

      "Class D": {
        "Others": "",
        "Sitting": "",
        "Jumps": "",
        "Wheelings": "",
        "Spins": "",
      },

      "Class E": {
        "Others": "",
        "Sitting": "",
        "Jumps": "",
        "Wheelings": "",
        "Spins": "",
      }

    },

    "Slides": {

      "Class A": {
        "Family 1": "",
        "Family 2": "",
        "Family 3": "",
        "Family 4": "",
        "Family 5": "",
      },

      "Class B": {
        "Family 1": "",
        "Family 2": "",
        "Family 3": "",
        "Family 4": "",
        "Family 5": "",
      },

      "Class C": {
        "Family 1": "",
        "Family 2": "",
        "Family 4": "",
        "Family 5": "",
      },

      "Class D": {
        "Family 1": "",
        "Family 2": "",
        "Family 4": "",
        "Family 5": "",
      },

      "Class E": {
        "Family 1": "",
        "Family 2": "",
        "Family 4": "",
      },

    },

    // Re-enable the aggressive tricks once the data for it is complete
    // "Aggressive": {

    //   "Basics": "",

    //   "Class A": {
    //     "Spins": "",
    //     "Others": "",
    //   },

    //   "Class B": {
    //     "Stalls": "",
    //     "Grinds": "",
    //     "Airs": "",
    //     "Spins": "",
    //     "Others": "",
    //   },

    //   "Class C": {
    //     "Stalls": "",
    //     "Grinds": "",
    //     "Airs": "",
    //     "Grabs": "",
    //     "Spins": "",
    //     "Others": "",
    //   },

    //   "Class D": {
    //     "Stalls": "",
    //     "Grinds": "",
    //     "Airs": "",
    //     "Grabs": "",
    //     "Spins": "",
    //     "Others": "",
    //   },

    //   "Class E": {
    //     "Stalls": "",
    //     "Grinds": "",
    //     "Airs": "",
    //     "Grabs": "",
    //     "Spins": "",
    //     "Others": "",
    //   },

    // },

    "Wizard": "",
    "Misc": "",
  },

  "Resources": {
    "Buying Guides": "",
    "Maintenance Guides": "",
    "Trick Lists": "",
    "Glossaries": "",
    "Rulebooks": "",
    "Misc": "",
  },

  "Discount Information": "",

  "Skate Recommendations": "",

  "Retailers": {
    "Retailers In Singapore": "",
    "Online Retailers": "",
    "Overseas Retailers": "",
  },

  "Places to Rent": "",

  "Places to Skate": {
    "Skating Rinks": "",
    "Skate Parks": "",
  },

  "Brands": {
    "Skate Brands": "",
    "Wheel Brands": "",
    "Frame Brands": "",
    "Liner Brands": "",
  },

  "Differences": {
    "Triskates": "",
    "FR Skates": "",
    "F5S vs F6S": "",
    "Boot Types": "",
  },

  "Products": {
    "Protective Gear": "",
    "Accessories": "",
    "Maintenance Items": "",
    "Clothing": "",
  },
} as const;
