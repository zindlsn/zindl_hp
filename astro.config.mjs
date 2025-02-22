// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const SERVER_PORT = 3000;
const LIVE_URL = `https://zindlsn.github.io/zindl_hp`;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const SCRIPT = process.env.npm_lifecyclescript ||"";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL
let page_path = ""

if(isBuild){
	BASE_URL = LIVE_URL;
	page_path = `zindlsn_hp`
}else{
	console.log(BASE_URL)
}

// https://astro.build/config
export default defineConfig({
	site: BASE_URL,
	base: page_path,
	output: 'static',
	integrations: [mdx(), sitemap()],
});
