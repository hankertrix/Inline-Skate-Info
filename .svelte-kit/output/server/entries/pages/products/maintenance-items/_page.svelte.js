import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { m as maintenanceItemsJson } from "../../../../chunks/maintenance-items.js";
import { P as ProductsPage } from "../../../../chunks/ProductsPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(ProductsPage, "ProductsPage").$$render(
    $$result,
    {
      title: "Maintenance Items",
      productsJson: maintenanceItemsJson,
      headingLevel: 4,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  maintenanceItemsJson as productsJson
};
