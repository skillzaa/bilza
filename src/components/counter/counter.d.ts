import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
export default class Counter extends Component<ObjectData> {
    constructor(msStart?: number, msEnd?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelat: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=counter.d.ts.map