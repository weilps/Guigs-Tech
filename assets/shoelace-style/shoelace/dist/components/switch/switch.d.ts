import ShoelaceElement from '../../internal/shoelace-element';
import type { CSSResultGroup } from 'lit';
import type { ShoelaceFormControl } from '../../internal/shoelace-element';
export default class SlSwitch extends ShoelaceElement implements ShoelaceFormControl {
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
    defaultChecked: boolean;
    form: string;
    required: boolean;
    firstUpdated(): void;
    private handleBlur;
    private handleInput;
    private handleClick;
    private handleFocus;
    private handleKeyDown;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
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
        'sl-switch': SlSwitch;
    }
}
