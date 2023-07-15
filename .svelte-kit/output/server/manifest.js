export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/mstile-150x150.png","favicons/safari-pinned-tab.svg","favicons/site.webmanifest","fonts/oleo-script-bold.ttf","fonts/oleo-script-bold.woff","fonts/oleo-script-bold.woff2","fonts/oleo-script-regular.ttf","fonts/oleo-script-regular.woff","fonts/oleo-script-regular.woff2","images/codeberg-logo.svg","images/github-invertocat-logo.svg","images/replit-logo.svg","images/slalom-skill-tree.png","images/telegram-logo.svg","pdfs/ernsports-discount-catalogue.pdf","pdfs/hvper-sport-discount-catalogue.pdf","pdfs/lets-skate-by-asha-kirkby-2017-version.pdf","pdfs/skate-buying-guide.pdf","pdfs/skate-maintenance-guide.pdf","pdfs/the-art-of-falling-by-naomi-grigg.pdf","pdfs/world-skate-aggressive-inline-skating-rulebook-2022.pdf","pdfs/world-skate-inline-freestyle-rulebook-2020.pdf","pdfs/world-skate-inline-speed-skating-rulebook-2022.pdf","pdfs/world-skate-slalom-and-slides-trick-list.pdf"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.6a743337.js","app":"_app/immutable/entry/app.341c47d8.js","imports":["_app/immutable/entry/start.6a743337.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/singletons.d7895f76.js","_app/immutable/chunks/paths.30ace96b.js","_app/immutable/entry/app.341c47d8.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.c5054f09.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/33.js'))
		],
		routes: [
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/telegram-hook",
				pattern: /^\/telegram-hook\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/telegram-hook/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
