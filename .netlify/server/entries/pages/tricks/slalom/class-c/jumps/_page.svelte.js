import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { j as jumpsTricksJson } from "../../../../../../chunks/jumps4.js";
import { T as TricksPage } from "../../../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Jumps, Class C Slalom Tricks",
      description: "The list of class C slalom tricks in the jumps category",
      tricksJson: jumpsTricksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  jumpsTricksJson as tricksJson
};
