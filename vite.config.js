import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: process.env.VITE_BASE_PATH || '/',
    plugins: [
        laravel({
            input: ['index.html', 'resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
    ],
    build: {
        outDir: process.env.GITHUB_ACTIONS ? 'dist' : 'public/build',
    },
});
