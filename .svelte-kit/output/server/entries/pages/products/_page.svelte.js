import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { p as protectiveGearJson } from "../../../chunks/protective-gear.js";
import { P as ProductsPage } from "../../../chunks/ProductsPage.js";
import { a as accessoriesJson } from "../../../chunks/accessories.js";
import { m as maintenanceItemsJson } from "../../../chunks/maintenance-items.js";
import { c as clothingJson } from "../../../chunks/clothing.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const productsJson = {
    "Protective Gear": protectiveGearJson,
    "Accessories": accessoriesJson,
    "Maintenance Items": maintenanceItemsJson,
    "Clothing": clothingJson
  };
  return `   ${validate_component(ProductsPage, "ProductsPage").$$render(
    $$result,
    {
      title: "Products",
      productsJson,
      headingLevel: 2,
      changeInHeadingLevel: 2
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
