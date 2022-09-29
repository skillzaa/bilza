export default class UiElmGen {
    id: number;
    parentDiv: HTMLDivElement;
    ids: string[];
    constructor(parentDiv: HTMLDivElement);
    colorPicker(name: string, ref: {}, prop: string): void;
    randomId(): number;
    numberInput(name: string, defaultValue: number | undefined, ref: {}, prop: string): void;
    label(title?: string): void;
    titleLabel(title?: string): void;
    hr(): void;
}
//# sourceMappingURL=uiElmGen.d.ts.map