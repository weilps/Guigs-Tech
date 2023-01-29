import '../translations/en';
import { LocalizeController as DefaultLocalizationController } from '@shoelace-style/localize';
import type { Translation as DefaultTranslation } from '@shoelace-style/localize';
export declare class LocalizeController extends DefaultLocalizationController<Translation> {
}
export { registerTranslation } from '@shoelace-style/localize';
export interface Translation extends DefaultTranslation {
    $code: string;
    $name: string;
    $dir: 'ltr' | 'rtl';
    clearEntry: string;
    close: string;
    copy: string;
    numOptionsSelected: (num: number) => string;
    currentValue: string;
    hidePassword: string;
    loading: string;
    progress: string;
    remove: string;
    resize: string;
    scrollToEnd: string;
    scrollToStart: string;
    selectAColorFromTheScreen: string;
    showPassword: string;
    toggleColorFormat: string;
}
