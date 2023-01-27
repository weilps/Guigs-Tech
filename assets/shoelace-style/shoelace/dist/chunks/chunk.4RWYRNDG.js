import {
  SlRadio
} from "./chunk.P7GBOEOF.js";

// src/react/radio/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var radio_default = createComponent({
  tagName: "sl-radio",
  elementClass: SlRadio,
  react: React,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus"
  }
});

export {
  radio_default
};
