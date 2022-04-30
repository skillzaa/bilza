import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import Text from "../text/text.js";
export default class SlideHL extends Component<ObjectData> {
    hdg: Text;
    lis: Text[];
    constructor(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string);
    addItem(content: string, startDim?: boolean, unDimSecond?: number): Text;
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    drawLis(p: Pack): void;
}
//# sourceMappingURL=slideHL-old.d.ts.map