import { defineConfig } from "vite";
import { resolve } from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr()],
  publicDir: 'public',
  resolve: {
    alias: {
      public: resolve(__dirname, "./public"),
      hooks: resolve(__dirname, "./src", "hooks"),
    },
  },
});
