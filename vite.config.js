/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 30/12/2025 - 17:55:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
