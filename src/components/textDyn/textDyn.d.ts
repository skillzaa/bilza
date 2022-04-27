import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import { XAlignment } from "../compsDesign/xAlignment.js";
import { YAlignment } from "../compsDesign/yAlignment.js";
export default class TextDyn extends Component<ObjectData> {
    xAlignmentOptions: typeof XAlignment;
    yAlignmentOptions: typeof YAlignment;
    constructor(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string, x?: number, y?: number, widthPercent?: number, heightPercent?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    setDynamicFontSize(p: Pack): number;
    private drawBorder;
    private drawBg;
    private drawContent;
    private getX;
    private getY;
}
//# sourceMappingURL=textDyn.d.ts.map