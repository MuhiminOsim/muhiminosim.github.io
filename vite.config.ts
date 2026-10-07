import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  // File-change events don't reach WSL from Windows drives (/mnt/*), so poll instead.
  server: { watch: { usePolling: true, interval: 300 } },
});
