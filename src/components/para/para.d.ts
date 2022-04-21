import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import Text from "../text/text.js";
export default class Para extends Component<ObjectData> {
    lines: Text[];
    constructor(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string);
    addLine(content: string): Text;
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    drawBorder(p: Pack): boolean;
    drawBg(p: Pack): boolean;
}
//# sourceMappingURL=para.d.ts.map