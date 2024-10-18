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
        const jsonContent = fs.readFileSync(id, 'utf-8');
        try {
          const jsonParsed = JSON.parse(jsonContent);
          return {
            code: `export default ${JSON.stringify(jsonParsed)};`,
            map: null
          };
        } catch (err) {
          throw new Error(`Erreur de parsing JSON dans le fichier ${id}`);
        }
      }
      return null;
    }
  };
}

// Configuration Vite
export default defineConfig({
  plugins: [
    svelte(),
    loadMarkdownAsJSON(), // Plugin pour charger les fichiers Markdown en JSON
  ],
});