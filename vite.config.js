import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Vite configuration with SSL
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(
        path.resolve(__dirname, 'cert/localhost.com-key.pem')
      ),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert/localhost.com.pem')),
    },
    open: true, // 브라우저 자동 열기 설정 (옵션)
  },
});
