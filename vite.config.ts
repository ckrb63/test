import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const modules = ['react', 'react-dom','react-router-dom'];
            const chunk = modules.find(module => id.includes(`/node_modules/${module}`));
            const packageName = id.match(/node_modules\/(.+?)\//);
            if(chunk) return 'vendor';
            if(packageName) return packageName[1];
          }
        }
      },
    },
  },
  plugins: [react()],
})
