import { c as create_ssr_component, d as escape, b as add_attribute, e as each } from "../../../../chunks/ssr.js";
import { m as makeUrlFriendlyString, t as titlecase } from "../../../../chunks/utils.js";
const bootTypes = {
  "Soft Boot": {
    characteristics: [
      "Soft boots are basically an over-glorified sock with skate hardware haphazardly slapped onto it",
      "They usually have plastic hardware",
      "They are difficult, if not impossible to customise as the only replaceable parts on some soft boot skates are the wheels",
      "It is difficult to find replacement parts for them as most of them are built to be 'disposable'."
    ],
    support: "1/5",
    comfort: "It starts out at a 4/5 at first, but eventually becomes a 1/5 as the skate gets older",
    pricing: "5/5. They are literally the cheapest skates on the market.",
    examples: [
      "Oxelo Fit 100 / Oxelo Fit 500",
      "Rollerblade Zetrablade / Rollerblade Macroblade",
      "Powerslide Phuzion series",
      "K2 F.I.T / K2 Alexis",
      "K2 V02"
    ]
  },
  "Hard Boot": {
    characteristics: [
      "Hard boots consist of a hard, plastic outer shell, a sponge or foam liner, and a metal frame",
      "They usually have metallic hardware and are hence more durable",
      "Customisation options are widely available across the market as the frames, wheels and liners can all be easily swapped out",
      "They usually use standard screw and wheel sizes, so the parts are easily replaceable"
    ],
    support: "3/5",
    comfort: "3-4/5. It depends on the liner, but the liner can be easily replaced as mentioned above.",
    pricing: "3.5/5. The prices vary from the cheapest hard boot skates from brands like Oxelo and Flying Eagle to the more premium skates from brands like Rollerblade and Powerslide. There is a hard boot for every price point. However, the more premium options typically offer greater comfort.",
    examples: [
      "Oxelo MF 500 / Oxelo MF 900",
      "Flying Eagle F series (F1 - F7)",
      "Powerslide Next series",
      "Rollerblade Twister series",
      "Seba E3 / Seba E3 Premium"
    ]
  },
  "PVC Leather / Carbon Skates": {
    characteristics: [
      "Leather and carbon skates are the most premium options available on the market. They consist of a foam liner stuffed between a breathable fabric interior and a stiff leather exterior.",
      "They have metallic hardware with either a plastic or carbon fibre base",
      "Skates with carbon fibre bases are lighter and more responsive but are also more expensive",
      "Like hard boot skates, parts are also standard and easily replaceable"
    ],
    support: "5/5",
    comfort: "4.5/5. Most leather and carbon skates are heat-moldable, which means they will mould to the shape of your feet after multiple uses. Hence, they will fit your feet like a glove. However, they might be uncomfortable initially as the boot itself is usually very stiff.",
    pricing: "1/5. They are literally the most expensive option available on the market. Leather skates are around $450, while carbon skates can come in at around $700 - $900.",
    examples: [
      "FR Spin",
      "FR Igor",
      "Seba Trix series",
      "Seba High Light series",
      "Ernsports ES One"
    ]
  }
};
const credits = "";
const data = {
  bootTypes,
  credits
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-s2cpfv.svelte-s2cpfv{margin:var(--page-margin)}h1.svelte-s2cpfv.svelte-s2cpfv{font-family:Oleo Script}.boot-type.svelte-s2cpfv.svelte-s2cpfv{margin:3em 0}.boot-type.svelte-s2cpfv+.boot-type.svelte-s2cpfv{margin:10em 0}.attribute.svelte-s2cpfv.svelte-s2cpfv{margin-bottom:3em}",
  map: null
};
const title = "Boot Types";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const bootTypesJson = data.bootTypes;
  $$result.css.add(css);
  return `     ${$$result.head += `<!-- HEAD_svelte-xrn44w_START -->${$$result.title = `<title>${escape(title)} - Inline Skate Info</title>`, ""}<meta name="description" content="Learn about the differences between the various inline skate boot types"><!-- HEAD_svelte-xrn44w_END -->`, ""}  <main class="svelte-s2cpfv"><header><h1 class="text svelte-s2cpfv"${add_attribute("id", makeUrlFriendlyString(title), 0)}>${escape(title)}</h1></header> <article> ${each(Object.entries(bootTypesJson), ([bootType, obj]) => {
    return `<section class="boot-type svelte-s2cpfv"><h2 class="text"${add_attribute("id", makeUrlFriendlyString(bootType), 0)}>${escape(bootType)}</h2>  ${each(Object.entries(obj), ([attribute, info]) => {
      return `<section class="attribute svelte-s2cpfv"><h4 class="text"${add_attribute("id", makeUrlFriendlyString(attribute), 0)}>${escape(titlecase(attribute))}</h4>  ${typeof info === "string" ? ` <p class="text">${escape(info)}</p> ` : ` <ul class="text"> ${each(info, (line) => {
        return `<li>${escape(line)}</li>`;
      })} </ul>`} </section>`;
    })} </section>`;
  })}</article></main>`;
});
export {
  Page as default
};
