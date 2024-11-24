import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const isNetlify = process.env.NETLIFY === 'true'; // Netlify 환경 체크

export default defineConfig({
  plugins: [react()],
  server: {
    https: !isNetlify // Netlify 환경에서는 https 비활성화
      ? {
          key: fs.readFileSync(
            path.resolve(__dirname, 'cert/localhost.com-key.pem') // 로컬 환경에서의 경로
          ),
          cert: fs.readFileSync(
            path.resolve(__dirname, 'cert/localhost.com.pem') // 로컬 환경에서의 경로
          ),
        }
      : undefined, // Netlify 환경에서는 https 설정을 하지 않음
    open: true, // 서버 시작 시 브라우저 자동 열기
  },
});
