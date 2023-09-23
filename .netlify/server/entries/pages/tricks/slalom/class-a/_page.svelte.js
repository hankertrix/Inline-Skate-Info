import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { s as spinsTricksJson } from "../../../../../chunks/spins5.js";
import { T as TricksPage } from "../../../../../chunks/TricksPage.js";
import { w as wheelingsTricksJson } from "../../../../../chunks/wheelings5.js";
import { j as jumpsTricksJson } from "../../../../../chunks/jumps6.js";
import { s as sittingTricksJson } from "../../../../../chunks/sitting5.js";
import { o as othersTricksJson } from "../../../../../chunks/others5.js";
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
      title: "Class A Slalom Tricks",
      description: "The list of all class A slalom tricks",
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
