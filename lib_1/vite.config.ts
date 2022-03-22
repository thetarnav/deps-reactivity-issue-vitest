import { defineConfig } from "vitest/config"

export default defineConfig({
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
    conditions: ["development", "browser"],
  },
})
