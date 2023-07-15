import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { w as wheelBrandsJson } from "../../../../chunks/wheel-brands.js";
import { B as BrandsPage } from "../../../../chunks/BrandsPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(BrandsPage, "BrandsPage").$$render(
    $$result,
    {
      title: "Wheel Brands",
      brandsJson: wheelBrandsJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  wheelBrandsJson as brandsJson,
  Page as default
};
