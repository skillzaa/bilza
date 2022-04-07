import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import FillRect from "../components/fillRect/fillRect.js";
import Counter from "../components/counter/counter.js";
import Circle from "../components/circle/circle.js";
import RandomBgShapes from "../components/randomBgShapes/randomBgShapes.js";
import List from "../components/list/list.js";
import Line from "../components/line/line.js";
import Lines from "../components/lines/lines.js";
import Rect from "../components/rect/rect.js";
import Txt from "../components/txt/txt.js";
import TextComp from "../composites/textComp/textComp.js";
import TextTemplates from "./textTemplates.js";
import GridTemplates from "./gridTemplates.js";
export default class CompFactory {
    private addToArray;
    textTempl: TextTemplates;
    gridTempl: GridTemplates;
    constructor(comps?: IComponent[]);
    textComp(content?: string): TextComp;
    txt(content?: string): Txt;
    rect(): Rect;
    fillRect(): FillRect;
    lines(x?: number, y?: number): Lines;
    line(x1?: number, y1?: number, x2?: number, y2?: number, color?: string, lineWidth?: number): Line;
    text(content?: string, fontColor?: string, fontSize?: number, msStart?: number, msEnd?: number, x?: number, y?: number): Text;
    list(x?: number, y?: number, fontSize?: number, msStart?: number, msEnd?: number): List;
    grid(msStart?: number, msEnd?: number): Grid;
    counter(x?: number, y?: number, msEnd?: number): Counter;
    circle(x?: number, y?: number): Circle;
    randomBgShapes(): RandomBgShapes;
    spit(): IComponent[];
}
//# sourceMappingURL=compFactory.d.ts.map