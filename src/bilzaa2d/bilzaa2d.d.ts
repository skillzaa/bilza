import IDrawable from "../design/IDrawable.js";
import Background from "./background.js";
import Components from "./components.js";
export default class Bilzaa2d {
    private comps;
    private pack;
    private frame;
    totalFrames: number;
    background: Background;
    components: Components;
    constructor();
    private draw;
    private drawMiddlegroundComps;
    private drawBackgroundComps;
    add_comp(comp: IDrawable): IDrawable;
    start(): void;
}
//# sourceMappingURL=bilzaa2d.d.ts.map