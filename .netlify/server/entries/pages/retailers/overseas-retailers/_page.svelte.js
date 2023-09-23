import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { o as overseasRetailersJson } from "../../../../chunks/overseas-retailers.js";
import { P as PlacesPage } from "../../../../chunks/PlacesPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(PlacesPage, "PlacesPage").$$render(
    $$result,
    {
      title: "Overseas Retailers",
      description: "The list of overseas retailers where you can buy inline skating products",
      placesJson: overseasRetailersJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  overseasRetailersJson as placesJson
};
