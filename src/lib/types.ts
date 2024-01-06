// The file containing all the types used in the website

// The type for the table of contents
export type TableOfContents = Map<string, { id: string, children: TableOfContents }>;

// The dictionary type
export type Dict<T> = {
  [key: string | number]: T | Dict<T>
};

// The interface representing the pagefind library
export interface Pagefind {
  init: () => void;
  options: (options: {
    baseUrl?: string;
    bundlePath?: string;
    excerptLength?: number;
    highlightParam?: "highlight"
  }) => Promise<void>;
  search: (query: string) => Promise<PagefindResponse>;
};

// The interface representing pagefind response after searching
export interface PagefindResponse {
  results: PagefindResultFragment[];
};

// The interface representing a pagefind result that doesn't have the data loaded yet
export interface PagefindResultFragment {
  id: string;
  data: () => Promise<PagefindResult>;
};

// The interface representing a pagefind result with all the data loaded
export interface PagefindResult {
  url: string;
  excerpt: string;
  filters: {
    [filter: string]: string | string[]
  };
  meta: {
    title: string;
    image: string;
  };
  content: string;
  word_count: number;
};
