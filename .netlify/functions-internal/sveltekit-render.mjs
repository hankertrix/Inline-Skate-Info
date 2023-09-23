import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/mstile-150x150.png","favicons/safari-pinned-tab.svg","favicons/site.webmanifest","fonts/oleo-script-bold.ttf","fonts/oleo-script-bold.woff","fonts/oleo-script-bold.woff2","fonts/oleo-script-regular.ttf","fonts/oleo-script-regular.woff","fonts/oleo-script-regular.woff2","images/codeberg-logo.svg","images/github-invertocat-logo.svg","images/replit-logo.svg","images/slalom-skill-tree.png","images/telegram-logo.svg","pagefind/fragment/en_11fc4d9.pf_fragment","pagefind/fragment/en_1950287.pf_fragment","pagefind/fragment/en_1a1f49b.pf_fragment","pagefind/fragment/en_1bc5ec3.pf_fragment","pagefind/fragment/en_1c8143d.pf_fragment","pagefind/fragment/en_25bdb27.pf_fragment","pagefind/fragment/en_2a2365b.pf_fragment","pagefind/fragment/en_2ca6503.pf_fragment","pagefind/fragment/en_2ce74a5.pf_fragment","pagefind/fragment/en_2cf1a55.pf_fragment","pagefind/fragment/en_3157526.pf_fragment","pagefind/fragment/en_348c739.pf_fragment","pagefind/fragment/en_34a31b4.pf_fragment","pagefind/fragment/en_372ac33.pf_fragment","pagefind/fragment/en_3743437.pf_fragment","pagefind/fragment/en_37a6ea3.pf_fragment","pagefind/fragment/en_395dbc1.pf_fragment","pagefind/fragment/en_3ab74c5.pf_fragment","pagefind/fragment/en_3b713eb.pf_fragment","pagefind/fragment/en_3cbf512.pf_fragment","pagefind/fragment/en_456578d.pf_fragment","pagefind/fragment/en_475e631.pf_fragment","pagefind/fragment/en_4b93664.pf_fragment","pagefind/fragment/en_53ec5d4.pf_fragment","pagefind/fragment/en_548f618.pf_fragment","pagefind/fragment/en_577b62e.pf_fragment","pagefind/fragment/en_5a7a11b.pf_fragment","pagefind/fragment/en_5b75441.pf_fragment","pagefind/fragment/en_626dbf7.pf_fragment","pagefind/fragment/en_62ad2e7.pf_fragment","pagefind/fragment/en_631a26e.pf_fragment","pagefind/fragment/en_6386876.pf_fragment","pagefind/fragment/en_661f3dd.pf_fragment","pagefind/fragment/en_692b104.pf_fragment","pagefind/fragment/en_6ab052b.pf_fragment","pagefind/fragment/en_6c5b2e3.pf_fragment","pagefind/fragment/en_6d65c52.pf_fragment","pagefind/fragment/en_6e67c67.pf_fragment","pagefind/fragment/en_6f5ac84.pf_fragment","pagefind/fragment/en_714878d.pf_fragment","pagefind/fragment/en_753bc85.pf_fragment","pagefind/fragment/en_7b4eee1.pf_fragment","pagefind/fragment/en_7b85857.pf_fragment","pagefind/fragment/en_7ee2d73.pf_fragment","pagefind/fragment/en_7eed6dd.pf_fragment","pagefind/fragment/en_8039f57.pf_fragment","pagefind/fragment/en_8074f14.pf_fragment","pagefind/fragment/en_80ee34c.pf_fragment","pagefind/fragment/en_8731e78.pf_fragment","pagefind/fragment/en_888848d.pf_fragment","pagefind/fragment/en_89eaa36.pf_fragment","pagefind/fragment/en_8bb3ca9.pf_fragment","pagefind/fragment/en_8dfb931.pf_fragment","pagefind/fragment/en_926e6a7.pf_fragment","pagefind/fragment/en_9293cde.pf_fragment","pagefind/fragment/en_94b1959.pf_fragment","pagefind/fragment/en_95f3a65.pf_fragment","pagefind/fragment/en_9687c7c.pf_fragment","pagefind/fragment/en_985f4a5.pf_fragment","pagefind/fragment/en_995c65c.pf_fragment","pagefind/fragment/en_9a323b8.pf_fragment","pagefind/fragment/en_9b1be2b.pf_fragment","pagefind/fragment/en_9f49879.pf_fragment","pagefind/fragment/en_9fb6cde.pf_fragment","pagefind/fragment/en_a19bb25.pf_fragment","pagefind/fragment/en_a95632c.pf_fragment","pagefind/fragment/en_aa25e78.pf_fragment","pagefind/fragment/en_aa5dfec.pf_fragment","pagefind/fragment/en_abec847.pf_fragment","pagefind/fragment/en_b1bcbd1.pf_fragment","pagefind/fragment/en_b1e5f7e.pf_fragment","pagefind/fragment/en_b5f0cf4.pf_fragment","pagefind/fragment/en_b669728.pf_fragment","pagefind/fragment/en_b7149b8.pf_fragment","pagefind/fragment/en_b7da46b.pf_fragment","pagefind/fragment/en_ba31d8a.pf_fragment","pagefind/fragment/en_bb9c22f.pf_fragment","pagefind/fragment/en_bf62510.pf_fragment","pagefind/fragment/en_bf9826f.pf_fragment","pagefind/fragment/en_c3f54d3.pf_fragment","pagefind/fragment/en_c6d9fa1.pf_fragment","pagefind/fragment/en_c8763e1.pf_fragment","pagefind/fragment/en_c8b2f82.pf_fragment","pagefind/fragment/en_d064b59.pf_fragment","pagefind/fragment/en_d15e159.pf_fragment","pagefind/fragment/en_d38b2a7.pf_fragment","pagefind/fragment/en_d43fe95.pf_fragment","pagefind/fragment/en_d739692.pf_fragment","pagefind/fragment/en_dea38d7.pf_fragment","pagefind/fragment/en_df60774.pf_fragment","pagefind/fragment/en_e0c112b.pf_fragment","pagefind/fragment/en_e24f275.pf_fragment","pagefind/fragment/en_e2c9aae.pf_fragment","pagefind/fragment/en_e696f17.pf_fragment","pagefind/fragment/en_e794eda.pf_fragment","pagefind/fragment/en_e95a826.pf_fragment","pagefind/fragment/en_ec58bcb.pf_fragment","pagefind/fragment/en_eec6c03.pf_fragment","pagefind/fragment/en_f2745aa.pf_fragment","pagefind/fragment/en_f44b086.pf_fragment","pagefind/fragment/en_fc1c39e.pf_fragment","pagefind/fragment/en_ff32728.pf_fragment","pagefind/index/en_7491aac.pf_index","pagefind/index/en_797eb70.pf_index","pagefind/index/en_8538be6.pf_index","pagefind/index/en_87db38a.pf_index","pagefind/index/en_cf5f737.pf_index","pagefind/pagefind-entry.json","pagefind/pagefind-modular-ui.css","pagefind/pagefind-modular-ui.js","pagefind/pagefind-ui.css","pagefind/pagefind-ui.js","pagefind/pagefind.en_a5cb85b014.pf_meta","pagefind/pagefind.en_ab92e6398b.pf_meta","pagefind/pagefind.en_bebbc19748.pf_meta","pagefind/pagefind.js","pagefind/wasm.en.pagefind","pagefind/wasm.unknown.pagefind","pdfs/ernsports-discount-catalogue.pdf","pdfs/hvper-sport-discount-catalogue.pdf","pdfs/lets-skate-by-asha-kirkby-2017-version.pdf","pdfs/skate-buying-guide.pdf","pdfs/skate-maintenance-guide.pdf","pdfs/the-art-of-falling-by-naomi-grigg.pdf","pdfs/world-skate-aggressive-inline-skating-rulebook-2022.pdf","pdfs/world-skate-inline-freestyle-rulebook-2020.pdf","pdfs/world-skate-inline-speed-skating-rulebook-2022.pdf","pdfs/world-skate-slalom-and-slides-trick-list.pdf","robots.txt"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".json":"application/json",".css":"text/css",".js":"application/javascript",".pdf":"application/pdf",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.7c45f4eb.js","app":"_app/immutable/entry/app.91af6a90.js","imports":["_app/immutable/entry/start.7c45f4eb.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/singletons.7a0c002a.js","_app/immutable/chunks/paths.e6cd41b7.js","_app/immutable/entry/app.91af6a90.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.c27864ab.js","_app/immutable/chunks/index.fb1c355d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/33.js'))
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
				endpoint: __memo(() => import('../server/entries/endpoints/telegram-hook/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
