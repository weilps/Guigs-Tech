import { LitElement } from 'lit';
export default class ShoelaceElement extends LitElement {
    dir: string;
    lang: string;
    emit(name: string, options?: CustomEventInit): CustomEvent<any>;
}
export interface ShoelaceFormControl extends ShoelaceElement {
    name: string;
    value: unknown;
    disabled?: boolean;
    defaultValue?: unknown;
    defaultChecked?: boolean;
    form?: string;
    pattern?: string;
    min?: number | Date;
    max?: number | Date;
    step?: number | 'any';
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    checkValidity: () => boolean;
    reportValidity: () => boolean;
    setCustomValidity: (message: string) => void;
}
