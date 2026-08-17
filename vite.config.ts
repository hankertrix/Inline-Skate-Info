import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import { pagefind } from "vite-plugin-pagefind";

const config: UserConfig = {
	plugins: [
		sveltekit(),
		pagefind({
			outputDirectory: "build",
			assetsDirectory: "static",
			bundleDirectory: "pagefind",
			buildScript: "build",
			developStrategy: "lazy",
		}),
	],
};

export default config;
