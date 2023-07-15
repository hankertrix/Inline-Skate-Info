

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/brands/frame-brands/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.9ef63147.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.c5054f09.js","_app/immutable/chunks/frame-brands.9511a870.js","_app/immutable/chunks/BrandsPage.9d5ba148.js","_app/immutable/chunks/utils.70fc0ef2.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spread.84d39b6c.js"];
export const stylesheets = ["_app/immutable/assets/BrandsPage.b49e8ebe.css"];
export const fonts = [];
