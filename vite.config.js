import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import dns from "dns";
import vue from "@vitejs/plugin-vue";
dns.setDefaultResultOrder("verbatim");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: ["/src/assets/scss/main.scss"],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "localhost",
    port: 3000,
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
  },
});
