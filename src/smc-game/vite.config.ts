import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const BASE_URL = env.VITE_BASE_URL;

  return defineConfig({
    base: BASE_URL,
    plugins: [react()],
    build: {
      assetsDir: "assets",
      outDir: "dist",
      rollupOptions: {
        output: {
          entryFileNames: `smc-game.js`,
          chunkFileNames: `smc-game.js`,
          assetFileNames: `smc-game.[ext]`,
        },
      },
    },
  });
};
