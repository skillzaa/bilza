import { Component, Pack, Style } from "../../bilzaa2d/index.js";
import ContentObject from "./contentObject.js";
import { ObjectData } from "./DataFn.js";
export default class TextGroup extends Component {
    private compData;
    styleText: Style;
    styleUnderline: Style;
    styleOverline: Style;
    d: ObjectData;
    contentObjs: ContentObject[];
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
    getContentObj(content: string): ContentObject[];
    setFontColor(lookfor: string, color?: string): void;
    setFontSize(lookfor: string, fontSize?: number): void;
}
//# sourceMappingURL=textGroup.d.ts.map