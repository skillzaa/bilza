import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
export default class Text extends Component<ObjectData> {
    constructor(content?: string, color?: string, x?: number, y?: number, widthPercent?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private setFontSizePerWidth;
    drawMargin(p: Pack): boolean;
    drawBg(p: Pack): boolean;
    factorsWOFontSize(): number;
}
//# sourceMappingURL=text.d.ts.map