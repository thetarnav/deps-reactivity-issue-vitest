// index.ts
import { createMemo } from "solid-js";
import { isServer } from "solid-js/web";
var createCustomMemo = createMemo;
export {
  createCustomMemo,
  isServer
};
