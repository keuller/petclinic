import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        ...VitePluginNode({
            adapter: 'koa',
            appPath: './src/server.ts',
            exportName: 'nodeApp',
            tsCompiler: 'swc'
        })
    ],

    server: {
        host: '0.0.0.0',
        port: 3001
    }
})
