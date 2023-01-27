import {
  SlSwitch
} from "./chunk.I3JZDMQL.js";

// src/react/switch/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var switch_default = createComponent({
  tagName: "sl-switch",
  elementClass: SlSwitch,
  react: React,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlInput: "sl-input",
    onSlFocus: "sl-focus"
  }
});

export {
  switch_default
};
