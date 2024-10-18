import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {

    adapter: adapter({
      edge: false,
      split: false
    }),
  },
  preprocess: vitePreprocess({
    style: {
      lang: 'scss',
      prependData: `@import 'src/styles/global.scss';`
    }
  })
};
