import { Component, Pack, Style } from "../../bilzaa2d/index.js";
import TextTemplates from "./textTemplates.js";
export { TextTemplates };
import { XAlignment, YAlignment } from "../../bilzaa2d/design/alignment.js";
export default class Text extends Component {
    x: number;
    xAlignment: XAlignment;
    yAlignment: YAlignment;
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
    private finalX;
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    private drawHighlight;
    private drawUnderline;
    private drawOverline;
    private drawContent;
}
//# sourceMappingURL=text.d.ts.map