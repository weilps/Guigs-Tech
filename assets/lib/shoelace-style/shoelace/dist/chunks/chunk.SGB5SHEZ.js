import {
  SlRange
} from "./chunk.MI6PHIAM.js";

// src/react/range/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var range_default = createComponent({
  tagName: "sl-range",
  elementClass: SlRange,
  react: React,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input"
  }
});

export {
  range_default
};
