import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    base: '/ayman-portfolio/',   // ← add this line
    optimizeDeps: {
    exclude: ['object-inspect'],
  },
  plugins: [
     tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
       
      },
      
    }),
  ],
})
