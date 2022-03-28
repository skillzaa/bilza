import { Component, Pack } from "../../Bilza.js";
import Text from "../text/text.js";
import { ObjectData } from "./DataFn.js";
export default class List extends Component<ObjectData> {
    private widthExtra;
    constructor(x?: number, y?: number, fontSize?: number, msStart?: number, msEnd?: number);
    width(p: Pack): number;
    height(p: Pack, perc?: number): number;
    update(ms: number, p: Pack): boolean;
    updateFocus(): void;
    updateHighlight(): void;
    updateDim(): void;
    draw(p: Pack): boolean;
    addItem(content?: string): void;
    setX(item: Text, p: Pack): number;
}
//# sourceMappingURL=list.d.ts.map