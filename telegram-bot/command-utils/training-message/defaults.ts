// The module containing the defaults for the training message

import {
  type CreatePollMessagePrompts,
  type CreatePollMessageConfig,
  DEFAULT_NUMBERING_STYLES_MSG,
  DEFAULT_SINGLE_CHOICE_POLL_MSG,
  DEFAULT_POLL_OPTION_MSG,
  DEFAULT_CREATE_POLL_MSG_CONFIG,
} from "../poll-message";
import { DEV } from "$lib/constants";


// The incomplete data message for the poll message creation scene
export const DEFAULT_TRAINING_MSG_INCOMPLETE_DATA_MESSAGE =
  "The training message is still missing " +
  "some required data for it to be generated.\n\n" +
  "Please continue the training message creation process or use" +
  "the /cancel command to cancel the creation of the training message.";


// The prompts to create the training message
export const DEFAULT_CREATE_TRAINING_MSG_PROMPTS: CreatePollMessagePrompts = [

  // The prompt for the first step
    "No training message was found for this chat, "
    + "so please enter the desired training message."
    + "If you would like to set up a training message for this chat, "
    + `please contact ${DEV}.`,

  // The prompts for the second step
  {
    success: {
      prompt: "Do you want to allow multiple choices for the training message?",
      placeholder: "Answer either yes or no...",
    },
    failure: {
      prompt: DEFAULT_NUMBERING_STYLES_MSG,
      placeholder: "Choose a numbering style...",
    },
  },

  // The prompts for the third step
  {
    success: "Please enter the first poll option.",
    failure: {
      prompt: DEFAULT_SINGLE_CHOICE_POLL_MSG,
      placeholder: "Answer either yes or no...",
    }
  },

  // The prompts for the fourth step
  { success: DEFAULT_POLL_OPTION_MSG, failure: "Please enter a poll option." },
];


// The default configuration for creating the training message
export const DEFAULT_CREATE_TRAINING_MSG_CONFIG: Required<
CreatePollMessageConfig
> = {
  ...DEFAULT_CREATE_POLL_MSG_CONFIG,
  prompts: DEFAULT_CREATE_TRAINING_MSG_PROMPTS,
  incompleteDataMessage: DEFAULT_TRAINING_MSG_INCOMPLETE_DATA_MESSAGE,
} as const;
