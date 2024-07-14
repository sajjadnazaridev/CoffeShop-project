import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  root: '.', // تعیین دایرکتوری ریشه
  publicDir: 'public', // تعیین دایرکتوری عمومی
  build: {
    outDir: 'dist',
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    open: true, // باز کردن مرورگر به صورت خودکار
  },
});