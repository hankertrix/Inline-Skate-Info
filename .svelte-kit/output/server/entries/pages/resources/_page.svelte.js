import { c as create_ssr_component, d as escape, b as add_attribute, e as each } from "../../../chunks/ssr.js";
import { m as makeUrlFriendlyString } from "../../../chunks/utils.js";
import { P as PAGES } from "../../../chunks/constants.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-wrapper.svelte-14m2exm{margin:var(--page-margin);flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}header.svelte-14m2exm{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}h1.svelte-14m2exm{font-family:Oleo Script;font-size:3em}.links-grid.svelte-14m2exm{display:grid;grid-template-rows:repeat(2, 1fr);grid-template-columns:repeat(3, 1fr);justify-content:center;align-items:center;gap:10px;font-family:Oleo Script;font-weight:bold;font-size:1.7em;text-align:center;background-color:var(--accent-colour);border:2px solid black;border-radius:20px;padding:20px;margin:25px 0}@media only screen and (max-width: 700px){.links-grid.svelte-14m2exm{display:flex;flex-direction:column}}",
  map: null
};
const title = "Resources";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const urlFriendlyTitle = makeUrlFriendlyString(title);
  const pagesWithResources = Object.keys(PAGES[title]);
  $$result.css.add(css);
  return `     ${$$result.head += `<!-- HEAD_svelte-1n1sarj_START -->${$$result.title = `<title>${escape(title)} - Inline Skate Info</title>`, ""}<!-- HEAD_svelte-1n1sarj_END -->`, ""}  <div class="page-wrapper svelte-14m2exm"><header class="svelte-14m2exm"><h1 class="text svelte-14m2exm"${add_attribute("id", urlFriendlyTitle, 0)}>${escape(title)}</h1> <div class="text" data-svelte-h="svelte-kz10ev">Click on one of the links below to view the respective resource!</div></header> <main class="links-grid svelte-14m2exm"> ${each(pagesWithResources, (page) => {
    return `<a${add_attribute("href", `${urlFriendlyTitle}/${makeUrlFriendlyString(page)}`, 0)}>${escape(page)}</a>`;
  })}</main></div>`;
});
export {
  Page as default
};
