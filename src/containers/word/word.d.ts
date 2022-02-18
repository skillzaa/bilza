import { Component, Pack, Style } from "../../bilzaa2d/index.js";
export default class Word extends Component {
    x: number;
    y: number;
    content: string;
    fontSize: number;
    fontColor: string;
    fontFamily: string;
    underline: boolean;
    underlineExtend: boolean;
    underlineColor: string;
    underlineWidth: number;
    overline: boolean;
    overlineExtend: boolean;
    overlineColor: string;
    overlineWidth: number;
    highlight: boolean;
    highlightExtend: boolean;
    highlightColor: string;
    shadow: boolean;
    shadowBlur: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowColor: string;
    style: Style;
    constructor(content: string);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    private drawHighlight;
    private drawUnderline;
    private drawOverline;
    private drawContent;
}
//# sourceMappingURL=word.d.ts.map