import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { o as onlineRetailersJson } from "../../../../chunks/online-retailers.js";
import { P as PlacesPage } from "../../../../chunks/PlacesPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(PlacesPage, "PlacesPage").$$render(
    $$result,
    {
      title: "Online Retailers",
      placesJson: onlineRetailersJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  onlineRetailersJson as placesJson
};
