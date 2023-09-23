import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { f as family1TricksJson } from "../../../../../../chunks/family-15.js";
import { T as TricksPage } from "../../../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Class A, Family 1 Slides",
      description: "The list of class A slides in family 1",
      tricksJson: family1TricksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  family1TricksJson as tricksJson
};
