import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

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
    assetsDir: '',
    rollupOptions: {
      input: './src/scripts/main.js',
      output: {},
      preserveEntrySignatures: 'exports-only',
      external: ['jquery'],
    },
  },
})
