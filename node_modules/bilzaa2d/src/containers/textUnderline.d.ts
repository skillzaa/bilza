import { Component, Pack, Style, XAlignment } from "../bilzaa2d/index.js";
export default class TextUnderline extends Component {
    content: string;
    x: number;
    y: number;
    textColor: string;
    xAlignment: XAlignment;
    lineColor: string;
    styleText: Style;
    styleLine: Style;
    constructor(content?: string, x?: number, y?: number, textColor?: string, lineColor?: string, fontSize?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    dim(): void;
    lit(): void;
}
//# sourceMappingURL=textUnderline.d.ts.map