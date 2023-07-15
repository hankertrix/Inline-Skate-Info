import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { f as family4TricksJson } from "../../../../../chunks/family-4.js";
import { T as TricksPage } from "../../../../../chunks/TricksPage.js";
import { f as family2TricksJson } from "../../../../../chunks/family-2.js";
import { f as family1TricksJson } from "../../../../../chunks/family-1.js";
const tricksJson = {
  "Family 1": family1TricksJson,
  "Family 2": family2TricksJson,
  "Family 4": family4TricksJson
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Class E Slides",
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
