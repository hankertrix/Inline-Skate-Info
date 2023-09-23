

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/brands/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4e13b3ac.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.fb1c355d.js","_app/immutable/chunks/skate-brands.398e737f.js","_app/immutable/chunks/BrandsPage.cd25757b.js","_app/immutable/chunks/utils.70fc0ef2.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spread.84d39b6c.js","_app/immutable/chunks/wheel-brands.9f9b15d2.js","_app/immutable/chunks/frame-brands.9511a870.js","_app/immutable/chunks/liner-brands.fb715feb.js"];
export const stylesheets = ["_app/immutable/assets/BrandsPage.b49e8ebe.css"];
export const fonts = [];
