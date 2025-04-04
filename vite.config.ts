import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/Todos/",
  resolve: {
    alias: {
      hooks: path.resolve(__dirname, "src/hooks"),
      components: path.resolve(__dirname, "src/components"),
      storage: path.resolve(__dirname, "src/storage"),
    },
  },
});
