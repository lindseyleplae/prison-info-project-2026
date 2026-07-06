import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import { prisonContentBlocks } from './src/lib/remark-content-blocks.mjs';

export default defineConfig({
  output: 'static',
  site: 'https://prisonvisitorguide.org',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    sitemap({
      // Internal style guide — not search-relevant; the page itself is noindex.
      filter: (page) => !page.includes('/showcase/'),
      i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } }
    })
  ],
  markdown: {
    remarkPlugins: [remarkGfm, remarkDirective, prisonContentBlocks],
    syntaxHighlight: 'shiki'
  }
});
