import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { b as basicsTricksJson } from "../../../chunks/basics.js";
import { T as TricksPage } from "../../../chunks/TricksPage.js";
import { f as fundamentalsTricksJson } from "../../../chunks/fundamentals.js";
import { t as turnsTricksJson } from "../../../chunks/turns.js";
import { s as stopsTricksJson } from "../../../chunks/stops.js";
import { j as jumpsTricksJson } from "../../../chunks/jumps.js";
import { tricksJson } from "./slalom/_page.svelte.js";
import { tricksJson as tricksJson$1 } from "./slides/_page.svelte.js";
import { w as wizardTricksJson } from "../../../chunks/wizard.js";
import { m as miscTricksJson } from "../../../chunks/misc.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const tricksJson$2 = {
    "Basics": basicsTricksJson,
    "Fundamentals": fundamentalsTricksJson,
    "Turns": turnsTricksJson,
    "Stops": stopsTricksJson,
    "Jumps": jumpsTricksJson,
    "Slalom": tricksJson,
    "Slides": tricksJson$1,
    // Re-enable the aggressive tricks once the data for it is done
    // "Aggressive": aggressiveTricksJson,
    "Wizard": wizardTricksJson,
    "Misc": miscTricksJson
  };
  return `   ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Tricks",
      description: "The list of all inline skating tricks",
      tricksJson: tricksJson$2,
      headingLevel: 2,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
