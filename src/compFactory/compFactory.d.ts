import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
export default class CompFactory {
    private insert;
    constructor(insert: (comp: IComponent) => IComponent);
    text(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string, x?: number, y?: number): Text;
    grid(msStart?: number, msEnd?: number): Grid;
}
//# sourceMappingURL=compFactory.d.ts.map