import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import Text from "../text/text.js";
export default class Counter extends Component<ObjectData> {
    private tt;
    hdg: Text;
    constructor(startSecond?: number, endSecond?: number, loc?: string);
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelat: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=counter.d.ts.map