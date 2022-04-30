import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
export default class List extends Component<ObjectData> {
    private pvtFontSize;
    private util;
    private drawUtil;
    constructor(msStart?: number, msEnd?: number, x?: number, y?: number, dynWidth?: number);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    initXY(p: Pack): boolean;
    private getItemX;
    private shrinkToFitVertically;
    draw(p: Pack): boolean;
    addItem(content?: string): void;
    width(p: Pack): number;
    height(p: Pack, perc?: number): number;
}
//# sourceMappingURL=list.d.ts.map