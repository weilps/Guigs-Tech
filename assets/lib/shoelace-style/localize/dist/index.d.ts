import type { ReactiveController, ReactiveControllerHost } from 'lit';
export declare type FunctionParams<T> = T extends (...args: infer U) => string ? U : never;
export interface Translation {
    $code: string;
    $name: string;
    $dir: 'ltr' | 'rtl';
}
export interface DefaultTranslation extends Translation {
    [key: string]: any;
}
export declare function registerTranslation(...translation: Translation[]): void;
export declare function update(): void;
export declare class LocalizeController<UserTranslation extends Translation = DefaultTranslation> implements ReactiveController {
    host: ReactiveControllerHost & HTMLElement;
    constructor(host: ReactiveControllerHost & HTMLElement);
    hostConnected(): void;
    hostDisconnected(): void;
    dir(): string;
    lang(): string;
    term<K extends keyof UserTranslation>(key: K, ...args: FunctionParams<UserTranslation[K]>): string;
    date(dateToFormat: Date | string, options?: Intl.DateTimeFormatOptions): string;
    number(numberToFormat: number | string, options?: Intl.NumberFormatOptions): string;
    relativeTime(value: number, unit: Intl.RelativeTimeFormatUnit, options?: Intl.RelativeTimeFormatOptions): string;
}
