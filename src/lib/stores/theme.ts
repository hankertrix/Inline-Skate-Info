// The store for the theme

import { browser } from "$app/environment";
import { writable } from "svelte/store";

// The theme type
type Theme = "light" | "dark";

// The default theme
const defaultTheme: Theme = "light";

// Gets the initial theme from the browser and defaults to the light theme
const initialTheme = browser ? window.localStorage.getItem("theme") as Theme ?? defaultTheme : defaultTheme;

// The theme state
const theme = writable<Theme>(initialTheme);

// The function to run every single time the theme changes
theme.subscribe(value => {

  // If the client exists
  if (browser) {

    // Stores the theme in the local storage
    window.localStorage.setItem("theme", value);
  }
});

// Export the theme
export default theme;