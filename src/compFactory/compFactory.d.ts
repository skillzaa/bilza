import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import Rectangle from "../components/rectangle/rectangle.js";
import GridR from "../components/gridR/gridR.js";
import Counter from "../components/counter/counter.js";
import Circle from "../components/circle/circle.js";
import RandomBgShapes from "../components/randomBgShapes/randomBgShapes.js";
import List from "../components/list/list.js";
import TextTemplates from "./textTemplates.js";
import GridTemplates from "./gridTemplates.js";
export default class CompFactory {
    private addToArray;
    textTempl: TextTemplates;
    gridTempl: GridTemplates;
    constructor(comps?: IComponent[]);
    rectangle(): Rectangle;
    text(content?: string, fontColor?: string, fontSize?: number, msStart?: number, msEnd?: number, x?: number, y?: number): Text;
    list(x?: number, y?: number, fontSize?: number, msStart?: number, msEnd?: number): List;
    grid(msStart?: number, msEnd?: number): Grid;
    gridR(msStart?: number, msEnd?: number): GridR;
    counter(x?: number, y?: number, msEnd?: number): Counter;
    circle(x?: number, y?: number): Circle;
    randomBgShapes(): RandomBgShapes;
    spit(): IComponent[];
}
//# sourceMappingURL=compFactory.d.ts.map