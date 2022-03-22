import { createCustomMemo } from "lib_2"
import { describe, it, expect } from "vitest"
import { createMemo, createRoot, createSignal } from "solid-js"

describe("reactivity in deps", () => {
  it("local", () =>
    createRoot(dispose => {
      const [n, setN] = createSignal(1)
      const memo = createMemo(n)
      expect(n(), "initial run").toBe(memo())
      setN(2)
      expect(n(), "after change").toBe(memo())
      dispose()
    }))

  it("deps", () =>
    createRoot(dispose => {
      const [n, setN] = createSignal(1)
      const memo = createCustomMemo(n)
      expect(n(), "initial run").toBe(memo())
      setN(2)
      expect(n(), "after change").toBe(memo())
      dispose()
    }))
})
