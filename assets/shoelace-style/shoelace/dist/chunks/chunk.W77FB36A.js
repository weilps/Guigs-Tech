import {
  SlColorPicker
} from "./chunk.73W52PD2.js";

// src/react/color-picker/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var color_picker_default = createComponent({
  tagName: "sl-color-picker",
  elementClass: SlColorPicker,
  react: React,
  events: {
    onSlChange: "sl-change",
    onSlInput: "sl-input"
  }
});

export {
  color_picker_default
};
