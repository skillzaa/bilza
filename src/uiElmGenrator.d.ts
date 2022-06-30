export default class UiElmGen {
    constructor(defaultClickEvent?: null);
    checkBox(name: any, defaultValue?: boolean): void;
    colorPicker(name: any, defaultValue?: string): void;
    textInput(name: any, defaultValue?: string): void;
    numberInput(name: any, defaultValue?: number): void;
    submitFormBtn(caption?: string, className?: string): void;
    cancelFormBtn(caption?: string, className?: string): void;
    label(title?: string): void;
    titleLabel(title?: string): void;
    customDialogDivColumn(className?: string): HTMLDivElement;
    hr(): void;
    randomId(): number;
    display(): void;
}
//# sourceMappingURL=uiElmGenrator.d.ts.map