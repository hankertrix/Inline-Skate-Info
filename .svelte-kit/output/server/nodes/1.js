

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6eb776a0.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.c5054f09.js","_app/immutable/chunks/navigation.f84541c1.js","_app/immutable/chunks/singletons.d7895f76.js","_app/immutable/chunks/paths.30ace96b.js"];
export const stylesheets = ["_app/immutable/assets/1.6cc01550.css"];
export const fonts = [];
