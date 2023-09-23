import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { s as skateBrandsJson } from "../../../../chunks/skate-brands.js";
import { B as BrandsPage } from "../../../../chunks/BrandsPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(BrandsPage, "BrandsPage").$$render(
    $$result,
    {
      title: "Skate Brands",
      description: "The list of brands that specialise in making inline skates",
      brandsJson: skateBrandsJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  skateBrandsJson as brandsJson,
  Page as default
};
