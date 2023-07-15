import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { s as skatingRinksJson } from "../../../../chunks/skating-rinks.js";
import { P as PlacesPage } from "../../../../chunks/PlacesPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(PlacesPage, "PlacesPage").$$render(
    $$result,
    {
      title: "Skating Rinks",
      placesJson: skatingRinksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  skatingRinksJson as placesJson
};
