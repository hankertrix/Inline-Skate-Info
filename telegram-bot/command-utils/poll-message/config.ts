// The module containing the poll configuration object

import type { Scenes } from "telegraf";
import type { Message } from "telegraf/types";
import type {
  ObjectValues,
  InlineKeyboardGenerator,
} from "../../types";
import * as utils from "../../utils";


// The enum representing the various poll types
export const POLL_TYPES = {
  DEFAULT: utils.generateZeroWidthCode("default"),
  RENTAL: utils.generateZeroWidthCode("rental"),
} as const;


// The type of poll
export type PollType = ObjectValues<typeof POLL_TYPES>;


// The enum representing the numbering styles for the poll
export const NUMBERING_STYLES = {
  NONE: "",
  DASH: "-",
  ARROWHEAD: ">",
  EQUAL: "=",
  PLUS: "+",
  TILDE: "~",
  SMALL_DOT: "·",
  BIG_DOT: "•",
  ROUND_BRACKET: "1)",
  NUMBERED_DOT: "1.",
  ROUND_BRACKETS: "(1)",
  SQUARE_BRACKETS: "[1]",
  CURLY_BRACKETS: "{1}",
  ANGLE_BRACKETS: "<1>",
} as const;


// The type for the numbering styles
export type NumberingStyle = ObjectValues<typeof NUMBERING_STYLES>;


// The type of the format option variable
export type FormatOption = {
  formatStr: string;
  bold: boolean;
  default: string;
  zero?: string | null;
  one?: string | null;
};


// The type of the format options variable
export type FormatOptions = {
  pollOptionHeader: FormatOption;
  messageFooter: FormatOption;
};


// The type of the isSameNameFunc
export type IsSameNameFunc = (
  encounteredName: string,
  givenName: string | null
) => boolean;


// The options that can be passed to the poll configuration object
export type PollConfig = {
  pollOptions?: string[];
  pollType?: PollType;
  pollSpacing?: string,
  maxEntriesList?: number[];
  numberingStyle?: NumberingStyle;
  formatOptions?: FormatOptions;
  preserveLines?: boolean;
  showRemaining?: boolean;
  tagString?: string;
  tagAll?: boolean;
  maxNumberOfVotes?: number,
  isSingleChoicePoll?: boolean;
  isSameNameFunc?: IsSameNameFunc;
  inlineKeyboardGenerator?: InlineKeyboardGenerator;
};


// The type for a step in the create poll message scene
export type CreatePollMessageContext = Scenes.WizardContext & {
  message: Message.TextMessage;
};


// The type of the list of prompts for the create poll message scene
export type CreatePollMessagePrompts = [
  string,
  {
    success: {
      prompt: string;
      placeholder: string;
    };
    failure: {
      prompt: string;
      placeholder: string;
    };
  },
  {
    success: string;
    failure: {
      prompt: string;
      placeholder: string;
    };
  },
  { success: string; failure: string },
];


// The type of the additional options function
export type AdditionalOptionsFunction = (
  ctx: CreatePollMessageContext,
  message: string,
  state: CreatePollMessageState
) => Promise<boolean>;


// The options configuration options for the create poll message scene
export type CreatePollMessageConfig = PollConfig & {
  prompts: CreatePollMessagePrompts;
  incompleteDataMessage?: string,
  additionalOptionsFuncList?: AdditionalOptionsFunction[];
  additionalOptionsIndex?: number;
};


// The state for the create poll message scene
export type CreatePollMessageState = {
  pollMessage: string;
  pollConfig: CreatePollMessageConfig;
  messagesToDelete?: number[];
};


// Function to create a configuration object with default values
export function createConfig<Type extends Record<string, unknown>>(
  givenConfig: Type,
  defaultConfig: Type,
): Required<Type> {

  // Create a new Proxy object with a default getter
  const config = new Proxy<Type>(givenConfig, {

    // The getter that will return the default value
    get(object: Type, property: string) {

      // Get the default property
      const defaultProperty = defaultConfig[property];

      // If the object doesn't contain the value
      // and the default property is a list
      if (object[property] == null && Array.isArray(defaultProperty)) {

        // Set the default configuration on the object
        // with a shallow copy of the array
        Reflect.set(
          object,
          property,
          ([] as unknown[]).concat(defaultProperty)
        );
      }

      // Returns the object property if it exists,
      // otherwise return the default property
      return object[property] ?? defaultProperty;
    },
  });

  // Return the Proxy object and cast it to a required version of the type given
  return config as Required<Type>;
}
