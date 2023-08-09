import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        vue(),
        tsconfigPaths()
    ],

    server: {
        host: '0.0.0.0',
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3001',
                rewrite: path => path.replace(/^\/api/, ''),
                changeOrigin: true
            }
        }
    }
});
