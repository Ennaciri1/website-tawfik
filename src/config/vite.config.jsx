// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/movie-manager/', // Remplacez par le nom de votre repo
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true
  }
})