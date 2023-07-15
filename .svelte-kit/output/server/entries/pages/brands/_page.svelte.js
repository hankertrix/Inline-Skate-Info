import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { s as skateBrandsJson } from "../../../chunks/skate-brands.js";
import { B as BrandsPage } from "../../../chunks/BrandsPage.js";
import { w as wheelBrandsJson } from "../../../chunks/wheel-brands.js";
import { f as frameBrandsJson } from "../../../chunks/frame-brands.js";
import { l as linerBrandsJson } from "../../../chunks/liner-brands.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const brandsJson = {
    "Skate Brands": skateBrandsJson,
    "Wheel Brands": wheelBrandsJson,
    "Frame Brands": frameBrandsJson,
    "Liner Brands": linerBrandsJson
  };
  return `   ${validate_component(BrandsPage, "BrandsPage").$$render(
    $$result,
    {
      title: "Brands",
      brandsJson,
      headingLevel: 2,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
