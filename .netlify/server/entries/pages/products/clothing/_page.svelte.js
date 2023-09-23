import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { c as clothingJson } from "../../../../chunks/clothing.js";
import { P as ProductsPage } from "../../../../chunks/ProductsPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(ProductsPage, "ProductsPage").$$render(
    $$result,
    {
      title: "Clothing",
      description: "The list of clothing items that would be useful for inline skating",
      productsJson: clothingJson,
      headingLevel: 4,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  clothingJson as productsJson
};
