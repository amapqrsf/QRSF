import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';


// Configuration de Vite
export default defineConfig({
  plugins: [
    svelte(),
  ],
  base: '/',
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
