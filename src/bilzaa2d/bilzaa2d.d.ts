import IDrawable from "../design/IDrawable.js";
import Background from "./background.js";
import Grid from "../compscollection/grid.js";
import Text from "../compscollection/text.js";
export default class Bilzaa2d {
    comps: IDrawable[];
    private pack;
    frame: number;
    totalFrames: number;
    background: Background;
    constructor();
    draw(): boolean;
    drawBackgroundComps(): boolean;
    add_comp(comp: IDrawable): IDrawable;
    start(): void;
    addText(content: string, x: number, y: number): Text;
    addGrid(): Grid;
}
//# sourceMappingURL=bilzaa2d.d.ts.map