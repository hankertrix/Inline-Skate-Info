import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { L as ListsPage } from "../../../../chunks/ListsPage.js";
const heading = "Here are some guides to help you with maintaining your skates:";
const links = [
  [
    "Cleaning bearings (Inline Warehouse)",
    "https://youtu.be/iTb448Kq3fs"
  ],
  [
    "Cleaning bearings (Powerslide Inline Skates)",
    "https://youtu.be/B4TKr9zAUjc"
  ],
  [
    "Cleaning bearings (Back to Blading)",
    "https://youtu.be/ftBDpkIeBgM"
  ],
  [
    "Removing bearings (Tiago)",
    "https://youtu.be/SIBf_v-CLIk"
  ],
  [
    "Cleaning bearings (Tiago)",
    "https://youtu.be/foPrRcgtJf4"
  ],
  [
    "Cleaning bearings (Hockey Tutorial)",
    "https://youtu.be/KhRAXrMGzWY"
  ],
  [
    "Cleaning bearings (Top Puck)",
    "https://youtu.be/5aFOVREhrwM"
  ]
];
const files = [
  "./static/pdfs/skate-maintenance-guide.pdf"
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
      title: "Maintenance Guides",
      description: "The list of maintenance guides for you to peruse",
      listsJson
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
