import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import FillRect from "../components/fillRect/fillRect.js";
import Counter from "../components/counter/counter.js";
import List from "../components/list/list.js";
import TextTemplates from "./textTemplates.js";
import GridTemplates from "./gridTemplates.js";
export default class CompFactory {
    private addToArray;
    textTempl: TextTemplates;
    gridTempl: GridTemplates;
    constructor(comps?: IComponent[]);
    fillRect(): FillRect;
    text(content?: string, fontColor?: string, fontSize?: number, msStart?: number, msEnd?: number, x?: number, y?: number): Text;
    list(x?: number, y?: number, fontSize?: number, msStart?: number, msEnd?: number): List;
    grid(msStart?: number, msEnd?: number): Grid;
    counter(x?: number, y?: number, msEnd?: number): Counter;
    spit(): IComponent[];
}
//# sourceMappingURL=compFactory.d.ts.map