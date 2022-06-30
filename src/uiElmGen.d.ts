export default class UiElmGen {
    id: number;
    parentDiv: HTMLDivElement;
    ids: string[];
    constructor(parentDiv: HTMLDivElement);
    colorPicker(name: string, defaultValue?: string): void;
    randomId(): number;
    label(title?: string): void;
    titleLabel(title?: string): void;
    hr(): void;
}
//# sourceMappingURL=uiElmGen.d.ts.map