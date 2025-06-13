import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-testing-ground/',  // 👈 ADD THIS LINE — MUST match your repo name
  server: {
    open: {
      app: {
        name: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      }
    }
  }
})
