

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/places-to-rent/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.4cb549ba.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.fb1c355d.js","_app/immutable/chunks/PlacesPage.b1d3f384.js","_app/immutable/chunks/utils.70fc0ef2.js","_app/immutable/chunks/PlacesSection.0cec01db.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spread.84d39b6c.js"];
export const stylesheets = ["_app/immutable/assets/PlacesPage.86fddd23.css","_app/immutable/assets/PlacesSection.a5a18852.css"];
export const fonts = [];
