import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';
import packageJson from './package.json'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const BASE_URL = env.VITE_BASE_URL;

  return defineConfig({
    base: BASE_URL,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    plugins: [react()],
    build: {
      assetsDir: "./assets",
      outDir: "dist",
      rollupOptions: {
        output: {
          entryFileNames: `SMC-interactive-game-${packageJson. version}.js`,
          chunkFileNames: `SMC-interactive-game-${packageJson. version}.js`,
          assetFileNames: `SMC-interactive-game-${packageJson. version}.[ext]`,
        },
      },
    },
  });
};
