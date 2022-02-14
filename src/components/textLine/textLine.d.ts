import { Component, Pack, Style, Transition } from "../../bilzaa2d/index.js";
import { TextLineData } from "./DataFn.js";
export default class TextLine extends Component {
    compData: Transition<TextLineData>;
    styleText: Style;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    update(frame: number, p: Pack): boolean;
}
//# sourceMappingURL=textLine.d.ts.map