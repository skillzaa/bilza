import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import RGrid from "../components/rGrid/rGrid.js";
import FillRect from "../components/fillRect/fillRect.js";
import Counter from "../components/counter/counter.js";
import Circle from "../components/circle/circle.js";
import BgShapes from "../components/bgShapes/bgShapes.js";
import List from "../components/list/list.js";
import Line from "../components/line/line.js";
import Lines from "../components/lines/lines.js";
import Rect from "../components/rect/rect.js";
import SlideHL from "../components/slideHL/slideHL.js";
export default class CompFactory {
    private insert;
    constructor(insert: (comp: IComponent) => IComponent);
    slideHL(startTimeSeconds?: number, endTimeSeconds?: number, contentHdg?: string, themeColor?: string): SlideHL;
    bgShapes(count?: number): BgShapes;
    text(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string, x?: number, y?: number): Text;
    rect(): Rect;
    fillRect(): FillRect;
    lines(x?: number, y?: number): Lines;
    line(x1?: number, y1?: number, x2?: number, y2?: number, color?: string, lineWidth?: number): Line;
    list(msStart?: number, msEnd?: number, x?: number, y?: number, widthPerc?: number): List;
    grid(msStart?: number, msEnd?: number): Grid;
    rGrid(msStart?: number, msEnd?: number): RGrid;
    counter(x?: number, y?: number, msEnd?: number): Counter;
    circle(x?: number, y?: number): Circle;
}
//# sourceMappingURL=compFactory.d.ts.map