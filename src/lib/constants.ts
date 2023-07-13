// Module that contains all the constants

// Initialise the process variable so the browser doesn't complain about the variable being undefined
var process: any = process ? process : null;

// The base path of the url for the program
export const BASE_PATH = process?.env.VERCEL_ENV === "production" ? "https://inline-skate-info.vercel.app" : "https://inline-skate-info.hankertrix.repl.co";

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
    "Boot Types": "",
  },

  "Products": {
    "Protective Gear": "",
    "Accessories": "",
    "Maintenance Items": "",
    "Clothing": "",
  },
} as const;