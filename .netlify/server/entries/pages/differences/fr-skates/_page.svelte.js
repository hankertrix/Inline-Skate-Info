import { c as create_ssr_component, d as escape, b as add_attribute, e as each } from "../../../../chunks/ssr.js";
import { m as makeUrlFriendlyString } from "../../../../chunks/utils.js";
const similarities = [
  "All of them have a hard plastic shell.",
  "All of them have a removable liner.",
  "All of them feature a 165mm mounting system.",
  "All of them have a frame made of extruded aluminium.",
  "All of them have parts that are fully replaceable.",
  "All of them allow you to attach a brake.",
  "All of them have slide pads.",
  "All of them have insoles."
];
const differences = {
  "FRX (Base model)": [
    "It costs $265.",
    "It has a velcro power strap.",
    "It has a plastic top buckle.",
    "It comes with the FR X2R rockerable frames.",
    "It only has a single mounting hole at both mounting points.",
    "It has Street King wheels, which are the base-level wheels from FR.",
    "It has Twincam MW7 bearings."
  ],
  "FRW (Women's version of the FRX)": [
    "It is almost identical to the FRX.",
    "It costs $248, which makes it the cheapest and most affordable option.",
    "The liner is slightly narrower than the one on the FRX.",
    "There's a V-cut at the back of the liner to better accommodate a women's calves.",
    "It has a thinner velcro power strap than the one on the FRX.",
    "It comes with a brake preinstalled."
  ],
  "FR3 (1 tier above the FRX)": [
    "It costs $315.",
    "It has metal plates at both mounting points at the bottom of the skate, each having 7 mounting holes, which is unlike the single mounting hole on the FRX.",
    "The metal plates result in a greater energy transfer between your legs and the frame while also making the base of the skate stronger and more solid. They also provide more configuration options for mounting the frame onto the skate.",
    "It uses thicker bolts to mount the metal plates to the skate, which requires a tool that is slightly different from the one that comes with the skate, but you do get a stronger and more robust attachment.",
    "Instead of a velcro power strap, it has a plastic power strap with a metal ratcheting buckle."
  ],
  "FR2 (2 tiers above the FRX)": [
    "It costs $375.",
    "It has a plastic power strap that is wider and thicker than the one on the FR3. It also comes with a metal ratcheting buckle which has an FR logo on it and is bigger compared to the one on the FR3.",
    "It comes with a button cuff which makes it trivial to adjust the cuff's position.",
    "Like the FR3, it also has metal plates at both mounting points at the bottom of the skate.",
    "Unlike all of the previous models, the FR2 comes with the FR R2-R rockerable frames, which are the upgraded version of the FR X2R rockerable frames which are stronger and more rigid and hence perform better.",
    "It has Downtown wheels instead of Street King wheels, which are middle-level FR wheels.",
    "The 3x110mm version of the FR2 also has a longer, 246mm frame instead of the 231mm frame of the previous models. The longer frame is great for more stability and is better suited for longer rides."
  ],
  "FR1 (Top-of-the-line model, 3 tiers above the FRX)": [
    "It costs $455.",
    "It has the same plastic power strap that comes with a metal ratcheting buckle as the FR2. The buckle also has an FR logo on it.",
    "It also comes with the same button cuff that is on the FR2.",
    "It comes with FR 4D Flat Frames, which are stronger and sturdier than the frames on the FR2, but you lose the ability to rocker your skates.",
    "It comes with the best FR wheels, the Street Invader II wheels.",
    "It has a metal top buckle, which is an upgrade from the plastic top buckle on all of the other models.",
    "It has a shock absorber pad attached to the heel of the liner.",
    "It comes with a premium insole which is more comfortable.",
    "It comes with Twincam MW9 bearings, which are FR's top-level urban bearings, instead of the MW7 bearings that come with all of the other models. The MW9 bearings are built to withstand crazy amounts of force, which makes them more durable.",
    "It also comes with metal plates at both mounting points like the FR2 and the FR3.",
    "The 3x110mm version of the FR1 also comes with FR urban speed wheels, which are the best FR speed wheels.",
    "The 3x110mm version of the FR1 also comes with a shorter, 230mm frame."
  ]
};
const references = [
  "https://youtu.be/xv_8AwSKoww",
  "https://www.inlinex.com.sg/blogs/news/difference-between-fr1-fr2-fr3-and-frx",
  "https://youtu.be/je4NZ6YjEjY",
  "https://www.slickwillies.co.uk/blogs/news/fr-freeskate-range",
  "https://bladeville.com/blog/fr-skates-new-fr-line-models-for-2023-what-is-the-difference",
  "https://bladeville.com/blog/fr-skates-collection-2021"
];
const frDiffJson = {
  similarities,
  differences,
  references
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1k1ihnf{margin:var(--page-margin)}h1.svelte-1k1ihnf{font-family:Oleo Script}.similarities.svelte-1k1ihnf{margin:3em 0}.differences.svelte-1k1ihnf{margin:8em 0}.skate.svelte-1k1ihnf{margin-bottom:5em}.references.svelte-1k1ihnf{margin-bottom:5em}.reference-list.svelte-1k1ihnf{display:flex;flex-direction:column;gap:1em}",
  map: null
};
const title = "Differences Between The Various FR Skates";
const similaritiesHeading = "Similarities";
const differencesHeading = "Differences";
const referencesHeading = "References";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `     ${$$result.head += `<!-- HEAD_svelte-qw2q0z_START -->${$$result.title = `<title>${escape(title)} - Inline Skate Info</title>`, ""}<meta name="description" content="Learn about the differences between the various FR skates"><!-- HEAD_svelte-qw2q0z_END -->`, ""}  <main class="svelte-1k1ihnf"><header><h1 class="text svelte-1k1ihnf"${add_attribute("id", makeUrlFriendlyString(title), 0)}>${escape(title)}</h1></header> <section class="similarities svelte-1k1ihnf"><header><h2 class="text"${add_attribute("id", makeUrlFriendlyString(similaritiesHeading), 0)}>${escape(similaritiesHeading)}</h2></header>  <ul class="text"> ${each(frDiffJson.similarities, (similarity) => {
    return `<li>${escape(similarity)}</li>`;
  })}</ul></section> <section class="differences svelte-1k1ihnf"><header><h2 class="text"${add_attribute("id", makeUrlFriendlyString(differencesHeading), 0)}>${escape(differencesHeading)}</h2></header>  ${each(Object.entries(frDiffJson.differences), ([skate, differences2]) => {
    return `<section class="skate svelte-1k1ihnf"><header><h3 class="text"${add_attribute("id", makeUrlFriendlyString(skate), 0)}>${escape(skate)}</h3></header>  <ul class="text"> ${each(differences2, (difference) => {
      return `<li>${escape(difference)}</li>`;
    })}</ul> </section>`;
  })}</section> <section class="references svelte-1k1ihnf"><header><h2 class="text"${add_attribute("id", makeUrlFriendlyString(referencesHeading), 0)}>${escape(referencesHeading)}</h2></header> <section class="reference-list svelte-1k1ihnf"> ${each(frDiffJson.references, (reference) => {
    return `<a${add_attribute("href", reference, 0)} target="_blank">${escape(reference)}</a>`;
  })}</section></section></main>`;
});
export {
  Page as default
};
