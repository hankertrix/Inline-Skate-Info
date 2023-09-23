import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { s as spinsTricksJson } from "../../../../../chunks/spins.js";
import { T as TricksPage } from "../../../../../chunks/TricksPage.js";
import { w as wheelingsTricksJson } from "../../../../../chunks/wheelings.js";
import { j as jumpsTricksJson } from "../../../../../chunks/jumps2.js";
import { s as sittingTricksJson } from "../../../../../chunks/sitting.js";
import { o as othersTricksJson } from "../../../../../chunks/others.js";
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
      title: "Class E Slalom Tricks",
      description: "The list of all class E slalom tricks",
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
