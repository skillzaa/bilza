import { Component, Pack, Style } from "../../bilzaa2d/index.js";
import Word from "../../components/text/text.js";
import { ObjectData } from "./DataFn.js";
export default class TextGroup extends Component {
    private compData;
    styleText: Style;
    styleUnderline: Style;
    styleOverline: Style;
    d: ObjectData;
    contentObjs: Word[];
    constructor(content: string);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    update(frame: number, p: Pack): boolean;
    private drawBackground;
    private drawBorder;
    private drawUnderline;
    private drawOverline;
    private drawContent;
    getContentObj(content: string): Word[];
    setFontColor(lookfor: string, color?: string): void;
    setFontSize(lookfor: string, fontSize?: number): void;
    underline(index: number): void;
    overline(index: number): void;
}
//# sourceMappingURL=textGroup.d.ts.map