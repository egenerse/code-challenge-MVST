/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@common': path.resolve(__dirname, '/src/common'),
      '@components': path.resolve(__dirname, '/src/components'),
      '@graphql': path.resolve(__dirname, '/src/graphql'),
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@utils': path.resolve(__dirname, '/src/utils'),
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/setupTest.ts'],
  },
});
