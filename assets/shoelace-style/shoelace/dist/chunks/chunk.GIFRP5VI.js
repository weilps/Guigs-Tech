import {
  SlPopup
} from "./chunk.CPROBC4U.js";

// src/react/popup/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var popup_default = createComponent({
  tagName: "sl-popup",
  elementClass: SlPopup,
  react: React,
  events: {
    onSlReposition: "sl-reposition"
  }
});

export {
  popup_default
};
