// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://zindlsn.github.io',
	base:'/zindl_hp',
	output: 'static',
	integrations: [mdx(), sitemap()],
});
