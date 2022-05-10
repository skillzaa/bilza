import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
export default class Line extends Component<ObjectData> {
    constructor(startTime?: number, duration?: number, x1?: number, y1?: number, x2?: number, y2?: number, color?: string, lineWidth?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=line.d.ts.map