import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {

    adapter: adapter({
      edge: false,
      split: false
    }),
    paths: {
      base: dev ? '' : '/QRSF'  // Chemin de base pour GitHub Pages
    },
    prerender: {
      default: true
    },
    trailingSlash: 'always'
  },
  preprocess: vitePreprocess({
    style: {
      lang: 'scss',
      prependData: `@import 'src/styles/global.scss';`
    }
  })
};
