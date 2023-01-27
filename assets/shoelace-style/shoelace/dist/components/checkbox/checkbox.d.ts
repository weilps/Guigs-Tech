import '../icon/icon';
import ShoelaceElement from '../../internal/shoelace-element';
import type { CSSResultGroup } from 'lit';
import type { ShoelaceFormControl } from '../../internal/shoelace-element';
export default class SlCheckbox extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    input: HTMLInputElement;
    private hasFocus;
    title: string;
    name: string;
    value: string;
    size: 'small' | 'medium' | 'large';
    disabled: boolean;
    checked: boolean;
    indeterminate: boolean;
    defaultChecked: boolean;
    form: string;
    required: boolean;
    firstUpdated(): void;
    private handleClick;
    private handleBlur;
    private handleInput;
    private handleFocus;
    handleDisabledChange(): void;
    handleStateChange(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-checkbox': SlCheckbox;
    }
}
