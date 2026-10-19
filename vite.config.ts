import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(rootDir, "index.html"),
        about: resolve(rootDir, "about.html"),
        work: resolve(rootDir, "myWork.html"),
        services: resolve(rootDir, "quotes.html"),
        skills: resolve(rootDir, "skills.html"),
        contact: resolve(rootDir, "contact.html"),
      },
    },
  },
});
