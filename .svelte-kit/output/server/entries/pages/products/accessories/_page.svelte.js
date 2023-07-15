import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { a as accessoriesJson } from "../../../../chunks/accessories.js";
import { P as ProductsPage } from "../../../../chunks/ProductsPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(ProductsPage, "ProductsPage").$$render(
    $$result,
    {
      title: "Accessories",
      productsJson: accessoriesJson,
      headingLevel: 4,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  accessoriesJson as productsJson
};
