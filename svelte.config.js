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
        "script-src": [
          "self",
          "sha512-4515d140a78b1b2bcbba2b52c9513c64a63cb02a4f81343f3a6c19855003052a039fc834919d3f1a455affd0114985302a97e24d4a90af6fbdf17063fcdb860e",
        ],
        "style-src": [
          "self",
          "sha512-2a551a0bfea69a81b2d4fde02ec5831f89b552870e515c4c09121b4eed4830dd8f4819083016b55bbd7396dc89c99cfae989871fefa3f6de609bb79d2012b2d4"
        ]
      }
    }
  }
};

export default config;
