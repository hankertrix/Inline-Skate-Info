// Module that contains all the constants

// The function to get the URL of the website
export function getBasePath(): string {
  return process.env.URL
    ? process.env.URL
    : "https://inline-skate-info.hankertrix.repl.co";
}

// The maximum number of characters in a message
export const MAX_CHARACTERS: number = 4096;

// The maximum number of entities in a message
export const MESSAGE_ENTITY_LIMIT: number = 200;

// The cache time for the inline query
export const CACHE_TIME: number = 0;

// The spacing between the title and the message
export const SPACING: string = "\n\n\n";

// The spacing between each category
export const CATEGORY_SPACING: string = "\n\n\n\n\n";

// The spacing between each label (e.g. address, email, description, etc.)
export const LABEL_SPACING: string = "\n";

// The exit message to cancel any validator
export const EXIT_MESSAGE: string =
  "Use the /cancel command to cancel this operation.";

// The operation cancelled message
export const OPERATION_CANCELLED_MSG: string =
  "The operation has been cancelled.";

// The developer's username
export const DEV: string = "@hankertrix";

// The bot's username
export const BOT_USERNAME: string = "@inlineskatebot";

// The pagefind bundle folder
export const PAGEFIND_BASE_PATH: string = "/pagefind";

// The pagefind highlight parameter
export const PAGEFIND_HIGHLIGHT_PARAM: string = "highlight";

// The dictionary containing all the zero width characters
// mapped to the letters of the alphabet.
// This dictionary of characters is to create a zero-width code to check
// for a specific type of message when answering a callback query.
// This makes use Unicode tags for the invisible, zero-width characters.
export const LETTER_TO_ZERO_WIDTH_CHARS = {
  BEGIN: "\u{E0001}",
  " ": "\u{E0020}",
  "!": "\u{E0021}",
  '"': "\u{E0022}",
  "#": "\u{E0023}",
  $: "\u{E0024}",
  "%": "\u{E0025}",
  "&": "\u{E0026}",
  "'": "\u{E0027}",
  "(": "\u{E0028}",
  ")": "\u{E0029}",
  "*": "\u{E002A}",
  "+": "\u{E002B}",
  ",": "\u{E002C}",
  "-": "\u{E002D}",
  ".": "\u{E002E}",
  "/": "\u{E002F}",
  "0": "\u{E0030}",
  "1": "\u{E0031}",
  "2": "\u{E0032}",
  "3": "\u{E0033}",
  "4": "\u{E0034}",
  "5": "\u{E0035}",
  "6": "\u{E0036}",
  "7": "\u{E0037}",
  "8": "\u{E0038}",
  "9": "\u{E0039}",
  ":": "\u{E003A}",
  ";": "\u{E003B}",
  "<": "\u{E003C}",
  "=": "\u{E003D}",
  ">": "\u{E003E}",
  "?": "\u{E003F}",
  "@": "\u{E0040}",
  A: "\u{E0041}",
  B: "\u{E0042}",
  C: "\u{E0043}",
  D: "\u{E0044}",
  E: "\u{E0045}",
  F: "\u{E0046}",
  G: "\u{E0047}",
  H: "\u{E0048}",
  I: "\u{E0049}",
  J: "\u{E004A}",
  K: "\u{E004B}",
  L: "\u{E004C}",
  M: "\u{E004D}",
  N: "\u{E004E}",
  O: "\u{E004F}",
  P: "\u{E0050}",
  Q: "\u{E0051}",
  R: "\u{E0052}",
  S: "\u{E0053}",
  T: "\u{E0054}",
  U: "\u{E0055}",
  V: "\u{E0056}",
  W: "\u{E0057}",
  X: "\u{E0058}",
  Y: "\u{E0059}",
  Z: "\u{E005A}",
  "[": "\u{E005B}",
  "\\": "\u{E005C}",
  "]": "\u{E005D}",
  "^": "\u{E005E}",
  _: "\u{E005F}",
  "`": "\u{E0060}",
  a: "\u{E0061}",
  b: "\u{E0062}",
  c: "\u{E0063}",
  d: "\u{E0064}",
  e: "\u{E0065}",
  f: "\u{E0066}",
  g: "\u{E0067}",
  h: "\u{E0068}",
  i: "\u{E0069}",
  j: "\u{E006A}",
  k: "\u{E006B}",
  l: "\u{E006C}",
  m: "\u{E006D}",
  n: "\u{E006E}",
  o: "\u{E006F}",
  p: "\u{E0070}",
  q: "\u{E0071}",
  r: "\u{E0072}",
  s: "\u{E0073}",
  t: "\u{E0074}",
  u: "\u{E0075}",
  v: "\u{E0076}",
  w: "\u{E0077}",
  x: "\u{E0078}",
  y: "\u{E0079}",
  z: "\u{E007A}",
  "{": "\u{E007B}",
  "|": "\u{E007C}",
  "}": "\u{E007D}",
  "~": "\u{E007E}",
  END: "\u{E007F}",
} as const;

// The pages in the website
export const PAGES = {
  Terminology: "",

  Tricks: {
    Basics: "",
    Fundamentals: "",
    Turns: "",
    Stops: "",
    Jumps: "",

    Slalom: {
      "Class A": {
        Others: "",
        Sitting: "",
        Jumps: "",
        Wheelings: "",
        Spins: "",
      },

      "Class B": {
        Others: "",
        Sitting: "",
        Jumps: "",
        Wheelings: "",
        Spins: "",
      },

      "Class C": {
        Others: "",
        Sitting: "",
        Jumps: "",
        Wheelings: "",
        Spins: "",
      },

      "Class D": {
        Others: "",
        Sitting: "",
        Jumps: "",
        Wheelings: "",
        Spins: "",
      },

      "Class E": {
        Others: "",
        Sitting: "",
        Jumps: "",
        Wheelings: "",
        Spins: "",
      },
    },

    Slides: {
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

    Wizard: "",
    Misc: "",
  },

  Resources: {
    Articles: {
      Rockering: "",
      "Wheel Rotation": "",
    },
    "Buying Guides": "",
    "Maintenance Guides": "",
    "Trick Lists": "",
    Routes: "",
    Glossaries: "",
    Rulebooks: "",
    Misc: "",
  },

  "Discount Information": "",

  "Skate Recommendations": "",

  Retailers: {
    "Retailers In Singapore": "",
    "Online Retailers": "",
    "Overseas Retailers": "",
  },

  "Places to Rent": "",

  "Places to Skate": {
    "Skating Rinks": "",
    "Skate Parks": "",
  },

  Brands: {
    "Skate Brands": "",
    "Wheel Brands": "",
    "Frame Brands": "",
    "Liner Brands": "",
  },

  Differences: {
    Triskates: "",
    "FR Skates": "",
    "F5S vs F6S": "",
    "Boot Types": "",
  },

  Products: {
    "Protective Gear": "",
    Accessories: "",
    Tools: "",
    "Maintenance Items": "",
    Clothing: "",
  },
} as const;
