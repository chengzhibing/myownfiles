import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:9000/api",
  //       changeOrigin: true
  //     }
  //   }
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@server": path.resolve(__dirname, "./src/server"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@router": path.resolve(__dirname, "./scr/router")
    }
  }
})
