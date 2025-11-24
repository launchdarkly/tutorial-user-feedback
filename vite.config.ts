import type { UserConfig } from 'vite'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
  }
}) satisfies UserConfig;
// });
// default {
