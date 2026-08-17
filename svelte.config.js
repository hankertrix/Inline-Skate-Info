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
				"default-src": ["self"],
				"img-src": ["self"],
				"font-src": ["self"],
				"connect-src": ["self"],
				"manifest-src": ["self"],
				"object-src": ["none"],
				"frame-src": ["https://www.youtube-nocookie.com"],
				"form-action": ["none"],
				"base-uri": ["none"],

				"script-src": [
					"self",

					// For Pagefind to work
					"wasm-unsafe-eval",
				],

				"style-src": [
					"self",

					// This is needed for the styles below it to work
					"unsafe-hashes",

					// The main CSS style for the entire page
					"sha256-6a9+Lds8WKfdxKRBnSKAnPOnS463+PcAPc/b7NWjtoY=",

					// The styles for the main icon of the site
					"sha256-GQHiEoT/Yyw7i/CQpbsUjU+CrrV6C6C7U5iq+niceqw=",

					// The styles for Svelte
					"sha256-S8qMpvofolR8Mpjy4kQvEm7m1q8clzU4dfDH0AmvZjo=",
				],
			},
		},
	},
};

export default config;
