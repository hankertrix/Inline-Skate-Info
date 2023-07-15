import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { f as family3TricksJson } from "../../../../../../chunks/family-3.js";
import { T as TricksPage } from "../../../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Class B, Family 3 Slides",
      tricksJson: family3TricksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  family3TricksJson as tricksJson
};
