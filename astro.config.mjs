import 'dotenv/config';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
const compressHTML = process.env.COMPRESS_HTML === 'TRUE' ? true : false;

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  compressHTML,
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
});
