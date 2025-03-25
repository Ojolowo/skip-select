//@ts-expect-error ///
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      //@ts-expect-error jjj
      '@': path.resolve(__dirname, 'src', 'app'),
      //@ts-expect-error jjj
      app: path.resolve(__dirname, 'src', 'app'),
    },
  },
});
