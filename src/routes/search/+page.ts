// The module to load the search results for the search page

import type { LoadEvent } from "@sveltejs/kit";
import type { Pagefind } from "vite-plugin-pagefind/types";
import { PAGEFIND_BASE_PATH, PAGEFIND_HIGHLIGHT_PARAM } from "$lib/constants";

// Don't prerender this page
export const prerender = false;

// Don't run this page on the server
export const ssr = false;

// The function to load the data before loading the page
export async function load({ url: { searchParams } }: LoadEvent) {
  //

  // Gets the search query from search params
  const searchQuery = searchParams.get("q")?.trim();

  // If the environment isn't the browser or if the search query isn't given,
  // exit the function immediately and return an empty result
  if (!searchQuery || searchQuery.length < 1)
    return {
      searchTerm: searchQuery,
      results: [],
    };

  // Otherwise, import pagefind
  const pagefind: Pagefind = await import(
    /* @vite-ignore */ `${PAGEFIND_BASE_PATH}/pagefind.js`
  );

  // Set the bundle directory
  await pagefind.options({
    basePath: `${PAGEFIND_BASE_PATH}/`,
    highlightParam: PAGEFIND_HIGHLIGHT_PARAM,
  });

  // Initialise pagefind
  await pagefind.init();

  // Search for the search query
  const search = await pagefind.search(searchQuery);

  // Loads all the results for the page
  const results = await Promise.all(search.results.map((r) => r.data()));

  // Returns the results
  return {
    searchTerm: searchQuery,
    results: results,
  };
}
