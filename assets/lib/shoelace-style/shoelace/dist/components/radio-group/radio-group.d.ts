import '../button-group/button-group';
import { FormControlController } from '../../internal/form';
import ShoelaceElement from '../../internal/shoelace-element';
import type { CSSResultGroup } from 'lit';
import type { ShoelaceFormControl } from '../../internal/shoelace-element';
export default class SlRadioGroup extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    protected readonly formControlController: FormControlController;
    private readonly hasSlotController;
    private customValidityMessage;
    private validationTimeout;
    defaultSlot: HTMLSlotElement;
    validationInput: HTMLInputElement;
    private hasButtonGroup;
    private errorMessage;
    defaultValue: string;
    label: string;
    helpText: string;
    name: string;
    value: string;
    form: string;
    required: boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    private getAllRadios;
    private handleRadioClick;
    private handleKeyDown;
    private handleLabelClick;
    private handleSlotChange;
    private updateCheckedRadio;
    handleValueChange(): void;
    checkValidity(): boolean;
    setCustomValidity(message?: string): void;
    reportValidity(): boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-radio-group': SlRadioGroup;
    }
}
