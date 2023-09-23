import { c as create_ssr_component, d as escape, b as add_attribute, v as validate_component } from "./ssr.js";
import { m as makeUrlFriendlyString } from "./utils.js";
import { P as PlacesSection } from "./PlacesSection.js";
const PlacesPage_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-wxo21{margin:var(--page-margin)}h1.svelte-wxo21{font-family:Oleo Script}",
  map: null
};
const PlacesPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { placesJson } = $$props;
  let { headingLevel = 2 } = $$props;
  let { changeInHeadingLevel = 1 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.placesJson === void 0 && $$bindings.placesJson && placesJson !== void 0)
    $$bindings.placesJson(placesJson);
  if ($$props.headingLevel === void 0 && $$bindings.headingLevel && headingLevel !== void 0)
    $$bindings.headingLevel(headingLevel);
  if ($$props.changeInHeadingLevel === void 0 && $$bindings.changeInHeadingLevel && changeInHeadingLevel !== void 0)
    $$bindings.changeInHeadingLevel(changeInHeadingLevel);
  $$result.css.add(css);
  return `     ${$$result.head += `<!-- HEAD_svelte-1fgnt9u_START -->${$$result.title = `<title>${escape(title)} - Inline Skate Info</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><!-- HEAD_svelte-1fgnt9u_END -->`, ""}  <main class="svelte-wxo21"><header><h1 class="text svelte-wxo21"${add_attribute("id", makeUrlFriendlyString(title), 0)}>${escape(title)}</h1></header> <div>${validate_component(PlacesSection, "PlacesSection").$$render(
    $$result,
    {
      placesJson,
      headingLevel,
      changeInHeadingLevel
    },
    {},
    {}
  )}</div></main>`;
});
export {
  PlacesPage as P
};
