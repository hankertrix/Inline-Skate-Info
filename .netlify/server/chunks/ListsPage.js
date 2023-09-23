import { c as create_ssr_component, d as escape, b as add_attribute, e as each } from "./ssr.js";
import { m as makeUrlFriendlyString, c as convertFilePathToUrl, g as getFilenameFromFilePath } from "./utils.js";
const ListsPage_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-zadhlh{margin:var(--page-margin)}h1.svelte-zadhlh{font-family:Oleo Script}p.svelte-zadhlh{font-size:20px}section.svelte-zadhlh{display:flex;flex-direction:column;gap:1em;margin-bottom:2em}",
  map: null
};
const ListsPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { listsJson } = $$props;
  const heading = listsJson.heading;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.listsJson === void 0 && $$bindings.listsJson && listsJson !== void 0)
    $$bindings.listsJson(listsJson);
  $$result.css.add(css);
  return `      ${$$result.head += `<!-- HEAD_svelte-1fgnt9u_START -->${$$result.title = `<title>${escape(title)} - Inline Skate Info</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><!-- HEAD_svelte-1fgnt9u_END -->`, ""}  <main class="svelte-zadhlh"><h1 class="text svelte-zadhlh"${add_attribute("id", makeUrlFriendlyString(title), 0)}>${escape(title)}</h1> <div><header> <p class="text svelte-zadhlh">${escape(heading)}</p></header>  ${listsJson.links.length > 0 ? (() => {
    let linksHeading = "Links";
    return `   <h3 class="text"${add_attribute("id", linksHeading, 0)}>${escape(linksHeading)}</h3> <section class="links svelte-zadhlh"> ${each(listsJson.links, ([title2, url]) => {
      return ` <a${add_attribute("href", url, 0)} target="_blank">${escape(title2 ? title2 : url)}</a>`;
    })}</section>`;
  })() : ``}  ${listsJson.files.length > 0 ? (() => {
    let filesHeading = "Files";
    return `   <h3 class="text"${add_attribute("id", makeUrlFriendlyString(filesHeading), 0)}>${escape(filesHeading)}</h3> <section class="files svelte-zadhlh"> ${each(listsJson.files, (file) => {
      return ` <a${add_attribute("href", convertFilePathToUrl(file), 0)} target="_blank">${escape(getFilenameFromFilePath(file))}</a>`;
    })}</section>`;
  })() : ``}</div></main>`;
});
export {
  ListsPage as L
};
