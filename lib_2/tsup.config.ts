import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: "index.ts",
  format: ["esm", "cjs"],
})
