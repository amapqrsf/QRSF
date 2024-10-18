import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      // Options for the adapter, such as `pages`, `assets`, etc.
      fallback: 'index.html'  // Important for single page applications
    }),
    paths: {
      // Update this if your GitHub Pages repository is a subpath
      base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-page' : ''
    }
  }
};
