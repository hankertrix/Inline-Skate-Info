import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { L as ListsPage } from "../../../../chunks/ListsPage.js";
const heading = "Here is a list of glossaries for you to peruse:";
const links = [
  [
    "Toxboe.net dictionary of inline skating terms",
    "https://toxboe.net/all/1997-aggressive-inline-skating-dictionary"
  ],
  [
    "Amanda Lane's list of aggressive inline skating terms",
    "https://www.angelfire.com/home/amandalane/sports/aggressiveinline/terms.html"
  ],
  [
    "How to speak skate!",
    "https://cibcrew.com/blogs/tips/skatepark-language"
  ],
  [
    "Roller Skate Nation's glossary of skating",
    "https://rollerskatenation.com/glossary-of-skating/"
  ],
  [
    "Figure skating glossary by myinlineskating.com",
    "https://www.myinlineskating.com/glossary"
  ]
];
const files = [];
const listsJson = {
  heading,
  links,
  files
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `   ${validate_component(ListsPage, "ListsPage").$$render(
    $$result,
    {
      title: "Glossaries",
      description: "The list of glossaries for you to peruse",
      listsJson
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
