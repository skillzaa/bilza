import { IComponent } from "../Bilza.js";
import Grid from "../components/grid/grid.js";
export default class GridTemplates {
    private insert;
    constructor(insert: (comp: IComponent) => IComponent);
    dashed(linesColor?: string): Grid;
    demo(): Grid;
    simple(linesColor?: string): Grid;
}
//# sourceMappingURL=gridTemplates.d.ts.map