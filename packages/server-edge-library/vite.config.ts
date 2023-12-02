/// <reference types="vitest" />

import { defineConfig } from "vite";
import { viteCrossPlatform } from "@cross-platform-tools/vite-plugin";

export default defineConfig({
  plugins: [
    viteCrossPlatform({
      platform: process.env.PLATFORM!,
      supportedPlatforms: ["server", "edge"],
      entryDir: 'src',
      outDir: 'dist',
    }),
  ]
});