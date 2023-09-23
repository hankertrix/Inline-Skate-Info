// The module to load the search results for the search page

import type { LoadEvent } from "@sveltejs/kit";
import type { Pagefind } from "$lib/types";
import { browser } from "$app/environment";

// Don't prerender this page
export const prerender = false;

// The function to load the data before loading the page
export async function load({ url: { searchParams } }: LoadEvent) {

  // Gets the search query from search params
  const searchQuery = searchParams.get("q")?.trim();

  // If the environment isn't the browser or if the search query isn't given, exit the function immediately and return an empty result
  if (!browser || (!searchQuery || searchQuery.length < 1)) return {
    searchTerm: searchQuery,
    results: []
  };

  // Otherwise, import pagefind
  // Asks typescript to ignore the import so that the site can be successfully built as the pagefind file is only available after the site is built
  // @ts-ignore: pagefind will be available after the site is built
  const pagefind = await import("$lib/../../static/pagefind/pagefind.js") as Pagefind;

  // Initialise pagefind
  pagefind.init();

  // Search for the search query
  const search = await pagefind.search(searchQuery);

  // Loads all the results for the page
  const results = await Promise.all(search.results.map(r => r.data()));

  // Returns the results
  return {
    searchTerm: searchQuery,
    results: results
  };
}