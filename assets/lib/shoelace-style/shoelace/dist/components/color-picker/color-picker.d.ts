import '../button-group/button-group';
import '../button/button';
import '../dropdown/dropdown';
import '../icon/icon';
import '../input/input';
import '../visually-hidden/visually-hidden';
import ShoelaceElement from '../../internal/shoelace-element';
import type { CSSResultGroup } from 'lit';
import type { ShoelaceFormControl } from '../../internal/shoelace-element';
import type SlDropdown from '../dropdown/dropdown';
import type SlInput from '../input/input';
export default class SlColorPicker extends ShoelaceElement implements ShoelaceFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    private isSafeValue;
    private readonly localize;
    input: SlInput;
    previewButton: HTMLButtonElement;
    dropdown: SlDropdown;
    private isDraggingGridHandle;
    private isEmpty;
    private inputValue;
    private hue;
    private saturation;
    private brightness;
    private alpha;
    value: string;
    defaultValue: string;
    label: string;
    format: 'hex' | 'rgb' | 'hsl' | 'hsv';
    inline: boolean;
    size: 'small' | 'medium' | 'large';
    noFormatToggle: boolean;
    name: string;
    disabled: boolean;
    hoist: boolean;
    opacity: boolean;
    uppercase: boolean;
    swatches: string | string[];
    form: string;
    private handleCopy;
    private handleFormatToggle;
    private handleAlphaDrag;
    private handleHueDrag;
    private handleGridDrag;
    private handleAlphaKeyDown;
    private handleHueKeyDown;
    private handleGridKeyDown;
    private handleInputChange;
    private handleInputInput;
    private handleInputKeyDown;
    private handleTouchMove;
    private parseColor;
    private setColor;
    private setLetterCase;
    private syncValues;
    private handleAfterHide;
    private handleEyeDropper;
    private selectSwatch;
    private getHexString;
    handleFormatChange(): void;
    handleOpacityChange(): void;
    handleValueChange(oldValue: string | undefined, newValue: string): void;
    getFormattedValue(format?: 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsv' | 'hsva'): string;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-color-picker': SlColorPicker;
    }
}
