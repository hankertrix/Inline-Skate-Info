import { c as create_ssr_component, b as add_attribute, d as escape, e as each } from "./ssr.js";
/* empty css                                                */const css = {
  code: "details.svelte-1n4gdgh.svelte-1n4gdgh{--collapsible-label-padding:1em}summary.svelte-1n4gdgh.svelte-1n4gdgh{display:flex;flex-direction:row;align-items:center;padding:var(--collapsible-label-padding);cursor:pointer;background-color:var(--accent-colour)}summary.svelte-1n4gdgh.svelte-1n4gdgh:hover{background-color:var(--accent-hover-colour)}.icon-wrapper.svelte-1n4gdgh.svelte-1n4gdgh{flex:1;display:flex;align-items:center;justify-content:end}.plus-icon.svelte-1n4gdgh.svelte-1n4gdgh{--icon-size:1.2em;--icon-margin:0.25em;--bar-width:0.25em;position:relative;width:var(--icon-size);height:var(--icon-size);justify-self:end;margin-right:var(--icon-margin);margin-bottom:var(--icon-margin)}.vertical-bar.svelte-1n4gdgh.svelte-1n4gdgh{top:0;left:50%;width:var(--bar-width);height:100%;margin-top:2px}.horizontal-bar.svelte-1n4gdgh.svelte-1n4gdgh{top:50%;left:0;height:var(--bar-width);width:100%;margin-left:2px}.vertical-bar.svelte-1n4gdgh.svelte-1n4gdgh,.horizontal-bar.svelte-1n4gdgh.svelte-1n4gdgh{position:absolute;background-color:var(--icon-colour);transition:rotate var(--animation-timing)}.video-collapsible.svelte-1n4gdgh.svelte-1n4gdgh{padding:0 var(--collapsible-label-padding);background-color:var(--collapsible-background-colour)}iframe.svelte-1n4gdgh.svelte-1n4gdgh{width:100%;height:100%;aspect-ratio:16/9;margin:2em 0}details[open].svelte-1n4gdgh>summary.svelte-1n4gdgh{background-color:var(--accent-active-colour)}details[open].svelte-1n4gdgh .vertical-bar.svelte-1n4gdgh{rotate:90deg}details[open].svelte-1n4gdgh .horizontal-bar.svelte-1n4gdgh{rotate:180deg}@media only screen and (max-width: 700px){iframe.svelte-1n4gdgh.svelte-1n4gdgh{margin:1.25em 0}}",
  map: null
};
const youtubeIdRegex = /^.*\/(?:watch\?v=)?|[?&].+$/g;
const youtubeTimestampRegex = /^.*t=|s+$/g;
function getYoutubeId(youtubeVideoUrl) {
  return youtubeVideoUrl.replace(youtubeIdRegex, "").trim();
}
function getYoutubeTimestamp(youtubeVideoUrl) {
  const timestampString = youtubeVideoUrl.replace(youtubeTimestampRegex, "").trim();
  return timestampString === "" ? 0 : parseInt(timestampString);
}
const VideoCollapsible = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { videos } = $$props;
  let { title = "View the videos" } = $$props;
  const listOfVideos = Array.isArray(videos) ? videos : Object.entries(videos);
  if ($$props.videos === void 0 && $$bindings.videos && videos !== void 0)
    $$bindings.videos(videos);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `     <details class="svelte-1n4gdgh"><summary${add_attribute("title", title, 0)} class="svelte-1n4gdgh"><div class="text">${escape(listOfVideos.length)} videos</div> <div class="icon-wrapper svelte-1n4gdgh" data-svelte-h="svelte-1vgq928"><div class="plus-icon svelte-1n4gdgh"><div class="vertical-bar svelte-1n4gdgh"></div> <div class="horizontal-bar svelte-1n4gdgh"></div></div></div></summary> <section class="video-collapsible svelte-1n4gdgh"> ${each(listOfVideos, ([videoInfo, url]) => {
    let youtubeId = getYoutubeId(url), youtubeTimestamp = getYoutubeTimestamp(url);
    return `   <iframe${add_attribute("data-src", `https://www.youtube-nocookie.com/embed/${youtubeId}?start=${youtubeTimestamp}`, 0)} src=""${add_attribute("title", videoInfo, 0)} frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen class="svelte-1n4gdgh"><a${add_attribute("href", url, 0)} target="_blank"${add_attribute("title", videoInfo, 0)}>${escape(videoInfo)}</a> </iframe>`;
  })}</section></details>`;
});
export {
  VideoCollapsible as V
};
