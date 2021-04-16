import svelte from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 5000,
    },
    build: {
        cssCodeSplit: false,
    },
    optimizeDeps: {
        exclude: ['@roxi/routify'],
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, './src'),
            },
        ],
    },
    plugins: [svelte()],
});
