import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboardApp",
      filename: "remoteEntry.js",

      exposes: {
        "./DashboardPage": "./src/pages/DashboardPage"
      },

      shared: ["react", "react-dom", "react-router-dom"]
    })
  ],

  build: {
    target: "esnext"
  },

  server: {
    port: 5173
  },

  preview: {
    port: 5002,
    strictPort: true
  }
});


