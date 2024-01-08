// Module that contains all the types used in the bot

import type {
  CallbackQuery,
  Message,
  InlineKeyboardButton
} from "telegraf/types";

// The dictionary type
export type Dict<T> = {
  [key: string | number]: T | Dict<T>
};


// The type representing a dictionary that can be reversed
export type ReversibleDict = {
  [key: string | symbol | number]: string | symbol | number
};


// The type representing object values
export type ObjectValues<T> = T[keyof T];


// The type representing the optional properties of a given type
export type OptionalPropertiesOf<T extends object> = {
  [K in keyof T as T extends Record<K, T[K]> ? never : K]: T[K]
};


// The type representing a callback query
export type CbQuery = CallbackQuery & {
  data: string,
  message: Message.TextMessage & {
    reply_markup: {
      inline_keyboard: InlineKeyboardButton[][]
    }
  }
};


// The type representing a product
export type Product = {
  price: string,
  link: string
};


// The type representing a place
export type Place = {
  address?: string,
  hours?: string,
  price?: string,
  phone?: string,
  email?: string,
  website?: string,
  mapLink?: string,
  description?: string
};


// The type representing a date mapping
export type DateMapping = {
  [day: number]: Date
};
