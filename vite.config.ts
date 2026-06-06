import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    // Pin the portfolio to 5174 so it never collides with the other local site
    // on 5173. strictPort makes it fail loudly instead of silently hopping ports.
    port: 5174,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split big, stable dependencies into their own cacheable chunks.
        // framer-motion is isolated so it stays OFF the critical path (only the
        // lazy below-fold sections + face scene pull it in). React (incl. the
        // jsx-runtime + scheduler it needs) is grouped together so the entry's
        // jsx import doesn't accidentally drag the motion chunk into first paint.
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("framer-motion")) return "motion";
          if (
            /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)
          )
            return "react";
        },
      },
    },
  },
});
