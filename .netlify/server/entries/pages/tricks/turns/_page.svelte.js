import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { t as turnsTricksJson } from "../../../../chunks/turns.js";
import { T as TricksPage } from "../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Turns",
      description: "The list of inline skating turns",
      tricksJson: turnsTricksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  turnsTricksJson as tricksJson
};
