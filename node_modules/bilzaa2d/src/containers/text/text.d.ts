import { Component, Pack, Style } from "../../bilzaa2d/index.js";
import { ObjectData } from "./DataFn.js";
export default class Text extends Component {
    private compData;
    styleText: Style;
    styleBackground: Style;
    styleBorder: Style;
    styleUnderline: Style;
    styleOverline: Style;
    d: ObjectData;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    update(frame: number, p: Pack): boolean;
    private drawBackground;
    private drawBorder;
    private drawUnderline;
    private drawOverline;
    private drawContent;
}
//# sourceMappingURL=text.d.ts.map