import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { s as skatingRinksJson } from "../../../chunks/skating-rinks.js";
import { P as PlacesPage } from "../../../chunks/PlacesPage.js";
import { s as skateParksJson } from "../../../chunks/skate-parks.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const placesJson = {
    "Skating Rinks": skatingRinksJson,
    "Skate Parks": skateParksJson
  };
  return `   ${validate_component(PlacesPage, "PlacesPage").$$render(
    $$result,
    {
      title: "Places to Skate",
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
