import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { ShoelaceFormControl } from '../internal/shoelace-element';
import type SlButton from '../components/button/button';
export declare const formCollections: WeakMap<HTMLFormElement, Set<ShoelaceFormControl>>;
export interface FormControlControllerOptions {
    form: (input: ShoelaceFormControl) => HTMLFormElement | null;
    name: (input: ShoelaceFormControl) => string;
    value: (input: ShoelaceFormControl) => unknown | unknown[];
    defaultValue: (input: ShoelaceFormControl) => unknown | unknown[];
    disabled: (input: ShoelaceFormControl) => boolean;
    reportValidity: (input: ShoelaceFormControl) => boolean;
    setValue: (input: ShoelaceFormControl, value: unknown) => void;
}
export declare class FormControlController implements ReactiveController {
    host: ShoelaceFormControl & ReactiveControllerHost;
    form?: HTMLFormElement | null;
    options: FormControlControllerOptions;
    constructor(host: ReactiveControllerHost & ShoelaceFormControl, options?: Partial<FormControlControllerOptions>);
    hostConnected(): void;
    hostDisconnected(): void;
    hostUpdated(): void;
    private attachForm;
    private detachForm;
    private handleFormData;
    private handleFormSubmit;
    private handleFormReset;
    private handleUserInput;
    private reportFormValidity;
    private setUserInteracted;
    private doAction;
    reset(invoker?: HTMLInputElement | SlButton): void;
    submit(invoker?: HTMLInputElement | SlButton): void;
    setValidity(isValid: boolean): void;
    updateValidity(): void;
}
