import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { L as ListsPage } from "../../../../chunks/ListsPage.js";
const heading = "Here are some guides to help you with buying your first pair of skates:";
const links = [
  [
    "Reddit buyer's guide written by u/nashtanwl",
    "https://www.reddit.com/r/rollerblading/comments/v4al05/beginners_guide_to_skating_equipment/"
  ],
  [
    "Reddit r/rollerblading wiki's buyer's guide",
    "https://www.reddit.com/r/rollerblading/wiki/buyers_guide/"
  ]
];
const files = [
  "./static/pdfs/skate-buying-guide.pdf"
];
const listsJson = {
  heading,
  links,
  files
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `   ${validate_component(ListsPage, "ListsPage").$$render(
    $$result,
    {
      title: "Buying Guides",
      description: "The list of buying guides for you to peruse",
      listsJson
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
