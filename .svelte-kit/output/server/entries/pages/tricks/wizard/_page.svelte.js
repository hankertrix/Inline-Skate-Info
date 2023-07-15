import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { w as wizardTricksJson } from "../../../../chunks/wizard.js";
import { T as TricksPage } from "../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Wizard Tricks",
      tricksJson: wizardTricksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  wizardTricksJson as tricksJson
};
