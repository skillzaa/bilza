import { Component, Pack } from "../Bilza.js";
import { ObjectData } from "./DataFn.js";
export default class TestComp extends Component<ObjectData> {
    constructor(duration?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=testComp.d.ts.map