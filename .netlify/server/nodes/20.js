

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/maintenance-items/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.1bd08dc8.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.fb1c355d.js","_app/immutable/chunks/maintenance-items.11c37fe0.js","_app/immutable/chunks/ProductsPage.fed393d5.js","_app/immutable/chunks/utils.70fc0ef2.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spread.84d39b6c.js"];
export const stylesheets = ["_app/immutable/assets/ProductsPage.fee4c18f.css"];
export const fonts = [];
