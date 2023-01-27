import {
  spinner_styles_default
} from "./chunk.OKRVMDQN.js";
import {
  LocalizeController
} from "./chunk.LLXYF66Q.js";
import {
  ShoelaceElement,
  e
} from "./chunk.Z5VD5WTS.js";
import {
  y
} from "./chunk.DUT32TWM.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/spinner/spinner.ts
var SlSpinner = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
  }
  render() {
    return y`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
SlSpinner.styles = spinner_styles_default;
SlSpinner = __decorateClass([
  e("sl-spinner")
], SlSpinner);

export {
  SlSpinner
};
