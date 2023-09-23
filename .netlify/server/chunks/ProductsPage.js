import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "./ssr.js";
import { m as makeUrlFriendlyString } from "./utils.js";
import { i as is_void } from "./names.js";
const ProductsSection_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".product.svelte-1kj84ib.svelte-1kj84ib{margin:3em 0}.product-category.svelte-1kj84ib.svelte-1kj84ib{margin:3em 0}.product-category.svelte-1kj84ib+.product-category.svelte-1kj84ib{margin:10em 0}",
  map: null
};
function isProductObject(obj) {
  return obj.hasOwnProperty("price") && obj.hasOwnProperty("link");
}
function castAsProductObject(obj) {
  return obj;
}
const ProductsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { productsJson } = $$props;
  let { headingLevel = 2 } = $$props;
  let { changeInHeadingLevel = 1 } = $$props;
  let { parentId = "" } = $$props;
  if ($$props.productsJson === void 0 && $$bindings.productsJson && productsJson !== void 0)
    $$bindings.productsJson(productsJson);
  if ($$props.headingLevel === void 0 && $$bindings.headingLevel && headingLevel !== void 0)
    $$bindings.headingLevel(headingLevel);
  if ($$props.changeInHeadingLevel === void 0 && $$bindings.changeInHeadingLevel && changeInHeadingLevel !== void 0)
    $$bindings.changeInHeadingLevel(changeInHeadingLevel);
  if ($$props.parentId === void 0 && $$bindings.parentId && parentId !== void 0)
    $$bindings.parentId(parentId);
  $$result.css.add(css$1);
  return `      ${each(Object.entries(productsJson), ([name, obj]) => {
    let urlFriendlyName = makeUrlFriendlyString(name), headingId = `${parentId ? `${parentId}-` : ""}${urlFriendlyName}`, heading = `h${headingLevel}`;
    return `       ${isProductObject(obj) ? (() => {
      let productObj = castAsProductObject(obj);
      return `  <section class="product svelte-1kj84ib">  ${((tag) => {
        return tag ? `<${heading}${add_attribute("id", headingId, 0)} class="text">${is_void(tag) ? "" : `<a${add_attribute("href", productObj.link, 0)} target="_blank" title="Visit the product page">${escape(name)} - ${escape(productObj.price)}</a>`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(heading)}</section> `;
    })() : `<section class="product-category svelte-1kj84ib"> ${((tag) => {
      return tag ? `<${heading}${add_attribute("id", headingId, 0)} class="text">${is_void(tag) ? "" : `${escape(name)}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(heading)} ${validate_component(ProductsSection, "svelte:self").$$render(
      $$result,
      {
        productsJson: obj,
        headingLevel: headingLevel + changeInHeadingLevel,
        changeInHeadingLevel,
        parentId: headingId
      },
      {},
      {}
    )} </section>`}`;
  })}`;
});
const ProductsPage_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1prrjsu{margin:var(--page-margin)}h1.svelte-1prrjsu{font-family:Oleo Script}div.svelte-1prrjsu{margin-bottom:5em}",
  map: null
};
const ProductsPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { productsJson } = $$props;
  let { headingLevel = 2 } = $$props;
  let { changeInHeadingLevel = 1 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.productsJson === void 0 && $$bindings.productsJson && productsJson !== void 0)
    $$bindings.productsJson(productsJson);
  if ($$props.headingLevel === void 0 && $$bindings.headingLevel && headingLevel !== void 0)
    $$bindings.headingLevel(headingLevel);
  if ($$props.changeInHeadingLevel === void 0 && $$bindings.changeInHeadingLevel && changeInHeadingLevel !== void 0)
    $$bindings.changeInHeadingLevel(changeInHeadingLevel);
  $$result.css.add(css);
  return `     ${$$result.head += `<!-- HEAD_svelte-1fgnt9u_START -->${$$result.title = `<title>${escape(title)} - Inline Skate Info</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><!-- HEAD_svelte-1fgnt9u_END -->`, ""}  <main class="svelte-1prrjsu"><header><h1 class="text svelte-1prrjsu"${add_attribute("id", makeUrlFriendlyString(title), 0)}>${escape(title)}</h1></header> <div class="svelte-1prrjsu">${validate_component(ProductsSection, "ProductsSection").$$render(
    $$result,
    {
      productsJson,
      headingLevel,
      changeInHeadingLevel
    },
    {},
    {}
  )}</div></main>`;
});
export {
  ProductsPage as P
};
