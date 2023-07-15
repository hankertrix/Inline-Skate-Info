import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { L as ListsPage } from "../../../../chunks/ListsPage.js";
const heading = "Here is a list of miscellaneous resources that you can check out:";
const links = [
  [
    "Roller School iOS App (Paid)",
    "https://apps.apple.com/us/app/rollerschool/id962573665"
  ],
  [
    "Roller School Android App (Paid)",
    "https://play.google.com/store/apps/details?id=dv.rollerschool"
  ]
];
const files = [
  "./static/pdfs/the-art-of-falling-by-naomi-grigg.pdf",
  "./static/pdfs/lets-skate-by-asha-kirkby-2017-version.pdf",
  "./static/images/slalom-skill-tree.png"
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
      title: "Miscellaneous Resources",
      listsJson
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
