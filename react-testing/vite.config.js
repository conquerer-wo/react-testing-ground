import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: {
      app: {
        name: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      }
    }
  }
})
