import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',  // Répertoire où seront générées les pages
      assets: 'build', // Répertoire des fichiers statiques
      fallback: 'index.html'
    }),
    paths: {
      base: dev ? '' : '/QRSF'
    },
    prerender: {
      default: true
    }
  }
};
