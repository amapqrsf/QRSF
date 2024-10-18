import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

// Configuration Vite
export default defineConfig({
  plugins: [
    svelte(),
  ],
  base: './',
  build: {
    outDir: 'build',
    assetsDir: 'assets'
  }
});