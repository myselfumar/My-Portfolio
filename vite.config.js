// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.JPG'], // Add both lowercase and uppercase extensions
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
});
