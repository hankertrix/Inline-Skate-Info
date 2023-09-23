import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { f as family5TricksJson } from "../../../../../chunks/family-5.js";
import { T as TricksPage } from "../../../../../chunks/TricksPage.js";
import { f as family4TricksJson } from "../../../../../chunks/family-42.js";
import { f as family2TricksJson } from "../../../../../chunks/family-22.js";
import { f as family1TricksJson } from "../../../../../chunks/family-12.js";
const tricksJson = {
  "Family 1": family1TricksJson,
  "Family 2": family2TricksJson,
  "Family 4": family4TricksJson,
  "Family 5": family5TricksJson
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Class D Slides",
      description: "The list of all class D slides",
      tricksJson,
      headingLevel: 2,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  tricksJson
};
