import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    //env variable from .env
    "process.env.VITE_BASEURL": JSON.stringify(process.env.VITE_BASEURL),
    "process.env.VITE_BASEIMG": JSON.stringify(process.env.VITE_BASEIMG),
    "process.env.APIKEY": JSON.stringify(process.env.VITE_APIKEY),
    "process.env.VITE_TOKEN": JSON.stringify(process.env.VITE_TOKEN),

  },
});
