import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/home-reset/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
