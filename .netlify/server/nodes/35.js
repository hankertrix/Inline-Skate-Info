

export const index = 35;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/terminology/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/35.6eecde22.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.fb1c355d.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/utils.70fc0ef2.js"];
export const stylesheets = ["_app/immutable/assets/35.2857fc25.css"];
export const fonts = [];
