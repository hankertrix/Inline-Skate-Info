import { c as create_ssr_component, a as subscribe, d as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error-page.svelte-tnj4oc.svelte-tnj4oc{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:var(--page-margin)}.error-page.svelte-tnj4oc>div.svelte-tnj4oc:empty{display:none}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const is404 = $page.status === 404;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `     ${$$result.head += `<!-- HEAD_svelte-gt14n0_START -->${$$result.title = `<title>${escape($page.status)}${escape($page.error ? ` ${$page.error.message}` : "")}</title>`, ""}<!-- HEAD_svelte-gt14n0_END -->`, ""}  <div class="error-page svelte-tnj4oc"><h1 class="text">${escape($page.status)}</h1> <div class="text svelte-tnj4oc">${escape($page.error ? $page.error.message : "")}</div> <p class="text">${escape(is404 ? "Redirecting you to the landing page..." : "Please tell the developer about this error.")}</p></div>`;
});
export {
  Error as default
};
