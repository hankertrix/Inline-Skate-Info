import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "./ssr.js";
import { m as makeUrlFriendlyString } from "./utils.js";
import { i as is_void } from "./names.js";
const BrandsSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".brand.svelte-9ofpcj.svelte-9ofpcj{margin-bottom:5em}.brand-category.svelte-9ofpcj.svelte-9ofpcj{margin:3em 0}.brand-category.svelte-9ofpcj+.brand-category.svelte-9ofpcj{margin:10em 0}",
  map: null
};
function isBrandObject(obj) {
  return obj.hasOwnProperty("link") && obj.hasOwnProperty("description");
}
function castAsBrandObject(obj) {
  return obj;
}
const BrandsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { brandsJson } = $$props;
  let { headingLevel = 2 } = $$props;
  let { changeInHeadingLevel = 1 } = $$props;
  let { parentId = "" } = $$props;
  if ($$props.brandsJson === void 0 && $$bindings.brandsJson && brandsJson !== void 0)
    $$bindings.brandsJson(brandsJson);
  if ($$props.headingLevel === void 0 && $$bindings.headingLevel && headingLevel !== void 0)
    $$bindings.headingLevel(headingLevel);
  if ($$props.changeInHeadingLevel === void 0 && $$bindings.changeInHeadingLevel && changeInHeadingLevel !== void 0)
    $$bindings.changeInHeadingLevel(changeInHeadingLevel);
  if ($$props.parentId === void 0 && $$bindings.parentId && parentId !== void 0)
    $$bindings.parentId(parentId);
  $$result.css.add(css$1);
  return `      ${each(Object.entries(brandsJson), ([name, obj]) => {
    let urlFriendlyName = makeUrlFriendlyString(name), headingId = `${parentId ? `${parentId}-` : ""}${urlFriendlyName}`, heading = `h${headingLevel}`;
    return `       ${isBrandObject(obj) ? (() => {
      let brandObj = castAsBrandObject(obj);
      return `  <article class="brand svelte-9ofpcj">${((tag) => {
        return tag ? `<${heading}${add_attribute("id", urlFriendlyName, 0)} class="text">${is_void(tag) ? "" : `<a${add_attribute("href", brandObj.link, 0)} target="_blank" title="Visit the website">${escape(name)}</a>`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(heading)} <p class="text"><!-- HTML_TAG_START -->${brandObj.description}<!-- HTML_TAG_END --></p></article> `;
    })() : `<section class="brand-category svelte-9ofpcj"> ${((tag) => {
      return tag ? `<${heading}${add_attribute("id", urlFriendlyName, 0)} class="text">${is_void(tag) ? "" : `${escape(name)}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(heading)} ${validate_component(BrandsSection, "svelte:self").$$render(
      $$result,
      {
        brandsJson: obj,
        headingLevel: headingLevel + changeInHeadingLevel,
        changeInHeadingLevel,
        parentId: headingId
      },
      {},
      {}
    )} </section>`}`;
  })}`;
});
const BrandsPage_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-wxo21{margin:var(--page-margin)}h1.svelte-wxo21{font-family:Oleo Script}",
  map: null
};
const BrandsPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { brandsJson } = $$props;
  let { headingLevel = 2 } = $$props;
  let { changeInHeadingLevel = 1 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.brandsJson === void 0 && $$bindings.brandsJson && brandsJson !== void 0)
    $$bindings.brandsJson(brandsJson);
  if ($$props.headingLevel === void 0 && $$bindings.headingLevel && headingLevel !== void 0)
    $$bindings.headingLevel(headingLevel);
  if ($$props.changeInHeadingLevel === void 0 && $$bindings.changeInHeadingLevel && changeInHeadingLevel !== void 0)
    $$bindings.changeInHeadingLevel(changeInHeadingLevel);
  $$result.css.add(css);
  return `     ${$$result.head += `<!-- HEAD_svelte-1fgnt9u_START -->${$$result.title = `<title>${escape(title)} - Inline Skate Info</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><!-- HEAD_svelte-1fgnt9u_END -->`, ""}  <main class="svelte-wxo21"><header><h1 class="text svelte-wxo21"${add_attribute("id", makeUrlFriendlyString(title), 0)}>${escape(title)}</h1></header> <div>${validate_component(BrandsSection, "BrandsSection").$$render(
    $$result,
    {
      brandsJson,
      headingLevel,
      changeInHeadingLevel
    },
    {},
    {}
  )}</div></main>`;
});
export {
  BrandsPage as B
};
