function getBasePath() {
  return process.env.URL ? process.env.URL : "https://inline-skate-info.hankertrix.repl.co";
}
const MAX_CHARACTERS = 4096;
const MESSAGE_ENTITY_LIMIT = 200;
const CACHE_TIME = 0;
const SPACING = "\n\n\n";
const CATEGORY_SPACING = "\n\n\n\n\n";
const LABEL_SPACING = "\n";
const EXIT_MESSAGE = "Use the /cancel command to cancel this operation.";
const OPERATION_CANCELLED_MSG = "The operation has been cancelled.";
const DEV = "@hankertrix";
const PAGES = {
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
        "Spins": ""
      },
      "Class B": {
        "Others": "",
        "Sitting": "",
        "Jumps": "",
        "Wheelings": "",
        "Spins": ""
      },
      "Class C": {
        "Others": "",
        "Sitting": "",
        "Jumps": "",
        "Wheelings": "",
        "Spins": ""
      },
      "Class D": {
        "Others": "",
        "Sitting": "",
        "Jumps": "",
        "Wheelings": "",
        "Spins": ""
      },
      "Class E": {
        "Others": "",
        "Sitting": "",
        "Jumps": "",
        "Wheelings": "",
        "Spins": ""
      }
    },
    "Slides": {
      "Class A": {
        "Family 1": "",
        "Family 2": "",
        "Family 3": "",
        "Family 4": "",
        "Family 5": ""
      },
      "Class B": {
        "Family 1": "",
        "Family 2": "",
        "Family 3": "",
        "Family 4": "",
        "Family 5": ""
      },
      "Class C": {
        "Family 1": "",
        "Family 2": "",
        "Family 4": "",
        "Family 5": ""
      },
      "Class D": {
        "Family 1": "",
        "Family 2": "",
        "Family 4": "",
        "Family 5": ""
      },
      "Class E": {
        "Family 1": "",
        "Family 2": "",
        "Family 4": ""
      }
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
    "Misc": ""
  },
  "Resources": {
    "Buying Guides": "",
    "Maintenance Guides": "",
    "Trick Lists": "",
    "Glossaries": "",
    "Rulebooks": "",
    "Misc": ""
  },
  "Discount Information": "",
  "Skate Recommendations": "",
  "Retailers": {
    "Retailers In Singapore": "",
    "Online Retailers": "",
    "Overseas Retailers": ""
  },
  "Places to Rent": "",
  "Places to Skate": {
    "Skating Rinks": "",
    "Skate Parks": ""
  },
  "Brands": {
    "Skate Brands": "",
    "Wheel Brands": "",
    "Frame Brands": "",
    "Liner Brands": ""
  },
  "Differences": {
    "Triskates": "",
    "FR Skates": "",
    "Boot Types": ""
  },
  "Products": {
    "Protective Gear": "",
    "Accessories": "",
    "Maintenance Items": "",
    "Clothing": ""
  }
};
export {
  CACHE_TIME as C,
  DEV as D,
  EXIT_MESSAGE as E,
  LABEL_SPACING as L,
  MAX_CHARACTERS as M,
  OPERATION_CANCELLED_MSG as O,
  PAGES as P,
  SPACING as S,
  MESSAGE_ENTITY_LIMIT as a,
  CATEGORY_SPACING as b,
  getBasePath as g
};
