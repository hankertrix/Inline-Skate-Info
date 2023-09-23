import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { f as family2TricksJson } from "../../../../../../chunks/family-2.js";
import { T as TricksPage } from "../../../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Class E, Family 2 Slides",
      description: "The list of class E slides in family 2",
      tricksJson: family2TricksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  family2TricksJson as tricksJson
};
