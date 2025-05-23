import adapter from "@sveltejs/adapter-netlify";
import { sveltePreprocess } from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),

  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        "default-src": ["none"],
        "img-src": ["self"],
        "font-src": ["self"],
        "connect-src": ["self"],
        "manifest-src": ["self"],
        "object-src": ["none"],
        "frame-src": ["https://www.youtube-nocookie.com"],
        "frame-ancestors": ["none"],
        "form-action": ["none"],
        "base-uri": ["none"],

        "script-src": [
          "self",

          // For Pagefind to work
          "wasm-unsafe-eval",

          // The script in app.html to stop the page from flashing
          "sha256-d2pQ/3PfzMyNVJrM8tHklReh2FBEi4YJneAGxVKHrtM=",
        ],

        "style-src": [
          "self",

          // Main CSS style for the entire page
          "sha256-DVjIOpTXG5xePW6r2ugbRkW/OhSOWeU36LRR6SqlgQo=",

          // Styles for the website icon
          "sha256-GQHiEoT/Yyw7i/CQpbsUjU+CrrV6C6C7U5iq+niceqw=",

          // Styles for the Pagefind highlight script
          "sha256-ZCoB1kba9ZTfELA9P5NVsXbrXfcqOSTrLTbcMfUVY4E=",

          // This is needed for the style below it to work
          "unsafe-hashes",

          // No idea what style this is for, but it's required
          "sha256-S8qMpvofolR8Mpjy4kQvEm7m1q8clzU4dfDH0AmvZjo=",
        ],
      },
    },
  },
};

export default config;
