import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // باز کردن مرورگر به صورت خودکار
  },
  build: {
    outDir: '../dist', // مسیر خروجی برای دایرکتوری اصلی
  }
})