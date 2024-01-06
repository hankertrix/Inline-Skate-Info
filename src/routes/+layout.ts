// The module which handles the server side functions for the layout

import { browser } from '$app/environment';
import { PAGEFIND_FOLDER } from '$lib/constants';

// Prerender the entire application unless explicitly stated
export const prerender = true;

// Load function to call every time a page is loaded
export async function load() {

  // If the environment isn't the browser, exit the function
  if (!browser) return;

  // Import the pagefind highlight script
  const pagefindHighlighter = await import(`${PAGEFIND_FOLDER}/pagefind-highlight.js`) as any;

  // Creates a pagefind highlight object
  new pagefindHighlighter.PagefindHighlight({ highlightParam: "highlight" });
}
