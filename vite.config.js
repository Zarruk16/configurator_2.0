import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@react-three/fiber', '@react-three/drei'],
    force: true, // Force re-optimization
  },
  server: {
    fs: {
      strict: false,
    },
  },
})


