import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        counter: "counter.html",
        derived: "derived.html",
        globalcounter: "globalcounter.html",
        autocounter: "auto-counter.html",
        userrow: "user-row.html",
        todo: "todo.html",
        article: "article.html",
      },
    },
  },
});
