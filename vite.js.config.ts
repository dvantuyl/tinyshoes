import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
      svelte(),
    ],
    build: {
        lib: {
            entry: './dist/index.js',
            name: 'Components',
            fileName: (format) => `components.${format}.js`,
        },
        outDir: 'dist-js'
    },
});