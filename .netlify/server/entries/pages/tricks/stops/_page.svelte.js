import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { s as stopsTricksJson } from "../../../../chunks/stops.js";
import { T as TricksPage } from "../../../../chunks/TricksPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Stops",
      description: "The list of inline skating stops",
      tricksJson: stopsTricksJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  stopsTricksJson as tricksJson
};
