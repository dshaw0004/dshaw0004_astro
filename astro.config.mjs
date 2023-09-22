import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	site: "https://dshaw0004.netlify.com",
	integrations: [mdx(), sitemap(), robotsTxt()],
	experimental: {
		viewTransitions: true,
	},
});
