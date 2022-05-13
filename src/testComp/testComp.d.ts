import { Component, Pack } from "../Bilza.js";
import { ObjectData } from "./DataFn.js";
export default class Rect extends Component<ObjectData> {
    constructor(duration?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=testComp.d.ts.map