import { defineConfig } from "vitest/config"
import { resolve } from "path"
import alias from "@rollup/plugin-alias"
const { importMaps } = require("vite-plugin-import-maps")

const paths = {
  "solid-js": resolve(__dirname, "node_modules/solid-js/dist/solid.js"),
  "solid-js/web": resolve(__dirname, "node_modules/solid-js/web/dist/web.js"),
  "solid-js/store": resolve(__dirname, "node_modules/solid-js/store/dist/store.js"),
}

const x = {
  entries: [
    {
      find: "solid-js",
      replacement: resolve(__dirname, "node_modules/solid-js/dist/solid.js"),
    },
    {
      find: "solid-js/web",
      replacement: resolve(__dirname, "node_modules/solid-js/web/dist/web.js"),
    },
    {
      find: "solid-js/store",
      replacement: resolve(__dirname, "node_modules/solid-js/store/dist/store.js"),
    },
  ],
}

export default defineConfig({
  // plugins: [
  //   importMaps([
  //     {
  //       imports: {
  //         "solid-js/web": "solid-js/web/dist/web.js",
  //         "solid-js/store": "solid-js/store/dist/store.js",
  //         "solid-js": "solid-js/dist/solid.js",
  //       },
  //     },
  //   ]),
  // ],
  test: {
    clearMocks: true,
    environment: "jsdom",
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    deps: {
      inline: [/solid-js/],
    },
  },
  resolve: {
    alias: [
      {
        find: "solid-js/web",
        replacement: resolve(__dirname, "node_modules/solid-js/web/dist/web.js"),
      },
      {
        find: "solid-js/store",
        replacement: resolve(__dirname, "node_modules/solid-js/store/dist/store.js"),
      },
      {
        find: "solid-js",
        replacement: resolve(__dirname, "node_modules/solid-js/dist/solid.js"),
      },
    ],
    conditions: ["development", "browser"],
  },
})
