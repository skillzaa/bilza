import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
export default class Line extends Component<ObjectData> {
    constructor(x1?: number, y1?: number, x2?: number, y2?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=line.d.ts.map