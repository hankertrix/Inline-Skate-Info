import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { f as family4TricksJson } from "../../../../../../chunks/family-45.js";
import { T as TricksPage } from "../../../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Class A, Family 4 Slides",
      description: "The list of class A slides in family 4",
      tricksJson: family4TricksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  family4TricksJson as tricksJson
};
