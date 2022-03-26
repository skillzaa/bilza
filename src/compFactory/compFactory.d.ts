import { IDrawable } from "../index.js";
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import List from "../components/list/list.js";
import AddTextTemplates from "./addTextTemplates.js";
export default class CompFactory {
    private addToArray;
    textTempl: AddTextTemplates;
    constructor(comps?: IDrawable[]);
    text(content?: string, fontColor?: string, fontSize?: number, msStart?: number, msEnd?: number, x?: number, y?: number): Text;
    list(x?: number, y?: number, fontSize?: number, msStart?: number, msEnd?: number): List;
    grid(msStart?: number, msEnd?: number): Grid;
    counter(x?: number, y?: number, msEnd?: number): void;
    circle(x?: number, y?: number): void;
    randomBgShapes(): void;
    spit(): IDrawable[];
}
//# sourceMappingURL=compFactory.d.ts.map