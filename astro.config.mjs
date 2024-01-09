import 'dotenv/config';
import { defineConfig } from 'astro/config';

const compressHTML = process.env.COMPRESS_HTML === 'TRUE' ? true : false;

// https://astro.build/config
export default defineConfig({
  output: 'static',
  compressHTML,
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
});
