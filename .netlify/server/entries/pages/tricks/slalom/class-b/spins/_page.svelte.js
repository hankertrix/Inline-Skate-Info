import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { s as spinsTricksJson } from "../../../../../../chunks/spins4.js";
import { T as TricksPage } from "../../../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Spins, Class B Slalom Tricks",
      description: "The list of class B slalom tricks in the spins category",
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
