import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/libris': {
        target: "http://libris.kb.se/xsearch?query=",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/libris/, '')
      },
      '/ref': {
        target: 'http://localhost:5130',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ref/, '')
      }
  }}
})
