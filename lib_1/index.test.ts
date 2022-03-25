import { createCustomMemo, isServer as _isServer } from "lib_2"
import { describe, it, expect } from "vitest"
import { createMemo, createRoot, createSignal } from "solid-js"
import { isServer } from "solid-js/web"

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

describe("is server", () => {
  it("local", () => {
    expect(isServer).toBe(false)
  })

  it("deps", () => {
    expect(_isServer).toBe(false)
  })
})
