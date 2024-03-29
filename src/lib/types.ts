// The file containing all the types used in the website

// The type for the table of contents
export type TableOfContents = Map<string, { id: string, children: TableOfContents }>;

// The type of the JSON data
// None of the types I tried got typescript to behave,
// so I'm setting it as any
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type JsonData = any;

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
