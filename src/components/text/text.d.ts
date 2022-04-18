import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import { XAlignment } from "./xAlignment.js";
import { YAlignment } from "./yAlignment.js";
export default class Text extends Component<ObjectData> {
    xAlignmentOptions: typeof XAlignment;
    yAlignmentOptions: typeof YAlignment;
    constructor(content?: string, color?: string, x?: number, y?: number, widthPercent?: number, heightPercent?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private setFontSize;
    drawMargin(p: Pack): boolean;
    drawBg(p: Pack): boolean;
    factorsWOFontSize(): number;
    private getX;
    private getY;
}
//# sourceMappingURL=text.d.ts.map