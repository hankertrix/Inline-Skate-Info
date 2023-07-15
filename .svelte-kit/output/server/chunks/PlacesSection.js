import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "./ssr.js";
import { i as is_void } from "./names.js";
import { m as makeUrlFriendlyString, t as titlecase } from "./utils.js";
const PlacesSection_svelte_svelte_type_style_lang = "";
const css = {
  code: ".place.svelte-16yzi12.svelte-16yzi12{margin-bottom:5em}.place-category.svelte-16yzi12.svelte-16yzi12{margin:3em 0}.place-category.svelte-16yzi12+.place-category.svelte-16yzi12{margin:10em 0}",
  map: null
};
const phoneNumRegex = /\+\d+ (?:\d+(?:[\- ]\b|\b)){2,}/g;
function castAsPlaceObject(obj) {
  return obj;
}
function createLinkForPhoneNum(str) {
  return str.replace(phoneNumRegex, (phoneNum) => `<a href="tel:${phoneNum}" target="_blank">${phoneNum}</a>`);
}
const PlacesSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { placesJson } = $$props;
  let { headingLevel = 2 } = $$props;
  let { changeInHeadingLevel = 1 } = $$props;
  let { parentId = "" } = $$props;
  const PLACE_ATTRIBUTES = [
    "address",
    "hours",
    "price",
    "phone",
    "email",
    "website",
    "mapLink",
    "description"
  ];
  function isPlaceObject(obj) {
    return Object.keys(obj).every((attribute) => PLACE_ATTRIBUTES.includes(attribute));
  }
  if ($$props.placesJson === void 0 && $$bindings.placesJson && placesJson !== void 0)
    $$bindings.placesJson(placesJson);
  if ($$props.headingLevel === void 0 && $$bindings.headingLevel && headingLevel !== void 0)
    $$bindings.headingLevel(headingLevel);
  if ($$props.changeInHeadingLevel === void 0 && $$bindings.changeInHeadingLevel && changeInHeadingLevel !== void 0)
    $$bindings.changeInHeadingLevel(changeInHeadingLevel);
  if ($$props.parentId === void 0 && $$bindings.parentId && parentId !== void 0)
    $$bindings.parentId(parentId);
  $$result.css.add(css);
  return `      ${each(Object.entries(placesJson), ([name, obj]) => {
    let urlFriendlyName = makeUrlFriendlyString(name), headingId = `${parentId ? `${parentId}-` : ""}${urlFriendlyName}`, heading = `h${headingLevel}`;
    return `       ${isPlaceObject(obj) ? (() => {
      let placeObj = castAsPlaceObject(obj);
      return `  <article class="place svelte-16yzi12"> ${"website" in placeObj ? ` ${((tag) => {
        return tag ? `<${heading}${add_attribute("id", urlFriendlyName, 0)} class="text">${is_void(tag) ? "" : `<a${add_attribute("href", placeObj.website, 0)} target="_blank" title="Visit the website">${escape(name)}</a>`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(heading)} ` : ` ${((tag) => {
        return tag ? `<${heading}${add_attribute("id", urlFriendlyName, 0)} class="text">${is_void(tag) ? "" : `${escape(name)}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(heading)}`} <section class="attributes"> ${each(Object.entries(placeObj), ([attribute, value]) => {
        let titleCasedAttribute = titlecase(attribute);
        return `   ${["website", "mapLink"].includes(attribute) ? ` ` : `${["email"].includes(attribute) ? ` <div class="text"><strong>${escape(titleCasedAttribute)}:</strong> <a${add_attribute("href", `mailto:${value}`, 0)} target="_blank"><!-- HTML_TAG_START -->${value}<!-- HTML_TAG_END --></a></div> ` : `${["phone"].includes(attribute) ? ` <div class="text"><strong>${escape(titleCasedAttribute)}:</strong> <!-- HTML_TAG_START -->${createLinkForPhoneNum(value)}<!-- HTML_TAG_END --></div> ` : `${["address"].includes(attribute) && "mapLink" in placeObj ? ` <div class="text"><strong>${escape(titleCasedAttribute)}:</strong> <a${add_attribute("href", placeObj.mapLink, 0)} target="_blank" title="View the address on Google Maps"><!-- HTML_TAG_START -->${value}<!-- HTML_TAG_END --></a></div> ` : ` <div class="text"><strong>${escape(titleCasedAttribute)}:</strong> <!-- HTML_TAG_START -->${value}<!-- HTML_TAG_END --> </div>`}`}`}`}`;
      })} </section></article> `;
    })() : `<section class="place-category svelte-16yzi12"> ${((tag) => {
      return tag ? `<${heading}${add_attribute("id", headingId, 0)} class="text">${is_void(tag) ? "" : `${escape(name)}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(heading)} ${validate_component(PlacesSection, "svelte:self").$$render(
      $$result,
      {
        placesJson: obj,
        headingLevel: headingLevel + changeInHeadingLevel,
        changeInHeadingLevel,
        parentId: headingId
      },
      {},
      {}
    )} </section>`}`;
  })}`;
});
export {
  PlacesSection as P
};
