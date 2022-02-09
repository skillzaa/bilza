import Grid from "../corecomps/grid/grid.js";
import Text from "../corecomps/text/text.js";
import IDrawable from "./design/IDrawable.js";
export default class Components {
    private comps;
    constructor(comps: IDrawable[]);
    addText(content: string): Text;
    addGrid(): Grid;
}
//# sourceMappingURL=components.d.ts.map