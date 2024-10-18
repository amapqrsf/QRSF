import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import vitePluginMarkdown from 'vite-plugin-md'; // Ajout du plugin Markdown

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      extensions: ['.svelte', '.md'], // Permettre l'extension .md dans les fichiers Svelte
    }),
    vitePluginMarkdown() // Activation du plugin Markdown
  ],
});
