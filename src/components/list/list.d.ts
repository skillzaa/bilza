import { Component, Pack } from "../../Bilza.js";
import Text from "../text/text.js";
import { ObjectData } from "./DataFn.js";
export default class List extends Component<ObjectData> {
    constructor(msStart?: number, msEnd?: number, x?: number, y?: number, dynWidth?: number);
    width(p: Pack): number;
    height(p: Pack, perc?: number): number;
    init(p: Pack): boolean;
    update(ms: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    addItem(content?: string): void;
    setX(item: Text, p: Pack): number;
    private getSmallestFontSize;
}
//# sourceMappingURL=list.d.ts.map