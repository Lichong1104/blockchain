import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 是否开启 https
    port: 8288,
    https: false,
    host: "0.0.0.0",
    open: true,
    // 端口号
    proxy: {
      "/api": {
        target: "http://124.70.147.50:8788",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },

      // "/api": {
      //   target: "http://119.8.170.199:8888",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ""),
      //   followRedirects: false,
      // },
      "/jup": {
        target: "http://116.204.67.82:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/jup/, ""),
      },
      "/login": {
        target: "http://115.28.136.113:8081",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/login/, ""),
      },
    },
  },
});
