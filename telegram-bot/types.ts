// Module that contains all the types used in the bot


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


// The type representing a date mapping
export type DateMapping = {
  [day: number]: Date
};
