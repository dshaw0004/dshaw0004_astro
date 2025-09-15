// @ts-check
import {defineConfig} from 'astro/config';
import robotxTxt from 'astro-robots-txt';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://dipankarshaw.web.app",
  integrations: [
    mdx(), 
    sitemap(), 
    robotxTxt()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
