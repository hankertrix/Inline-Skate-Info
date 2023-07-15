import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "./ssr.js";
import { m as makeUrlFriendlyString } from "./utils.js";
import { i as is_void } from "./names.js";
import { V as VideoCollapsible } from "./VideoCollapsible.js";
/* empty css                                          */const css$1 = {
  code: ".trick.svelte-1256lun.svelte-1256lun{margin-bottom:5em}.trick-category.svelte-1256lun.svelte-1256lun{margin:3em 0}.trick-category.svelte-1256lun+.trick-category.svelte-1256lun{margin:10em 0}",
  map: null
};
function isTrickObject(obj) {
  return obj.hasOwnProperty("description") && obj.hasOwnProperty("videos");
}
function castAsTrickObj(obj) {
  return obj;
}
const TricksSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tricksJson } = $$props;
  let { headingLevel = 2 } = $$props;
  let { changeInHeadingLevel = 1 } = $$props;
  let { parentId = "" } = $$props;
  if ($$props.tricksJson === void 0 && $$bindings.tricksJson && tricksJson !== void 0)
    $$bindings.tricksJson(tricksJson);
  if ($$props.headingLevel === void 0 && $$bindings.headingLevel && headingLevel !== void 0)
    $$bindings.headingLevel(headingLevel);
  if ($$props.changeInHeadingLevel === void 0 && $$bindings.changeInHeadingLevel && changeInHeadingLevel !== void 0)
    $$bindings.changeInHeadingLevel(changeInHeadingLevel);
  if ($$props.parentId === void 0 && $$bindings.parentId && parentId !== void 0)
    $$bindings.parentId(parentId);
  $$result.css.add(css$1);
  return `      ${each(Object.entries(tricksJson), ([name, obj]) => {
    let urlFriendlyName = makeUrlFriendlyString(name), headingId = `${parentId ? `${parentId}-` : ""}${urlFriendlyName}`, heading = `h${headingLevel}`;
    return `       ${isTrickObject(obj) ? (() => {
      let { description, videos } = castAsTrickObj(obj);
      return `  <article class="trick svelte-1256lun"> ${((tag) => {
        return tag ? `<${heading}${add_attribute("id", headingId, 0)} class="text">${is_void(tag) ? "" : `${escape(name)}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(heading)}  <p class="text"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p>  ${validate_component(VideoCollapsible, "VideoCollapsible").$$render(
        $$result,
        {
          videos,
          title: "View the videos for the trick"
        },
        {},
        {}
      )}</article> `;
    })() : `<section class="trick-category svelte-1256lun"> ${((tag) => {
      return tag ? `<${heading}${add_attribute("id", headingId, 0)} class="text">${is_void(tag) ? "" : `${escape(name)}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(heading)} ${validate_component(TricksSection, "svelte:self").$$render(
      $$result,
      {
        tricksJson: obj,
        headingLevel: headingLevel + changeInHeadingLevel,
        changeInHeadingLevel,
        parentId: headingId
      },
      {},
      {}
    )} </section>`}`;
  })}`;
});
const css = {
  code: "main.svelte-1162bjs{margin:var(--page-margin);width:100%}h1.svelte-1162bjs{font-family:Oleo Script}",
  map: null
};
const TricksPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { tricksJson } = $$props;
  let { headingLevel = 2 } = $$props;
  let { changeInHeadingLevel = 1 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.tricksJson === void 0 && $$bindings.tricksJson && tricksJson !== void 0)
    $$bindings.tricksJson(tricksJson);
  if ($$props.headingLevel === void 0 && $$bindings.headingLevel && headingLevel !== void 0)
    $$bindings.headingLevel(headingLevel);
  if ($$props.changeInHeadingLevel === void 0 && $$bindings.changeInHeadingLevel && changeInHeadingLevel !== void 0)
    $$bindings.changeInHeadingLevel(changeInHeadingLevel);
  $$result.css.add(css);
  return `     ${$$result.head += `<!-- HEAD_svelte-1n1sarj_START -->${$$result.title = `<title>${escape(title)} - Inline Skate Info</title>`, ""}<!-- HEAD_svelte-1n1sarj_END -->`, ""}  <main class="svelte-1162bjs"><header><h1 class="text svelte-1162bjs"${add_attribute("id", makeUrlFriendlyString(title), 0)}>${escape(title)}</h1></header> <div>${validate_component(TricksSection, "TricksSection").$$render(
    $$result,
    {
      tricksJson,
      headingLevel,
      changeInHeadingLevel
    },
    {},
    {}
  )}</div></main>`;
});
export {
  TricksPage as T
};
