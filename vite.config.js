import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const getFileName = (path, key) => {
            return path.toString().split(key)[1].split('/')[0].split('.')[0].replace('@', '').toLocaleLowerCase();
          };
          if (id.includes('src/views')) {
            return getFileName(id, 'src/views');
          } else if (id.includes('node_modules')) {
            return getFileName(id, 'node_modules');
          }
        },
      },
    },
  },
});
