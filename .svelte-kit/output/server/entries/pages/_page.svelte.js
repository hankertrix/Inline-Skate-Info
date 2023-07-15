import { c as create_ssr_component, b as add_attribute, d as escape, e as each } from "../../chunks/ssr.js";
import { m as makeUrlFriendlyString } from "../../chunks/utils.js";
import { P as PAGES } from "../../chunks/constants.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-page-wrapper.svelte-zrzaa9.svelte-zrzaa9{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 var(--page-left-right-margin)}.main-page-title.svelte-zrzaa9.svelte-zrzaa9{font-family:Oleo Script;margin:20px 0;text-align:center}.how-to-use.svelte-zrzaa9.svelte-zrzaa9{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:10px 0}.links-grid.svelte-zrzaa9.svelte-zrzaa9{display:grid;grid-template-rows:repeat(5, 1fr);grid-template-columns:repeat(3, 1fr);justify-content:center;align-items:center;gap:5px;font-family:Oleo Script;font-weight:bold;font-size:1.5em;text-align:center;background-color:var(--accent-colour);border:2px solid black;border-radius:20px;margin-top:10px;margin-bottom:30px;padding:20px}@media only screen and (max-width: 700px){.how-to-use.svelte-zrzaa9.svelte-zrzaa9{margin:30px 0}.links-grid.svelte-zrzaa9.svelte-zrzaa9{display:flex;flex-direction:column}.links-grid.svelte-zrzaa9>div.svelte-zrzaa9:empty{display:none}}",
  map: null
};
const title = "Welcome to Inline Skate Info!";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const mainPages = Object.keys(PAGES);
  $$result.css.add(css);
  return `     ${$$result.head += `<!-- HEAD_svelte-1bjoj2s_START -->${$$result.title = `<title>Inline Skate Info</title>`, ""}<!-- HEAD_svelte-1bjoj2s_END -->`, ""}  <div class="main-page-wrapper svelte-zrzaa9"><header><h1 class="main-page-title text svelte-zrzaa9"${add_attribute("id", makeUrlFriendlyString(title), 0)}>${escape(title)}</h1> <div class="description text" data-svelte-h="svelte-1jea3fh">Here, you can find most of the information you need to get started with inline skating!</div> <div class="how-to-use text svelte-zrzaa9" data-svelte-h="svelte-1hrtyli"><div>Click the hamburger icon at the top right hand corner of the screen to open up the sidebar.</div> <div>Use the search bar above or click on one of the links below to get started!</div></div></header>  <main class="links-grid svelte-zrzaa9"><div class="svelte-zrzaa9"></div> <a${add_attribute("href", makeUrlFriendlyString(mainPages[0]), 0)}>${escape(mainPages[0])}</a> <div class="svelte-zrzaa9"></div> ${each(mainPages.slice(1, mainPages.length - 1), (page) => {
    return `<a${add_attribute("href", makeUrlFriendlyString(page), 0)}>${escape(page)}</a>`;
  })} <div class="svelte-zrzaa9"></div> <a${add_attribute("href", makeUrlFriendlyString(mainPages[mainPages.length - 1]), 0)}>${escape(mainPages[mainPages.length - 1])}</a> <div class="svelte-zrzaa9"></div></main></div>`;
});
export {
  Page as default
};
