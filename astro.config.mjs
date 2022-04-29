import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://dthrcrpz.dev',
  integrations: [
    tailwind(),
    svelte(),
    sitemap()
  ]
});