import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { p as protectiveGearJson } from "../../../../chunks/protective-gear.js";
import { P as ProductsPage } from "../../../../chunks/ProductsPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(ProductsPage, "ProductsPage").$$render(
    $$result,
    {
      title: "Protective Gear",
      productsJson: protectiveGearJson,
      headingLevel: 4,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  protectiveGearJson as productsJson
};
