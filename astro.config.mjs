import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import i18n from '@astrojs/i18n';
import github from '@astrojs/github';

export default defineConfig({
  output: 'static',
  adapter: github({ mode: 'pages' }),
  integrations: [mdx(), i18n()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    trailingSlash: 'always'
  }
});