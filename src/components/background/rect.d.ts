import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
export default class Rect extends Component<ObjectData> {
    constructor(startTimeSeconds?: number, endTimeSeconds?: number, x?: number, y?: number, widthPercent?: number, heightPercent?: number, colorHex?: string);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map