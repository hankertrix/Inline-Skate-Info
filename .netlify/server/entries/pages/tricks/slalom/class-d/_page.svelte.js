import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { s as spinsTricksJson } from "../../../../../chunks/spins2.js";
import { T as TricksPage } from "../../../../../chunks/TricksPage.js";
import { w as wheelingsTricksJson } from "../../../../../chunks/wheelings2.js";
import { j as jumpsTricksJson } from "../../../../../chunks/jumps3.js";
import { s as sittingTricksJson } from "../../../../../chunks/sitting2.js";
import { o as othersTricksJson } from "../../../../../chunks/others2.js";
const tricksJson = {
  "Others": othersTricksJson,
  "Sitting": sittingTricksJson,
  "Jumps": jumpsTricksJson,
  "Wheelings": wheelingsTricksJson,
  "Spins": spinsTricksJson
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Class D Slalom Tricks",
      description: "The list of all class D slalom tricks",
      tricksJson,
      headingLevel: 2,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default,
  tricksJson
};
