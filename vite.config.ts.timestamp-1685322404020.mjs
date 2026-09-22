// vite.config.ts
import { defineConfig } from "file:///E:/work/Project/Blockchain-management-react/node_modules/vite/dist/node/index.js";
import react from "file:///E:/work/Project/Blockchain-management-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    // 是否开启 https
    port: 8999,
    https: false,
    host: "0.0.0.0",
    open: true,
    // 端口号
    proxy: {
      "/api": {
        target: "http://124.70.147.50:8788",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
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
        rewrite: (path) => path.replace(/^\/jup/, "")
      },
      "/login": {
        target: "http://115.28.136.113:8081",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/login/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx3b3JrXFxcXFByb2plY3RcXFxcQmxvY2tjaGFpbi1tYW5hZ2VtZW50LXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFx3b3JrXFxcXFByb2plY3RcXFxcQmxvY2tjaGFpbi1tYW5hZ2VtZW50LXJlYWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi93b3JrL1Byb2plY3QvQmxvY2tjaGFpbi1tYW5hZ2VtZW50LXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGIGh0dHBzXG4gICAgcG9ydDogODk5OSxcbiAgICBodHRwczogZmFsc2UsXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgb3BlbjogdHJ1ZSxcbiAgICAvLyBcdTdBRUZcdTUzRTNcdTUzRjdcbiAgICBwcm94eToge1xuICAgICAgXCIvYXBpXCI6IHtcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly8xMjQuNzAuMTQ3LjUwOjg3ODhcIixcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCJcIiksXG4gICAgICB9LFxuICAgICAgLy8gXCIvYXBpXCI6IHtcbiAgICAgIC8vICAgdGFyZ2V0OiBcImh0dHA6Ly8xMTkuOC4xNzAuMTk5Ojg4ODhcIixcbiAgICAgIC8vICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgLy8gICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCJcIiksXG4gICAgICAvLyAgIGZvbGxvd1JlZGlyZWN0czogZmFsc2UsXG4gICAgICAvLyB9LFxuICAgICAgXCIvanVwXCI6IHtcbiAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly8xMTYuMjA0LjY3LjgyOjgwMDBcIixcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvanVwLywgXCJcIiksXG4gICAgICB9LFxuICAgICAgXCIvbG9naW5cIjoge1xuICAgICAgICB0YXJnZXQ6IFwiaHR0cDovLzExNS4yOC4xMzYuMTEzOjgwODFcIixcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvbG9naW4vLCBcIlwiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVCxTQUFTLG9CQUFvQjtBQUN4VixPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFFTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsTUFDOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9BLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM5QztBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFlBQVksRUFBRTtBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
