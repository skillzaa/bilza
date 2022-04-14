import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import { XAlignment } from "./xAlignment.js";
export default class Text extends Component<ObjectData> {
    xAlignmentOptions: typeof XAlignment;
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
}
//# sourceMappingURL=text.d.ts.map