import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en" class="light">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width" />\n\n    <!-- Favicons stuff -->\n    <link rel="apple-touch-icon" sizes="180x180" href="' + assets2 + '/favicons/apple-touch-icon.png">\n    <link rel="icon" type="image/png" sizes="32x32" href="' + assets2 + '/favicons/favicon-32x32.png">\n    <link rel="icon" type="image/png" sizes="16x16" href="' + assets2 + '/favicons/favicon-16x16.png">\n    <link rel="manifest" href="' + assets2 + '/favicons/site.webmanifest">\n    <link rel="mask-icon" href="' + assets2 + '/favicons/safari-pinned-tab.svg" color="#001dd2">\n    <link rel="shortcut icon" href="' + assets2 + '/favicons/favicon.ico">\n    <meta name="msapplication-TileColor" content="#00aba9">\n    <meta name="msapplication-config" content="' + assets2 + '/favicons/browserconfig.xml">\n    <meta name="theme-color" content="#ffffff">\n\n    <!-- The script to prevent the webpage from flashing -->\n    <script>\n\n      // Gets the theme from the local storage\n      const theme = window.localStorage.getItem("theme");\n\n      // Gets the HTML element\n      const htmlElement = window.document.documentElement;\n\n      // If the theme is found in the local storage, set the theme to the theme found in the local storage\n      if (theme) htmlElement.className = theme;\n\n        // Otherwise, set the theme to the light theme\n      else htmlElement.className = "light";\n\n    <\/script>\n    \n    ' + head + '\n    \n  </head>\n  <style>\n\n    @font-face {\n      font-family: "Oleo Script";\n      font-weight: normal;\n      src: url("/fonts/oleo-script-regular.woff2") format("woff2"),\n           url("/fonts/oleo-script-regular.woff") format("woff"),\n           url("/fonts/oleo-script-regular.ttf") format("truetype");\n    }\n\n    @font-face {\n      font-family: "Oleo Script";\n      font-weight: bold;\n      src: url("/fonts/oleo-script-bold.woff2") format("woff2"),\n           url("/fonts/oleo-script-bold.woff") format("woff"),\n           url("/fonts/oleo-script-bold.ttf") format("truetype");\n    }\n\n    :root {\n      --footer-height: 3.5rem;\n      --nav-bar-height: 74px;\n      --page-left-right-margin: 65px;\n      --page-margin: 10px var(--page-left-right-margin);\n    }\n\n    /* The colours for the light theme */\n    .light {\n      --text-colour: black;\n      --text-opacity: 1;\n      --background-colour: white;\n      --accent-colour: #41e3e5;\n      --accent-hover-colour: #6be9eb;\n      --accent-active-colour: #3dd6d8;\n      --mark-text-colour: black;\n      --mark-background-colour: yellow;\n      --link-colour: #fc0fc0;\n      --link-hover-colour: #ff66cc;\n      --link-active-colour: #ee13a8;\n      --link-visited-colour: #d41590;\n      --link-visited-hover-colour: #e1149c;\n      --link-visited-active-colour: #c71585;\n      --icon-colour: black;\n      --icon-hover-colour: hsl(210 10% 30%);\n      --icon-opacity: 1;\n      --collapsible-background-colour: #f1f1f1;\n    }\n\n    /* The colours for the dark theme */\n    .dark {\n      --text-colour: white;\n      --text-opacity: 0.87;\n      --background-colour: #121212;\n      --accent-colour: #002dff;\n      --accent-hover-colour: #1741ff;\n      --accent-active-colour: #0027e1;\n      --mark-text-colour: #e9e0ef;\n      --mark-background-colour: #5b148a;\n      --link-colour: #ff8e00;\n      --link-hover-colour: #ffa200;\n      --link-active-colour: #ff7a00;\n      --link-visited-colour: #ff5200;\n      --link-visited-hover-colour: #ff6600;\n      --link-visited-active-colour: #ff4000;\n      --icon-colour: #dee3ff;\n      --icon-hover-colour: hsl(210 10% 95%);\n      --icon-opacity: 1;\n      --collapsible-background-colour: #2c2c2c;\n    }\n\n    html, body {\n      padding: 0;\n      margin: 0;\n      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n      scroll-padding-top: calc(var(--nav-bar-height) + 10px);\n\n      /* Colours */\n      background-color: var(--background-colour);\n      color: var(--text-colour);\n    }\n\n    nav, footer {\n      background-color: var(--accent-colour);\n    }\n\n    mark {\n      color: var(--mark-text-colour);\n      background-color: var(--mark-background-colour);\n      opacity: 1;\n    }\n\n    /* Remove list styling from the summary element */\n    summary {\n      list-style: none;\n    }\n\n    /* Remove the arrow markwr beside the summary element */\n    summary::marker, summary::-webkit-details-marker {\n      display: none;\n    }\n\n    \n    /* Resize all of the heading elements so that the headings are always bigger than regular text */\n    \n    h1 {\n      font-size: 2.5em;\n    }\n\n    h2 {\n      font-size: 2em;\n    }\n\n    h3 {\n      font-size: 1.67em;\n    }\n\n    h4 {\n      font-size: 1.5em;\n    }\n\n    h5 {\n      font-size: 1.33em;\n    }\n\n    h6 {\n      font-size: 1.17em;\n    }\n\n    \n    .text {\n      color: var(--text-colour);\n      opacity: var(--text-opacity);\n    }\n\n    a {\n      opacity: 1;\n    }\n\n    a:link {\n      color: var(--link-colour);\n    }\n\n    a:link:hover {\n      color: var(--link-hover-colour);\n    }\n\n    a:link:active {\n      color: var(--link-active-colour);\n    }\n\n    a:visited {\n      color: var(--link-visited-colour);\n    }\n\n    a:visited:hover {\n      color: var(--link-visited-hover-colour);\n    }\n\n    a:visited:active {\n      color: var(--link-visited-active-colour);\n    }\n\n    *, *::after, *::before {\n      box-sizing: border-box;\n    }\n\n\n    /* Animate when the user has no preference for reduced motion */\n    @media (prefers-reduced-motion: no-preference) {\n\n      :root {\n        --animation-timing: 200ms ease-in-out;\n      }\n\n      html {\n        scroll-behavior: smooth;\n      }\n\n    }\n\n\n    /* The styles for mobile devices */\n    @media only screen and (max-width: 700px) {\n\n      :root {\n        --page-left-right-margin: 15px;\n        --page-margin: 0 var(--page-left-right-margin);\n      }\n\n    }\n\n  </style>\n  <body>\n    <div>' + body + "</div>\n  </body>\n</html>\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "cpjzme"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_public_env as c,
  set_assets as d,
  set_building as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_private_env as s
};
