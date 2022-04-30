import { Component, Pack } from "../../Bilza.js";
import Text from "../text/text.js";
import { ObjectData } from "./DataFn.js";
export default class List extends Component<ObjectData> {
    private pvtFontSize;
    constructor(msStart?: number, msEnd?: number, x?: number, y?: number, dynWidth?: number);
    width(p: Pack): number;
    height(p: Pack, perc?: number): number;
    init(p: Pack): boolean;
    private assignFontSizeToAll;
    update(msDelta: number, p: Pack): boolean;
    initXY(p: Pack): boolean;
    private getItemX;
    private shrinkToFitVertically;
    draw(p: Pack): boolean;
    private drawBorder;
    private drawBg;
    addItem(content?: string): void;
    setX(item: Text, p: Pack): number;
    private getSmallestFontSize;
    private applyDim;
    private applyHighlight;
}
//# sourceMappingURL=list.d.ts.map