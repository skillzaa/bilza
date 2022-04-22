import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import RGrid from "../components/rGrid/rGrid.js";
import FillRect from "../components/fillRect/fillRect.js";
import Counter from "../components/counter/counter.js";
import Circle from "../components/circle/circle.js";
import BgShapes from "../components/bgShapes/bgShapes.js";
import Line from "../components/line/line.js";
import Lines from "../components/lines/lines.js";
import Rect from "../components/rect/rect.js";
import SlideHL from "../components/slideHL/slideHL.js";
import SlideHP from "../components/slideHP/slideHP.js";
import TextTemplates from "./textTemplates.js";
import GridTemplates from "./gridTemplates.js";
export default class CompFactory {
    private addToArray;
    textTempl: TextTemplates;
    gridTempl: GridTemplates;
    constructor(comps?: IComponent[]);
    slideHL(startTimeSeconds?: number, endTimeSeconds?: number, contentHdg?: string, themeColor?: string): SlideHL;
    slideHP(startTimeSeconds?: number, endTimeSeconds?: number, contentHdg?: string, themeColor?: string): SlideHP;
    bgShapes(count?: number): BgShapes;
    text(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string, x?: number, y?: number, widthPercent?: number, heightPercent?: number): Text;
    rect(): Rect;
    fillRect(): FillRect;
    lines(x?: number, y?: number): Lines;
    line(x1?: number, y1?: number, x2?: number, y2?: number, color?: string, lineWidth?: number): Line;
    grid(msStart?: number, msEnd?: number): Grid;
    rGrid(msStart?: number, msEnd?: number): RGrid;
    counter(x?: number, y?: number, msEnd?: number): Counter;
    circle(x?: number, y?: number): Circle;
    spit(): IComponent[];
}
//# sourceMappingURL=compFactory.d.ts.map