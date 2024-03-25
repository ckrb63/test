import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const dependencies = { state: ["zustand"] };

export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ...dependencies,
        },
      },
    },
  },
  plugins: [react()],
});
