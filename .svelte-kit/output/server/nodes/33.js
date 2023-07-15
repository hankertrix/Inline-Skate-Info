import * as universal from '../entries/pages/search/_page.ts.js';

export const index = 33;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/search/+page.ts";
export const imports = ["_app/immutable/nodes/33.00234b1b.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.c5054f09.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/paths.30ace96b.js"];
export const stylesheets = ["_app/immutable/assets/33.3eafcfb2.css"];
export const fonts = [];
