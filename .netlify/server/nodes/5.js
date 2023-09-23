

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/brands/liner-brands/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.783e0b21.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.fb1c355d.js","_app/immutable/chunks/liner-brands.fb715feb.js","_app/immutable/chunks/BrandsPage.cd25757b.js","_app/immutable/chunks/utils.70fc0ef2.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spread.84d39b6c.js"];
export const stylesheets = ["_app/immutable/assets/BrandsPage.b49e8ebe.css"];
export const fonts = [];
