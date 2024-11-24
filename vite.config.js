import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const isNetlify = process.env.NETLIFY === 'true'; // Netlify 환경 체크

export default defineConfig({
  plugins: [react()],
  server: {
    https: isNetlify
      ? undefined
      : {
          key: fs.readFileSync(
            path.resolve(
              new URL(import.meta.url).pathname,
              '../cert/localhost.com-key.pem'
            )
          ),
          cert: fs.readFileSync(
            path.resolve(
              new URL(import.meta.url).pathname,
              '../cert/localhost.com.pem'
            )
          ),
        },
    open: true,
  },
});
