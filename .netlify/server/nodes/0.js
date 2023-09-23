import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.c38d6ce1.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.fb1c355d.js","_app/immutable/chunks/singletons.7a0c002a.js","_app/immutable/chunks/paths.e6cd41b7.js","_app/immutable/chunks/navigation.60b0d3cf.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/utils.70fc0ef2.js","_app/immutable/chunks/constants.90ae10fa.js"];
export const stylesheets = ["_app/immutable/assets/0.92fb06f5.css"];
export const fonts = [];
