// @ts-check
import { defineConfig } from 'astro/config';
import robotxTxt from 'astro-robots-txt';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), robotxTxt()]
});
