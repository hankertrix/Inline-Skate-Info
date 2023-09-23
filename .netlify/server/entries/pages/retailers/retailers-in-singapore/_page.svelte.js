import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { r as retailersInSingaporeJson } from "../../../../chunks/retailers-in-singapore.js";
import { P as PlacesPage } from "../../../../chunks/PlacesPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(PlacesPage, "PlacesPage").$$render(
    $$result,
    {
      title: "Retailers In Singapore",
      description: "The list of retailers in Singapore where you can buy inline skating products",
      placesJson: retailersInSingaporeJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  retailersInSingaporeJson as placesJson
};
