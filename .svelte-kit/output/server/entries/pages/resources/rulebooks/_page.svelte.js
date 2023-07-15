import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { L as ListsPage } from "../../../../chunks/ListsPage.js";
const heading = "Here are the official rulebooks for the various types of inline skating:";
const links = [];
const files = [
  "./static/pdfs/world-skate-inline-freestyle-rulebook-2020.pdf",
  "./static/pdfs/world-skate-aggressive-inline-skating-rulebook-2022.pdf",
  "./static/pdfs/world-skate-inline-speed-skating-rulebook-2022.pdf"
];
const listsJson = {
  heading,
  links,
  files
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `   ${validate_component(ListsPage, "ListsPage").$$render($$result, { title: "Rulebooks", listsJson }, {}, {})}`;
});
export {
  Page as default
};
