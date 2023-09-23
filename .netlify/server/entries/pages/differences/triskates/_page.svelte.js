import { c as create_ssr_component, d as escape, b as add_attribute, e as each, v as validate_component } from "../../../../chunks/ssr.js";
import { m as makeUrlFriendlyString } from "../../../../chunks/utils.js";
import { V as VideoCollapsible } from "../../../../chunks/VideoCollapsible.js";
const characteristics = [
  "Triskates have 3 wheels",
  "Triskates have larger wheels than regular skates",
  "Triskates usually have a similar, if not the same wheelbase as a regular skate"
];
const advantages = [
  "Having larger wheels enable triskates to have a higher top speed. This is due to the wheels covering a greater distance for each revolution of the wheel due to its larger diameter.",
  "They also allow triskates to bank at a greater angle as you can bend the skates more without touching the ground",
  "Additionally, larger wheels also enable triskates to more easily roll over small debris, resulting in a smoother ride",
  "Since triskates only have 3 wheels, there is one less point of contact with the ground which makes them better at retaining speed due to having less friction with the ground",
  "Having 3 wheels also means you have 2 fewer wheels to maintain, one for each skate, so you can spend more time skating and less time maintaining your skates",
  "Triskates are easier to slide with due to them allowing for a greater banking angle and having less friction",
  "Triskates are also lighter than regular skates in spite of their larger wheels because they lose the weight of 1 spacer, 1 axle, 1 wheel and 2 bearings when losing 1 wheel on each skate. This allows triskates to have a greater top speed than regular skates."
];
const disadvantages = [
  "The larger wheels make it more difficult to accelerate as more torque is required to turn the wheels. You can reason about it using <code>torque = force x radius</code>. When the radius of the wheel increases, the torque required to turn the wheels increases.",
  "Having 3 wheels also causes triskates to be more difficult to accelerate. The reason is that skaters push their skates against the ground to gain speed, which means that friction is the primary force for the acceleration of the skate. A triskate having 3 wheels has fewer points of contact with the ground, which would mean less friction and hence less acceleration as <code>force = mass x acceleration</code>. This increases the difficulty of accelerating on a triskate.",
  "The larger wheels raise your centre of gravity which makes triskates more unstable than regular skates",
  "Larger wheels also tend to be more expensive than smaller ones, which makes triskates pricier than regular skates",
  "The space between the wheels in a triskate is also larger than on a regular skate, which makes it easier for triskates to get stuck when rolling down kerbs, bumps, and stairs",
  "The centre of a triskate is in the middle of a wheel, rather than being in a gap between two wheels, which makes it more unstable when going down kerbs, bumps, and stairs"
];
const articles = {
  "Inline Skate World": "https://inlineskateworld.com/3-wheel-inline-skates-3-versus-4-wheels-which-should-i-buy/",
  "Inline Warehouse": "https://www.inlinewarehouse.com/fitlc/brands/three-wheel-skates-tech-insight.html"
};
const videos = {
  "3 VS 4 WHEELS - EXPLAINED": "https://youtu.be/M9Xk6uTOgQA",
  "3 OR 4 WHEELS? Differences Explained // Inline Skating": "https://youtu.be/hJEab6YiliQ",
  "TRISKATES vs 4-WHEEL SKATES - Which Are Better?": "https://youtu.be/oVddde0VVXY",
  "3 vs 4 Wheel Inline Skates | Which is Right for You?": "https://youtu.be/J5zH7lVshK8",
  "Triskates, what's worst about 3-wheel inline skates ?": "https://youtu.be/U9REwi1t1C0",
  "4 vs 3 Wheeled Inline *Which Is Superior?": "https://youtu.be/RYxagD8o5Cc",
  "WHY TRISKATES? THE LATEST GENERATION INLINE SKATE": "https://youtu.be/hB44yOWbVmY",
  "Oxelo MF900 vs Oxelo MF500 | Triskates vs Four Wheeled Inline Skates | Detailed Comparison": "https://youtu.be/ipfngQqoncA",
  "Big vs Bigger Wheels | Inline Skating Thoughts": "https://youtu.be/vU8a-Agmn8c",
  "WHAT ARE THE FASTEST SKATES? 3, 4 OR 5 WHEELS?": "https://youtu.be/bxXf-lF3CX4",
  "3 wheels VS 4 wheels - inline skates experiment": "https://youtu.be/5ToU_ptm4FQ"
};
const triskateDiffJson = {
  characteristics,
  advantages,
  disadvantages,
  articles,
  videos
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-drwlah{margin:var(--page-margin)}h1.svelte-drwlah{font-family:Oleo Script}.characteristics.svelte-drwlah{margin:3em 0}.advantages.svelte-drwlah,.disadvantages.svelte-drwlah{margin:5em 0}.articles.svelte-drwlah{margin-top:8em;margin-bottom:5em}.article-links.svelte-drwlah{display:flex;flex-direction:column;gap:1em}.videos.svelte-drwlah{margin:5em 0}",
  map: null
};
const title = "Comparing Triskates With Regular 4-Wheeled Skates";
const characteristicsTitle = "Characteristics";
const advantagesTitle = "Advantages";
const disadvantagesTitle = "Disadvantages";
const articlesTitle = "Articles";
const videosTitle = "Videos";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `     ${$$result.head += `<!-- HEAD_svelte-n58x00_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description" content="Learn about the differences between regular 4-wheeled inline skates and triskates"><!-- HEAD_svelte-n58x00_END -->`, ""}  <main class="svelte-drwlah"><header><h1 class="text svelte-drwlah"${add_attribute("id", makeUrlFriendlyString(title), 0)}>${escape(title)}</h1></header> <section class="characteristics svelte-drwlah"><header><h2 class="text"${add_attribute("id", makeUrlFriendlyString(characteristicsTitle), 0)}>${escape(characteristicsTitle)}</h2></header>  <ul class="text"> ${each(triskateDiffJson.characteristics, (characteristic) => {
    return `<li>${escape(characteristic)}</li>`;
  })}</ul></section> <section class="advantages svelte-drwlah"><header><h2 class="text"${add_attribute("id", makeUrlFriendlyString(advantagesTitle), 0)}>${escape(advantagesTitle)}</h2></header>  <ul class="text"> ${each(triskateDiffJson.advantages, (advantage) => {
    return `<li>${escape(advantage)}</li>`;
  })}</ul></section> <section class="disadvantages svelte-drwlah"><header><h2 class="text"${add_attribute("id", makeUrlFriendlyString(disadvantagesTitle), 0)}>${escape(disadvantagesTitle)}</h2></header>  <ul class="text"> ${each(triskateDiffJson.disadvantages, (disadvantage) => {
    return `<li><!-- HTML_TAG_START -->${disadvantage}<!-- HTML_TAG_END --></li>`;
  })}</ul></section> <section class="articles svelte-drwlah"><header><h2 class="text"${add_attribute("id", makeUrlFriendlyString(articlesTitle), 0)}>${escape(articlesTitle)}</h2></header> <section class="article-links svelte-drwlah"> ${each(Object.entries(triskateDiffJson.articles), ([title2, url]) => {
    return `<a${add_attribute("href", url, 0)} target="_blank">${escape(title2)}</a>`;
  })}</section></section> <section class="videos svelte-drwlah"><header><h2 class="text"${add_attribute("id", makeUrlFriendlyString(videosTitle), 0)}>${escape(videosTitle)}</h2></header> ${validate_component(VideoCollapsible, "VideoCollapsible").$$render($$result, { videos: triskateDiffJson.videos }, {}, {})}</section></main>`;
});
export {
  Page as default
};
