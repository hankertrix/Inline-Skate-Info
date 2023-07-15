import { c as create_ssr_component, a as subscribe, d as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error-page.svelte-dz7uef.svelte-dz7uef{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.error-page.svelte-dz7uef>div.svelte-dz7uef:empty{display:none}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `     <div class="error-page svelte-dz7uef"><h1 class="text">${escape($page.status)}</h1> <div class="text svelte-dz7uef">${escape($page.error ? $page.error.message : "")}</div> <p class="text" data-svelte-h="svelte-pdjn6h">Redirecting you to the landing page...</p></div>`;
});
export {
  Error as default
};
