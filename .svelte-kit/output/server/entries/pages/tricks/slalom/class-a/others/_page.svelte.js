import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { o as othersTricksJson } from "../../../../../../chunks/others5.js";
import { T as TricksPage } from "../../../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Others, Class A Slalom Tricks",
      tricksJson: othersTricksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  othersTricksJson as tricksJson
};
