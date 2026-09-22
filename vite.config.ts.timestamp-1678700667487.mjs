// vite.config.ts
import { defineConfig } from "file:///E:/work/Project/Blockchain-management-react/node_modules/vite/dist/node/index.js";
import react from "file:///E:/work/Project/Blockchain-management-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    // 是否开启 https
    https: false,
    host: "0.0.0.0",
    // 端口号
    proxy: {
      "/api": {
        target: "http://124.70.147.50:8788",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx3b3JrXFxcXFByb2plY3RcXFxcQmxvY2tjaGFpbi1tYW5hZ2VtZW50LXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFx3b3JrXFxcXFByb2plY3RcXFxcQmxvY2tjaGFpbi1tYW5hZ2VtZW50LXJlYWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi93b3JrL1Byb2plY3QvQmxvY2tjaGFpbi1tYW5hZ2VtZW50LXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGIGh0dHBzXG4gICAgaHR0cHM6IGZhbHNlLFxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxuICAgIC8vIFx1N0FFRlx1NTNFM1x1NTNGN1xuICAgIHByb3h5OiB7XG4gICAgICBcIi9hcGlcIjoge1xuICAgICAgICB0YXJnZXQ6IFwiaHR0cDovLzEyNC43MC4xNDcuNTA6ODc4OFwiLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCBcIlwiKSxcbiAgICAgIH0sXG4gICAgICBcIi9qdXBcIjoge1xuICAgICAgICB0YXJnZXQ6IFwiaHR0cDovLzExNi4yMDQuNjcuODI6ODAwMFwiLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9qdXAvLCBcIlwiKSxcbiAgICAgIH0sXG4gICAgICBcIi9sb2dpblwiOiB7XG4gICAgICAgIHRhcmdldDogXCJodHRwOi8vMTE1LjI4LjEzNi4xMTM6ODA4MVwiLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9sb2dpbi8sIFwiXCIpLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJULFNBQVMsb0JBQW9CO0FBQ3hWLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBO0FBQUEsSUFFTixPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxJQUVOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM5QztBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLE1BQzlDO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsWUFBWSxFQUFFO0FBQUEsTUFDaEQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
