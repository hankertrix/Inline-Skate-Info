import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { r as retailersInSingaporeJson } from "../../../chunks/retailers-in-singapore.js";
import { P as PlacesPage } from "../../../chunks/PlacesPage.js";
import { o as onlineRetailersJson } from "../../../chunks/online-retailers.js";
import { o as overseasRetailersJson } from "../../../chunks/overseas-retailers.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const placesJson = {
    "Retailers In Singapore": retailersInSingaporeJson,
    "Online Retailers": onlineRetailersJson,
    "Overseas Retailers": overseasRetailersJson
  };
  return `   ${validate_component(PlacesPage, "PlacesPage").$$render(
    $$result,
    {
      title: "Retailers",
      description: "The list of retailers where you can buy inline skating products",
      placesJson,
      headingLevel: 2,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
