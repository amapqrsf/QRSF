
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import md from 'vite-plugin-md';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    md()
  ],
});