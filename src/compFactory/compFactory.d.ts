import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import Counter from "../components/counter/counter.js";
export default class CompFactory {
    private insert;
    constructor(insert: (comp: IComponent) => IComponent);
    text(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string, x?: number, y?: number, dynWidth?: number, dynHeight?: number): Text;
    grid(msStart?: number, msEnd?: number, colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): Grid;
    counter(msStart?: number, msEnd?: number, loc?: string): Counter;
}
//# sourceMappingURL=compFactory.d.ts.map