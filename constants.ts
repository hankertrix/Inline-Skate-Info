// Module that contains all the constants


// The base path of the url for the program
export const BASE_PATH = process.env.VERCEL_ENV === "production" ? "https://inline-skate-info.vercel.app" : "https://inline-skate-info.hankertrix.repl.co";

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
