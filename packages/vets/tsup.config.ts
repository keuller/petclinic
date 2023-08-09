import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['./src/index.ts'],
    dts: './src/index.ts',
    outDir: 'dist',
    format: 'esm',
    clean: true,
    minify: true
})
