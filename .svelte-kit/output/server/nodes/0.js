import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.9f9a2552.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.c5054f09.js","_app/immutable/chunks/singletons.d7895f76.js","_app/immutable/chunks/paths.30ace96b.js","_app/immutable/chunks/navigation.f84541c1.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/utils.70fc0ef2.js","_app/immutable/chunks/constants.cbd2ee80.js"];
export const stylesheets = ["_app/immutable/assets/0.9540ea84.css"];
export const fonts = [];
