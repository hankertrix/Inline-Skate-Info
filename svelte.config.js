import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        "default-src": ["self"],
        "object-src": ["none"],
        "frame-src": ["https://www.youtube-nocookie.com"],
        "frame-ancestors": ["none"],
        "base-uri": ["none"],
        "script-src": [
          "self",

          // For Pagefind to work
          "wasm-unsafe-eval"
        ],
        "style-src": [
          "self",

          // Main CSS style for the entire page
          "sha256-EHFod+1+yJWH4JfktKYKAH7HTu+l8xj88fKU0IUyX/U=",

          // Styles for the light and dark theme toggle
          "sha256-ysd0CFQu/mXJ7dH4GWPr2Y3mx7J2r75LcZQVHMH+5Ss="
        ]
      }
    }
  }
};

export default config;
