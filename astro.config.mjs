import 'dotenv/config';
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';

const compressHTML = process.env.COMPRESS_HTML === 'TRUE' ? true : false;

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  output: 'static',
  compressHTML,
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
});
