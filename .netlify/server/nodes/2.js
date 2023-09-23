

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.623d3f1d.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.fb1c355d.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/utils.70fc0ef2.js","_app/immutable/chunks/constants.90ae10fa.js"];
export const stylesheets = ["_app/immutable/assets/2.1e535d2f.css"];
export const fonts = [];
