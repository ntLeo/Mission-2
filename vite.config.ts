import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/ "Using Environment Variables in Config"
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_API_KEY': JSON.stringify(env.VITE_API_KEY)
    },
    plugins: [react()],
  }
})