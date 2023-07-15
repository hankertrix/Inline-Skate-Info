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
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/28.js')),
			__memo(() => import('./nodes/29.js')),
			__memo(() => import('./nodes/30.js')),
			__memo(() => import('./nodes/31.js')),
			__memo(() => import('./nodes/32.js')),
			__memo(() => import('./nodes/33.js')),
			__memo(() => import('./nodes/34.js')),
			__memo(() => import('./nodes/35.js')),
			__memo(() => import('./nodes/36.js')),
			__memo(() => import('./nodes/37.js')),
			__memo(() => import('./nodes/38.js')),
			__memo(() => import('./nodes/39.js')),
			__memo(() => import('./nodes/40.js')),
			__memo(() => import('./nodes/41.js')),
			__memo(() => import('./nodes/42.js')),
			__memo(() => import('./nodes/43.js')),
			__memo(() => import('./nodes/44.js')),
			__memo(() => import('./nodes/45.js')),
			__memo(() => import('./nodes/46.js')),
			__memo(() => import('./nodes/47.js')),
			__memo(() => import('./nodes/48.js')),
			__memo(() => import('./nodes/49.js')),
			__memo(() => import('./nodes/50.js')),
			__memo(() => import('./nodes/51.js')),
			__memo(() => import('./nodes/52.js')),
			__memo(() => import('./nodes/53.js')),
			__memo(() => import('./nodes/54.js')),
			__memo(() => import('./nodes/55.js')),
			__memo(() => import('./nodes/56.js')),
			__memo(() => import('./nodes/57.js')),
			__memo(() => import('./nodes/58.js')),
			__memo(() => import('./nodes/59.js')),
			__memo(() => import('./nodes/60.js')),
			__memo(() => import('./nodes/61.js')),
			__memo(() => import('./nodes/62.js')),
			__memo(() => import('./nodes/63.js')),
			__memo(() => import('./nodes/64.js')),
			__memo(() => import('./nodes/65.js')),
			__memo(() => import('./nodes/66.js')),
			__memo(() => import('./nodes/67.js')),
			__memo(() => import('./nodes/68.js')),
			__memo(() => import('./nodes/69.js')),
			__memo(() => import('./nodes/70.js')),
			__memo(() => import('./nodes/71.js')),
			__memo(() => import('./nodes/72.js')),
			__memo(() => import('./nodes/73.js')),
			__memo(() => import('./nodes/74.js')),
			__memo(() => import('./nodes/75.js')),
			__memo(() => import('./nodes/76.js')),
			__memo(() => import('./nodes/77.js')),
			__memo(() => import('./nodes/78.js')),
			__memo(() => import('./nodes/79.js')),
			__memo(() => import('./nodes/80.js')),
			__memo(() => import('./nodes/81.js')),
			__memo(() => import('./nodes/82.js')),
			__memo(() => import('./nodes/83.js')),
			__memo(() => import('./nodes/84.js')),
			__memo(() => import('./nodes/85.js')),
			__memo(() => import('./nodes/86.js')),
			__memo(() => import('./nodes/87.js')),
			__memo(() => import('./nodes/88.js')),
			__memo(() => import('./nodes/89.js')),
			__memo(() => import('./nodes/90.js')),
			__memo(() => import('./nodes/91.js')),
			__memo(() => import('./nodes/92.js')),
			__memo(() => import('./nodes/93.js')),
			__memo(() => import('./nodes/94.js')),
			__memo(() => import('./nodes/95.js')),
			__memo(() => import('./nodes/96.js')),
			__memo(() => import('./nodes/97.js')),
			__memo(() => import('./nodes/98.js')),
			__memo(() => import('./nodes/99.js')),
			__memo(() => import('./nodes/100.js')),
			__memo(() => import('./nodes/101.js')),
			__memo(() => import('./nodes/102.js')),
			__memo(() => import('./nodes/103.js')),
			__memo(() => import('./nodes/104.js')),
			__memo(() => import('./nodes/105.js')),
			__memo(() => import('./nodes/106.js')),
			__memo(() => import('./nodes/107.js')),
			__memo(() => import('./nodes/108.js')),
			__memo(() => import('./nodes/109.js')),
			__memo(() => import('./nodes/110.js')),
			__memo(() => import('./nodes/111.js')),
			__memo(() => import('./nodes/112.js')),
			__memo(() => import('./nodes/113.js')),
			__memo(() => import('./nodes/114.js')),
			__memo(() => import('./nodes/115.js')),
			__memo(() => import('./nodes/116.js')),
			__memo(() => import('./nodes/117.js')),
			__memo(() => import('./nodes/118.js')),
			__memo(() => import('./nodes/119.js')),
			__memo(() => import('./nodes/120.js')),
			__memo(() => import('./nodes/121.js')),
			__memo(() => import('./nodes/122.js')),
			__memo(() => import('./nodes/123.js')),
			__memo(() => import('./nodes/124.js')),
			__memo(() => import('./nodes/125.js')),
			__memo(() => import('./nodes/126.js')),
			__memo(() => import('./nodes/127.js')),
			__memo(() => import('./nodes/128.js')),
			__memo(() => import('./nodes/129.js')),
			__memo(() => import('./nodes/130.js')),
			__memo(() => import('./nodes/131.js')),
			__memo(() => import('./nodes/132.js')),
			__memo(() => import('./nodes/133.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/brands",
				pattern: /^\/brands\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/brands/frame-brands",
				pattern: /^\/brands\/frame-brands\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/brands/liner-brands",
				pattern: /^\/brands\/liner-brands\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/brands/skate-brands",
				pattern: /^\/brands\/skate-brands\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/brands/wheel-brands",
				pattern: /^\/brands\/wheel-brands\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/differences",
				pattern: /^\/differences\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/differences/boot-types",
				pattern: /^\/differences\/boot-types\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/differences/fr-skates",
				pattern: /^\/differences\/fr-skates\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/differences/triskates",
				pattern: /^\/differences\/triskates\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/discount-information",
				pattern: /^\/discount-information\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/places-to-rent",
				pattern: /^\/places-to-rent\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/places-to-skate",
				pattern: /^\/places-to-skate\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/places-to-skate/skate-parks",
				pattern: /^\/places-to-skate\/skate-parks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/places-to-skate/skating-rinks",
				pattern: /^\/places-to-skate\/skating-rinks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/products/accessories",
				pattern: /^\/products\/accessories\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/products/clothing",
				pattern: /^\/products\/clothing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/products/maintenance-items",
				pattern: /^\/products\/maintenance-items\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/products/protective-gear",
				pattern: /^\/products\/protective-gear\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/resources",
				pattern: /^\/resources\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/resources/buying-guides",
				pattern: /^\/resources\/buying-guides\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/resources/glossaries",
				pattern: /^\/resources\/glossaries\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/resources/maintenance-guides",
				pattern: /^\/resources\/maintenance-guides\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/resources/misc",
				pattern: /^\/resources\/misc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/resources/rulebooks",
				pattern: /^\/resources\/rulebooks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/resources/trick-lists",
				pattern: /^\/resources\/trick-lists\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/retailers",
				pattern: /^\/retailers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/retailers/online-retailers",
				pattern: /^\/retailers\/online-retailers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/retailers/overseas-retailers",
				pattern: /^\/retailers\/overseas-retailers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/retailers/retailers-in-singapore",
				pattern: /^\/retailers\/retailers-in-singapore\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/skate-recommendations",
				pattern: /^\/skate-recommendations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/telegram-hook",
				pattern: /^\/telegram-hook\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/telegram-hook/_server.ts.js'))
			},
			{
				id: "/terminology",
				pattern: /^\/terminology\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/tricks",
				pattern: /^\/tricks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive",
				pattern: /^\/tricks\/aggressive\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/basics",
				pattern: /^\/tricks\/aggressive\/basics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-a",
				pattern: /^\/tricks\/aggressive\/class-a\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-a/others",
				pattern: /^\/tricks\/aggressive\/class-a\/others\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-a/spins",
				pattern: /^\/tricks\/aggressive\/class-a\/spins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-b",
				pattern: /^\/tricks\/aggressive\/class-b\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-b/airs",
				pattern: /^\/tricks\/aggressive\/class-b\/airs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-b/grinds",
				pattern: /^\/tricks\/aggressive\/class-b\/grinds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-b/others",
				pattern: /^\/tricks\/aggressive\/class-b\/others\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-b/spins",
				pattern: /^\/tricks\/aggressive\/class-b\/spins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-b/stalls",
				pattern: /^\/tricks\/aggressive\/class-b\/stalls\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-c",
				pattern: /^\/tricks\/aggressive\/class-c\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-c/airs",
				pattern: /^\/tricks\/aggressive\/class-c\/airs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-c/grabs",
				pattern: /^\/tricks\/aggressive\/class-c\/grabs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-c/grinds",
				pattern: /^\/tricks\/aggressive\/class-c\/grinds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-c/others",
				pattern: /^\/tricks\/aggressive\/class-c\/others\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-c/spins",
				pattern: /^\/tricks\/aggressive\/class-c\/spins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-c/stalls",
				pattern: /^\/tricks\/aggressive\/class-c\/stalls\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-d",
				pattern: /^\/tricks\/aggressive\/class-d\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-d/airs",
				pattern: /^\/tricks\/aggressive\/class-d\/airs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-d/grabs",
				pattern: /^\/tricks\/aggressive\/class-d\/grabs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-d/grinds",
				pattern: /^\/tricks\/aggressive\/class-d\/grinds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-d/others",
				pattern: /^\/tricks\/aggressive\/class-d\/others\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-d/spins",
				pattern: /^\/tricks\/aggressive\/class-d\/spins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-d/stalls",
				pattern: /^\/tricks\/aggressive\/class-d\/stalls\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-e",
				pattern: /^\/tricks\/aggressive\/class-e\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-e/airs",
				pattern: /^\/tricks\/aggressive\/class-e\/airs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-e/grabs",
				pattern: /^\/tricks\/aggressive\/class-e\/grabs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-e/grinds",
				pattern: /^\/tricks\/aggressive\/class-e\/grinds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-e/others",
				pattern: /^\/tricks\/aggressive\/class-e\/others\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-e/spins",
				pattern: /^\/tricks\/aggressive\/class-e\/spins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/tricks/aggressive/class-e/stalls",
				pattern: /^\/tricks\/aggressive\/class-e\/stalls\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/tricks/basics",
				pattern: /^\/tricks\/basics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/tricks/fundamentals",
				pattern: /^\/tricks\/fundamentals\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/tricks/jumps",
				pattern: /^\/tricks\/jumps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/tricks/misc",
				pattern: /^\/tricks\/misc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/tricks/slalom",
				pattern: /^\/tricks\/slalom\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-a",
				pattern: /^\/tricks\/slalom\/class-a\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-a/jumps",
				pattern: /^\/tricks\/slalom\/class-a\/jumps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 75 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-a/others",
				pattern: /^\/tricks\/slalom\/class-a\/others\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-a/sitting",
				pattern: /^\/tricks\/slalom\/class-a\/sitting\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-a/spins",
				pattern: /^\/tricks\/slalom\/class-a\/spins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 78 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-a/wheelings",
				pattern: /^\/tricks\/slalom\/class-a\/wheelings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 79 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-b",
				pattern: /^\/tricks\/slalom\/class-b\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 80 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-b/jumps",
				pattern: /^\/tricks\/slalom\/class-b\/jumps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 81 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-b/others",
				pattern: /^\/tricks\/slalom\/class-b\/others\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 82 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-b/sitting",
				pattern: /^\/tricks\/slalom\/class-b\/sitting\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 83 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-b/spins",
				pattern: /^\/tricks\/slalom\/class-b\/spins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 84 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-b/wheelings",
				pattern: /^\/tricks\/slalom\/class-b\/wheelings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 85 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-c",
				pattern: /^\/tricks\/slalom\/class-c\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 86 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-c/jumps",
				pattern: /^\/tricks\/slalom\/class-c\/jumps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 87 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-c/others",
				pattern: /^\/tricks\/slalom\/class-c\/others\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 88 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-c/sitting",
				pattern: /^\/tricks\/slalom\/class-c\/sitting\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 89 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-c/spins",
				pattern: /^\/tricks\/slalom\/class-c\/spins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 90 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-c/wheelings",
				pattern: /^\/tricks\/slalom\/class-c\/wheelings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 91 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-d",
				pattern: /^\/tricks\/slalom\/class-d\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 92 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-d/jumps",
				pattern: /^\/tricks\/slalom\/class-d\/jumps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 93 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-d/others",
				pattern: /^\/tricks\/slalom\/class-d\/others\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 94 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-d/sitting",
				pattern: /^\/tricks\/slalom\/class-d\/sitting\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 95 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-d/spins",
				pattern: /^\/tricks\/slalom\/class-d\/spins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 96 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-d/wheelings",
				pattern: /^\/tricks\/slalom\/class-d\/wheelings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 97 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-e",
				pattern: /^\/tricks\/slalom\/class-e\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 98 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-e/jumps",
				pattern: /^\/tricks\/slalom\/class-e\/jumps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 99 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-e/others",
				pattern: /^\/tricks\/slalom\/class-e\/others\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 100 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-e/sitting",
				pattern: /^\/tricks\/slalom\/class-e\/sitting\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 101 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-e/spins",
				pattern: /^\/tricks\/slalom\/class-e\/spins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 102 },
				endpoint: null
			},
			{
				id: "/tricks/slalom/class-e/wheelings",
				pattern: /^\/tricks\/slalom\/class-e\/wheelings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 103 },
				endpoint: null
			},
			{
				id: "/tricks/slides",
				pattern: /^\/tricks\/slides\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 104 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-a",
				pattern: /^\/tricks\/slides\/class-a\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 105 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-a/family-1",
				pattern: /^\/tricks\/slides\/class-a\/family-1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 106 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-a/family-2",
				pattern: /^\/tricks\/slides\/class-a\/family-2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 107 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-a/family-3",
				pattern: /^\/tricks\/slides\/class-a\/family-3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 108 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-a/family-4",
				pattern: /^\/tricks\/slides\/class-a\/family-4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 109 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-a/family-5",
				pattern: /^\/tricks\/slides\/class-a\/family-5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 110 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-b",
				pattern: /^\/tricks\/slides\/class-b\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 111 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-b/family-1",
				pattern: /^\/tricks\/slides\/class-b\/family-1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 112 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-b/family-2",
				pattern: /^\/tricks\/slides\/class-b\/family-2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 113 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-b/family-3",
				pattern: /^\/tricks\/slides\/class-b\/family-3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 114 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-b/family-4",
				pattern: /^\/tricks\/slides\/class-b\/family-4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 115 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-b/family-5",
				pattern: /^\/tricks\/slides\/class-b\/family-5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 116 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-c",
				pattern: /^\/tricks\/slides\/class-c\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 117 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-c/family-1",
				pattern: /^\/tricks\/slides\/class-c\/family-1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 118 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-c/family-2",
				pattern: /^\/tricks\/slides\/class-c\/family-2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 119 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-c/family-4",
				pattern: /^\/tricks\/slides\/class-c\/family-4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 120 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-c/family-5",
				pattern: /^\/tricks\/slides\/class-c\/family-5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 121 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-d",
				pattern: /^\/tricks\/slides\/class-d\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 122 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-d/family-1",
				pattern: /^\/tricks\/slides\/class-d\/family-1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 123 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-d/family-2",
				pattern: /^\/tricks\/slides\/class-d\/family-2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 124 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-d/family-4",
				pattern: /^\/tricks\/slides\/class-d\/family-4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 125 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-d/family-5",
				pattern: /^\/tricks\/slides\/class-d\/family-5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 126 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-e",
				pattern: /^\/tricks\/slides\/class-e\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 127 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-e/family-1",
				pattern: /^\/tricks\/slides\/class-e\/family-1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 128 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-e/family-2",
				pattern: /^\/tricks\/slides\/class-e\/family-2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 129 },
				endpoint: null
			},
			{
				id: "/tricks/slides/class-e/family-4",
				pattern: /^\/tricks\/slides\/class-e\/family-4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 130 },
				endpoint: null
			},
			{
				id: "/tricks/stops",
				pattern: /^\/tricks\/stops\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 131 },
				endpoint: null
			},
			{
				id: "/tricks/turns",
				pattern: /^\/tricks\/turns\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 132 },
				endpoint: null
			},
			{
				id: "/tricks/wizard",
				pattern: /^\/tricks\/wizard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 133 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
