import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { l as linerBrandsJson } from "../../../../chunks/liner-brands.js";
import { B as BrandsPage } from "../../../../chunks/BrandsPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(BrandsPage, "BrandsPage").$$render(
    $$result,
    {
      title: "Liner Brands",
      description: "The list of brands that specialise in making liners for inline skates",
      brandsJson: linerBrandsJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  linerBrandsJson as brandsJson,
  Page as default
};
