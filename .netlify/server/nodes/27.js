

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resources/rulebooks/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/27.e7161669.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.fb1c355d.js","_app/immutable/chunks/ListsPage.95fa1736.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/utils.70fc0ef2.js"];
export const stylesheets = ["_app/immutable/assets/ListsPage.066136cc.css"];
export const fonts = [];
