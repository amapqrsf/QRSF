import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    }),
    paths: {
      base: dev ? '' : '/QRSF'  // Chemin de base pour GitHub Pages
    },
    prerender: {
      default: true
    },
    trailingSlash: 'always'  // Ajoute un slash à la fin des URLs
  },
  preprocess: vitePreprocess({
    style: {
      lang: 'scss',
      prependData: `@import 'src/styles/global.scss';`
    }
  })
};
