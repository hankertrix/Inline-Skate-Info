import { c as create_ssr_component, d as escape, b as add_attribute, e as each, v as validate_component } from "../../../chunks/ssr.js";
import { t as titlecase, m as makeUrlFriendlyString, c as convertFilePathToUrl, g as getFilenameFromFilePath } from "../../../chunks/utils.js";
import { r as retailersInSingaporeJson } from "../../../chunks/retailers-in-singapore.js";
import { P as PlacesSection } from "../../../chunks/PlacesSection.js";
const title = "Information about the student discount";
const messageParts = [
  "You can only use the student discount at 3 skate shops, namely Hvper Sport / HiRoller, Ernsports, and Inlinex. Hvper Sport / HiRoller and Ernsports only have discounts for skates on their catalogue, while Inlinex provides a 15% discount on all non-discounted skates. To obtain the student discount, it's quite likely that simply telling the shops the name of your inline skating club president would be sufficient, but you should still ask your club's president for the exact details. For NUS skaters, you'll have to bring your NUS student card for verification.",
  "Before heading down to the shops to buy your skates, do call them to check if they have the skates in your size. For Inlinex, you can check the stock on their website before heading down.",
  "Here are the details of the 3 places:"
];
const pdfFiles = [
  "./static/pdfs/hvper-sport-discount-catalogue.pdf",
  "./static/pdfs/ernsports-discount-catalogue.pdf"
];
const listSlice = [
  0,
  4
];
const discountInfoJson = {
  title,
  messageParts,
  pdfFiles,
  listSlice
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1nql7cg{margin:var(--page-margin)}h1.svelte-1nql7cg{font-family:Oleo Script}.info.svelte-1nql7cg{font-size:18px;margin-bottom:2em}.places.svelte-1nql7cg{margin-bottom:10em}.catalogue.svelte-1nql7cg{margin-bottom:3em}.link-wrapper.svelte-1nql7cg{display:flex;flex-direction:column;gap:1em}",
  map: null
};
const catalogueHeading = "Catalogues";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const title2 = titlecase(discountInfoJson.title);
  const supportedRetailers = Object.fromEntries(Object.entries(retailersInSingaporeJson).slice(...discountInfoJson.listSlice));
  $$result.css.add(css);
  return `     ${$$result.head += `<!-- HEAD_svelte-ubuuwv_START -->${$$result.title = `<title>${escape(title2)} - Inline Skate Info</title>`, ""}<meta name="description" content="Details about the tertiary student discount for students studying in Singapore"><!-- HEAD_svelte-ubuuwv_END -->`, ""}  <main class="svelte-1nql7cg"><header><h1 class="text svelte-1nql7cg"${add_attribute("id", makeUrlFriendlyString(title2), 0)}>${escape(title2)}</h1></header> <section class="info svelte-1nql7cg"> ${each(discountInfoJson.messageParts, (messagePart) => {
    return ` <p class="text">${escape(messagePart)}</p>`;
  })}</section> <section class="places svelte-1nql7cg">${validate_component(PlacesSection, "PlacesSection").$$render(
    $$result,
    {
      placesJson: supportedRetailers,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}</section> <section class="catalogue svelte-1nql7cg"><header><h3 class="text"${add_attribute("id", makeUrlFriendlyString(catalogueHeading), 0)}>${escape(catalogueHeading)}</h3></header> <div class="link-wrapper svelte-1nql7cg"> ${each(discountInfoJson.pdfFiles, (file) => {
    return ` <a${add_attribute("href", convertFilePathToUrl(file), 0)} target="_blank" title="View the discounted skates">${escape(getFilenameFromFilePath(file))}</a>`;
  })}</div></section></main>`;
});
export {
  Page as default
};
