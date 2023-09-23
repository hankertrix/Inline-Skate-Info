import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { tricksJson as tricksJson$5 } from "./class-e/_page.svelte.js";
import { tricksJson as tricksJson$4 } from "./class-d/_page.svelte.js";
import { tricksJson as tricksJson$3 } from "./class-c/_page.svelte.js";
import { tricksJson as tricksJson$2 } from "./class-b/_page.svelte.js";
import { tricksJson as tricksJson$1 } from "./class-a/_page.svelte.js";
import { T as TricksPage } from "../../../../chunks/TricksPage.js";
const tricksJson = {
  "Class A": tricksJson$1,
  "Class B": tricksJson$2,
  "Class C": tricksJson$3,
  "Class D": tricksJson$4,
  "Class E": tricksJson$5
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `    ${validate_component(TricksPage, "TricksPage").$$render(
    $$result,
    {
      title: "Slalom Tricks",
      description: "The list of all slalom tricks",
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
