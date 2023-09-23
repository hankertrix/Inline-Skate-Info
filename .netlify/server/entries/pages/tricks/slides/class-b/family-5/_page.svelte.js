import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { f as family5TricksJson } from "../../../../../../chunks/family-53.js";
import { T as TricksPage } from "../../../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Class B, Family 5 Slides",
      description: "The list of class B slides in family 5",
      tricksJson: family5TricksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  family5TricksJson as tricksJson
};
