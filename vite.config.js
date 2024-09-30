import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/combined.css',
                'resources/js/combined.js',
            ],
            refresh: true,
        }),
    ],
});
