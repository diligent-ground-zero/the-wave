import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'

// vite.config.js
export default defineConfig({
  plugins: [eslintPlugin({ cache: false })],
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    minify: true,
    manifest: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: './src/scripts/main.js',
        aboutUs: './src/scripts/about-us/aboutUs.js',
      },
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
        compact: true,
        globals: {
          jquery: '$',
        },
      },
      external: ['jquery'],
    },
  },
  publicDir: 'assets', // This will copy the contents of the 'assets' folder to 'dist'
})
