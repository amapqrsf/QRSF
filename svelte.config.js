import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    }),
    paths: {
      base: dev ? '' : '/sveltekit-github-pages'
    },
    prerender: {
      default: true
    }
  },
  preprocess: vitePreprocess({
    style: {
      lang: 'scss',
      prependData: `@import 'src/styles/global.scss';` // Si tu utilises des styles globaux
    }
  })
};
