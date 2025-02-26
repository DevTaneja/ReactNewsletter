import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    hmr: true, // Ensure Hot Module Replacement is enabled
    watch: {
      usePolling: true, // Helps in some environments where HMR doesn't trigger
    }
  }
})
