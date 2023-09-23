

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b89a6419.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.fb1c355d.js","_app/immutable/chunks/navigation.60b0d3cf.js","_app/immutable/chunks/singletons.7a0c002a.js","_app/immutable/chunks/paths.e6cd41b7.js"];
export const stylesheets = ["_app/immutable/assets/1.58da2d26.css"];
export const fonts = [];
