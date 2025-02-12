import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    react(),
    TanStackRouterVite({ autoCodeSplitting: true }),
    tailwindcss(),
  ],
});
