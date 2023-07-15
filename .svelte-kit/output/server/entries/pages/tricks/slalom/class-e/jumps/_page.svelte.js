import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { j as jumpsTricksJson } from "../../../../../../chunks/jumps2.js";
import { T as TricksPage } from "../../../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Jumps, Class E Slalom Tricks",
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
