import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { L as ListsPage } from "../../../../chunks/ListsPage.js";
const heading = "Here are a few trick lists for inline skating:";
const links = [
  [
    "SkaMiDan's Trick List of Inline Skating",
    "https://www.skamidan.com/skatetutorials/basic-knowledge-and-facts-about-inline-skating/skamidans-trick-list-of-inline-skating/?lang=en"
  ],
  [
    "SkaMiDan's Trick List of Freestyle Slalom Skating",
    "https://www.skamidan.com/skatetutorials/basic-knowledge-and-facts-about-freestyle-slalom-skating-rules-inline-freestyle-slalom/skamidans-trick-list-of-freestyle-slalom-skating/?lang=en"
  ],
  [
    "SkaMiDan's Trick List of Aggressive Inline Skating",
    "https://www.skamidan.com/skatetutorials/basic-knowledge-and-facts-about-aggressive-inline-skating-stunt-skating-park-skating/skamidans-trick-list-of-aggressive-inline-skating/?lang=en"
  ],
  [
    "Book of Grinds",
    "https://skateyeg.com/bog/"
  ],
  [
    "Toxboe.net Aggressive Trick Guide",
    "https://toxboe.net/tricks/"
  ],
  [
    "Encyclopedia of aggressive inline tricks",
    "https://tricks-encyclopedia.blogspot.com/"
  ],
  [
    "Freshie Slalom Move List",
    "https://docs.google.com/spreadsheets/d/1mlcrdTsm2diQmZmCiKyPAYYEiifcwMmYmDhykprUNHI/edit#gid=0"
  ],
  [
    "Freestyle slalom moves and levels",
    "https://pagophilia.com/slalom/freestyle-slalom-moves-and-levels/"
  ],
  [
    "Aprenda Slalom A-Z Trick List",
    "https://aprendaslalom.com.br/en/a-z/"
  ]
];
const files = [
  "./static/pdfs/world-skate-slalom-and-slides-trick-list.pdf"
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
      title: "Trick Lists",
      description: "The list of trick lists for you to peruse",
      listsJson
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
