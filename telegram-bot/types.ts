// Module that contains all the types used in the bot

import type { Context } from "telegraf";


// The dictionary type
export type Dict<T> = {
  [key: string | number] : T | Dict<T>
};


// The type representing object values
export type ObjectValues<T> = T[keyof T];


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


// The type representing a place where people can skate
export type SkatingPlace = {
  address: string,
  hours: string,
  price: string,
  mapLink: string,
};


// The type representing a physical store for retail or rental of skates
export type PhysicalStore = {
  address: string,
  hours: string,
  price?: string,
  phone: string,
  email: string,
  website: string,
  mapLink: string,
  description: string
};


// The type representing an online store
export type OnlineStore = {
  website: string,
  address?: string,
  hours?: string,
  phone?: string,
  email?: string,
  mapLink?: string,
  description: string
};


// The type representing a brand
export type Brand = {
  link: string,
  description: string
};


// The type representing a date mapping
export type DateMapping = {
  [day: number]: Date
};


// The type representing the training message data
export type TrainingMessageData = [number, string, string, string[], string];


// The type representing a training message function
export type TrainingMessageFunction = (ctx: Context, message: string) => Promise<void>;
