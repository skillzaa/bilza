import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import { XAlignment } from "./xAlignment.js";
import { YAlignment } from "./yAlignment.js";
export default class Text extends Component<ObjectData> {
    xAlignmentOptions: typeof XAlignment;
    yAlignmentOptions: typeof YAlignment;
    constructor(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string, x?: number, y?: number, widthPercent?: number, heightPercent?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    setDynamicFontSize(p: Pack): number;
    private drawBorder;
    private drawBg;
    private drawContent;
    private getX;
    private getY;
}
//# sourceMappingURL=text.d.ts.map