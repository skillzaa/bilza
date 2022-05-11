import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
export default class FillRect extends Component<ObjectData> {
    constructor(duration?: number, x?: number, y?: number, widthPercent?: number, heightPercent?: number, colorHex?: string);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=fillRect.d.ts.map