import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
export default class RandomBgShapes extends Component<ObjectData> {
    constructor(widthPercent?: number, heightPercent?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    resize(width: number, height: number): number;
}
//# sourceMappingURL=rectangle.d.ts.map