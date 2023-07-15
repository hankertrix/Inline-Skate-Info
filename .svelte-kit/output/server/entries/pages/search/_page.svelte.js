import { c as create_ssr_component, b as add_attribute, d as escape, e as each, v as validate_component } from "../../../chunks/ssr.js";
const SearchResult_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".search-result.svelte-rosgof{display:flex;flex-direction:column;justify-content:center;align-items:left}.result-title.svelte-rosgof{font-size:20px}",
  map: null
};
const convertUrlRegex = /.*pages/;
function convertPagefindUrl(url) {
  return url.replace(convertUrlRegex, "");
}
const SearchResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { result } = $$props;
  if ($$props.result === void 0 && $$bindings.result && result !== void 0)
    $$bindings.result(result);
  $$result.css.add(css$1);
  return `     <section class="search-result svelte-rosgof"><a class="result-title svelte-rosgof"${add_attribute("href", convertPagefindUrl(result.url), 0)}>${escape(result.meta.title)}</a> <div class="result-excerpt text"><!-- HTML_TAG_START -->${result.excerpt}<!-- HTML_TAG_END --></div></section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".no-results.svelte-897mwi{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;font-size:18px}.results-wrapper.svelte-897mwi{margin:50px var(--page-left-right-margin)}.light .number-of-results.svelte-897mwi{--colour:#70757a;--opacity:1}.dark .number-of-results.svelte-897mwi{--colour:white;--opacity:calc(var(--text-opacity) - 0.2)}.number-of-results.svelte-897mwi{font-size:14px;color:var(--colour);opacity:var(--opacity);margin-bottom:15px}.search-results.svelte-897mwi{display:flex;flex-direction:column;justify-items:center;align-items:left;gap:20px}@media only screen and (max-width: 700px){.results-wrapper.svelte-897mwi{margin:15px var(--page-left-right-margin)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm;
  let results;
  let numberOfResults;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ searchTerm, results } = data);
  numberOfResults = results.length;
  return `      ${numberOfResults < 1 ? ` <main class="no-results svelte-897mwi"><p class="text">Sorry, there are no results found for &#39;${escape(searchTerm)}&#39;.
      <br>
      Perhaps try searching again with something else?</p> <a href="/" title="Return to the home page" data-svelte-h="svelte-ejk1fc">Return to the home page.</a></main> ` : `<main class="results-wrapper svelte-897mwi"> <section class="number-of-results svelte-897mwi">${escape(numberOfResults)} ${escape(numberOfResults > 1 ? "results" : "result")} found for &#39;${escape(searchTerm)}&#39;.</section>  <section class="search-results svelte-897mwi"> ${each(results, (result) => {
    return `${validate_component(SearchResult, "SearchResult").$$render($$result, { result }, {}, {})}`;
  })}</section></main>`}`;
});
export {
  Page as default
};
