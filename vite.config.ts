import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

// Plugin personnalisé pour charger les fichiers .md comme JSON
function loadMarkdownAsJSON() {
  return {
    name: 'load-markdown-as-json',
    transform(code: string, id: string) {
      if (id.endsWith('.md')) {
        try {
          // Lire le fichier Markdown
          const jsonContent = fs.readFileSync(id, 'utf-8');

          // Vérifier si le contenu est bien au format JSON
          const jsonParsed = JSON.parse(jsonContent);

          // Retourner le code JavaScript sous forme d'export
          return {
            code: `const e = ${JSON.stringify(jsonParsed)}; export { e as default };`,
            map: null
          };
        } catch (err) {
          throw new Error(`Erreur de parsing JSON dans le fichier ${id} : ${err.message}`);
        }
      }
      return null;
    }
  };
}

// Configuration de Vite
export default defineConfig({
  plugins: [
    svelte(),
    loadMarkdownAsJSON(), // Plugin pour charger les fichiers Markdown en JSON
  ],
  base: './',
  build: {
    outDir: 'build',
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      '@products': path.resolve(__dirname, './public/products'), // Alias pour référencer facilement les produits
    },
  },
});
