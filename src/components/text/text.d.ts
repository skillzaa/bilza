import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import { XAlignment } from "../compsDesign/xAlignment.js";
import { YAlignment } from "../compsDesign/yAlignment.js";
export default class Text extends Component<ObjectData> {
    xAlignmentOptions: typeof XAlignment;
    yAlignmentOptions: typeof YAlignment;
    constructor(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    private drawBorder;
    private drawBg;
    private drawContent;
    private getX;
    private getY;
}
//# sourceMappingURL=text.d.ts.map