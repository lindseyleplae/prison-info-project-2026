import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import { prisonContentBlocks } from './src/lib/remark-content-blocks.mjs';

export default defineConfig({
  output: 'static',
  site: 'https://prisonvisitorguide.org',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkDirective, prisonContentBlocks],
    syntaxHighlight: 'shiki'
  }
});
