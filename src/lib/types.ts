// The file containing all the types used in the page

// The type representing the JSON page data
export type JsonPageData = {
  [title: string]: {
    [data: string]: string | string[] | JsonPageData | {}
  }
} | {} | undefined | null;