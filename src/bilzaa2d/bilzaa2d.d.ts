import IDrawable from "../design/IDrawable.js";
import Background from "./background.js";
import Grid from "../compscollection/grid.js";
import Text from "../compscollection/text.js";
export default class Bilzaa2d {
    private comps;
    private pack;
    private frame;
    totalFrames: number;
    background: Background;
    constructor();
    private draw;
    private drawMiddlegroundComps;
    private drawBackgroundComps;
    add_comp(comp: IDrawable): IDrawable;
    start(): void;
    addText(content: string): Text;
    addGrid(): Grid;
}
//# sourceMappingURL=bilzaa2d.d.ts.map