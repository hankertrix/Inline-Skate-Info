import { sveltekit } from "@sveltejs/kit/vite";
import { pagefind } from "vite-plugin-pagefind";
import type { UserConfig } from "vite";

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
