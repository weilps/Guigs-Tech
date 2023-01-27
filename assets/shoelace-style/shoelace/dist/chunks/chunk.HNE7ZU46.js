import {
  input_styles_default
} from "./chunk.QD67H4OS.js";
import {
  l as l2
} from "./chunk.OXFFPZHD.js";
import {
  defaultValue
} from "./chunk.ZNRFAEMI.js";
import {
  FormControlController
} from "./chunk.DOQUAVYF.js";
import {
  LocalizeController
} from "./chunk.LLXYF66Q.js";
import {
  HasSlotController
} from "./chunk.3IYPB6RR.js";
import {
  l
} from "./chunk.V47DPYLL.js";
import {
  watch
} from "./chunk.VQ3XOPCT.js";
import {
  o
} from "./chunk.ORW72H2K.js";
import {
  ShoelaceElement,
  e,
  e2,
  i,
  t
} from "./chunk.Z5VD5WTS.js";
import {
  y
} from "./chunk.DUT32TWM.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/input/input.ts
var _a;
var isChromium = (_a = navigator.userAgentData) == null ? void 0 : _a.brands.some((b) => b.brand.includes("Chromium"));
var isFirefox = isChromium ? false : navigator.userAgent.includes("Firefox");
var SlInput = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this);
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.localize = new LocalizeController(this);
    this.hasFocus = false;
    this.title = "";
    this.type = "text";
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.size = "medium";
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.helpText = "";
    this.clearable = false;
    this.disabled = false;
    this.placeholder = "";
    this.readonly = false;
    this.passwordToggle = false;
    this.passwordVisible = false;
    this.noSpinButtons = false;
    this.form = "";
    this.required = false;
    this.spellcheck = true;
  }
  /** Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. */
  get valueAsDate() {
    var _a2, _b;
    return (_b = (_a2 = this.input) == null ? void 0 : _a2.valueAsDate) != null ? _b : null;
  }
  set valueAsDate(newValue) {
    const input = document.createElement("input");
    input.type = "date";
    input.valueAsDate = newValue;
    this.value = input.value;
  }
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  get valueAsNumber() {
    var _a2, _b;
    return (_b = (_a2 = this.input) == null ? void 0 : _a2.valueAsNumber) != null ? _b : parseFloat(this.value);
  }
  set valueAsNumber(newValue) {
    const input = document.createElement("input");
    input.type = "number";
    input.valueAsNumber = newValue;
    this.value = input.value;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleChange() {
    this.value = this.input.value;
    this.emit("sl-change");
  }
  handleClearClick(event) {
    this.value = "";
    this.emit("sl-clear");
    this.emit("sl-input");
    this.emit("sl-change");
    this.input.focus();
    event.stopPropagation();
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleInput() {
    this.value = this.input.value;
    this.formControlController.updateValidity();
    this.emit("sl-input");
  }
  handleInvalid() {
    this.formControlController.setValidity(false);
  }
  handleKeyDown(event) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.key === "Enter" && !hasModifier) {
      setTimeout(() => {
        if (!event.defaultPrevented && !event.isComposing) {
          this.formControlController.submit();
        }
      });
    }
  }
  handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStepChange() {
    this.input.step = String(this.step);
    this.formControlController.updateValidity();
  }
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
  }
  /** Sets focus on the input. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the input. */
  select() {
    this.input.select();
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(replacement, start, end, selectMode) {
    this.input.setRangeText(replacement, start, end, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
  showPicker() {
    if ("showPicker" in HTMLInputElement.prototype) {
      this.input.showPicker();
    }
  }
  /** Increments the value of a numeric input type by the value of the step attribute. */
  stepUp() {
    this.input.stepUp();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    this.input.stepDown();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Checks for validity but does not show the browser's validation message. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && !this.readonly && (typeof this.value === "number" || this.value.length > 0);
    return y`
      <div
        part="form-control"
        class=${o({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${o({
      input: true,
      // Sizes
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      // States
      "input--pill": this.pill,
      "input--standard": !this.filled,
      "input--filled": this.filled,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": !this.value,
      "input--no-spin-buttons": this.noSpinButtons,
      "input--is-firefox": isFirefox
    })}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${l(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l(this.placeholder)}
              minlength=${l(this.minlength)}
              maxlength=${l(this.maxlength)}
              min=${l(this.min)}
              max=${l(this.max)}
              step=${l(this.step)}
              .value=${l2(this.value)}
              autocapitalize=${l(this.type === "password" ? "off" : this.autocapitalize)}
              autocomplete=${l(this.type === "password" ? "off" : this.autocomplete)}
              autocorrect=${l(this.type === "password" ? "off" : this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${l(this.pattern)}
              enterkeyhint=${l(this.enterkeyhint)}
              inputmode=${l(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${hasClearIcon ? y`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  ` : ""}
            ${this.passwordToggle && !this.disabled ? y`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible ? y`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          ` : y`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  ` : ""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `;
  }
};
SlInput.styles = input_styles_default;
__decorateClass([
  i(".input__control")
], SlInput.prototype, "input", 2);
__decorateClass([
  t()
], SlInput.prototype, "hasFocus", 2);
__decorateClass([
  e2()
], SlInput.prototype, "title", 2);
__decorateClass([
  e2({ reflect: true })
], SlInput.prototype, "type", 2);
__decorateClass([
  e2()
], SlInput.prototype, "name", 2);
__decorateClass([
  e2()
], SlInput.prototype, "value", 2);
__decorateClass([
  defaultValue()
], SlInput.prototype, "defaultValue", 2);
__decorateClass([
  e2({ reflect: true })
], SlInput.prototype, "size", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlInput.prototype, "filled", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlInput.prototype, "pill", 2);
__decorateClass([
  e2()
], SlInput.prototype, "label", 2);
__decorateClass([
  e2({ attribute: "help-text" })
], SlInput.prototype, "helpText", 2);
__decorateClass([
  e2({ type: Boolean })
], SlInput.prototype, "clearable", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlInput.prototype, "disabled", 2);
__decorateClass([
  e2()
], SlInput.prototype, "placeholder", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlInput.prototype, "readonly", 2);
__decorateClass([
  e2({ attribute: "password-toggle", type: Boolean })
], SlInput.prototype, "passwordToggle", 2);
__decorateClass([
  e2({ attribute: "password-visible", type: Boolean })
], SlInput.prototype, "passwordVisible", 2);
__decorateClass([
  e2({ attribute: "no-spin-buttons", type: Boolean })
], SlInput.prototype, "noSpinButtons", 2);
__decorateClass([
  e2({ reflect: true })
], SlInput.prototype, "form", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlInput.prototype, "required", 2);
__decorateClass([
  e2()
], SlInput.prototype, "pattern", 2);
__decorateClass([
  e2({ type: Number })
], SlInput.prototype, "minlength", 2);
__decorateClass([
  e2({ type: Number })
], SlInput.prototype, "maxlength", 2);
__decorateClass([
  e2({ type: Number })
], SlInput.prototype, "min", 2);
__decorateClass([
  e2({ type: Number })
], SlInput.prototype, "max", 2);
__decorateClass([
  e2()
], SlInput.prototype, "step", 2);
__decorateClass([
  e2()
], SlInput.prototype, "autocapitalize", 2);
__decorateClass([
  e2()
], SlInput.prototype, "autocorrect", 2);
__decorateClass([
  e2()
], SlInput.prototype, "autocomplete", 2);
__decorateClass([
  e2({ type: Boolean })
], SlInput.prototype, "autofocus", 2);
__decorateClass([
  e2()
], SlInput.prototype, "enterkeyhint", 2);
__decorateClass([
  e2({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], SlInput.prototype, "spellcheck", 2);
__decorateClass([
  e2()
], SlInput.prototype, "inputmode", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlInput.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("step", { waitUntilFirstUpdate: true })
], SlInput.prototype, "handleStepChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], SlInput.prototype, "handleValueChange", 1);
SlInput = __decorateClass([
  e("sl-input")
], SlInput);

export {
  SlInput
};
