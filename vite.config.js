import { defineConfig } from 'vite';


export default defineConfig({

  build: {
    assetsInclude: ['src/**', 'assets/**'],
    outDir: 'dist',
  },
});

