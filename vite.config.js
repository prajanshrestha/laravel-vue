import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    plugins: [
        vue({
            template: {
              compilerOptions: {
                isCustomElement: (tag) => {
                    return tag.startsWith('ion-') // (return true)
                }
              }
            }
        }),
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
    ],
});
