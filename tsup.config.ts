import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: {
    cli: './src/engine/cli.ts',
    index: './src/engine/index.ts',
    dev: './src/engine/dev.ts'
  },
  bundle: true,
  splitting: true,
  minify: process.env.NODE_ENV === 'production',
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  shims: true
  // banner: {
  //   js: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);'
  // }
});
