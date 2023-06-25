// The file containing all the types used in the website

// The interface representing the pagefind module
export interface Pagefind {
  search: (query: string) => Promise<PagefindResponse>;
};

// The interface representing pagefind response after searching
export interface PagefindResponse {
  results: PagefindResultFragment[];
};

// The interface representing a pagefind result
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
