import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { s as spinsTricksJson } from "../../../../../../chunks/spins8.js";
import { T as TricksPage } from "../../../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Spins, Class C Aggressive Tricks",
      tricksJson: spinsTricksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  spinsTricksJson as tricksJson
};
