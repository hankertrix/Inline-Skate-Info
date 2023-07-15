import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { f as frameBrandsJson } from "../../../../chunks/frame-brands.js";
import { B as BrandsPage } from "../../../../chunks/BrandsPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(BrandsPage, "BrandsPage").$$render(
    $$result,
    {
      title: "Frame Brands",
      brandsJson: frameBrandsJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  frameBrandsJson as brandsJson,
  Page as default
};
