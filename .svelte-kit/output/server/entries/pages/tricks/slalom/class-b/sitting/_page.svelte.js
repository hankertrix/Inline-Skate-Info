import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { s as sittingTricksJson } from "../../../../../../chunks/sitting4.js";
import { T as TricksPage } from "../../../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Sitting, Class B Slalom Tricks",
      tricksJson: sittingTricksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  sittingTricksJson as tricksJson
};
