/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5174,
    fs: {
      strict: false,
    },
  },
  base: "/",
  build: {
    outDir: "build",
  },
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
  ],
});
