/* @license Copyright 2023 @polkadot-cloud/app authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5174,
    fs: {
      strict: false,
    },
  },
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
