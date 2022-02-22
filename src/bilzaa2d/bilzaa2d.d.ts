import IDrawable from "./design/IDrawable.js";
import Background from "./background.js";
export default class Bilzaa2d {
    comps: IDrawable[];
    private pack;
    frame: number;
    interval: number;
    fps: number;
    frameEnd: number;
    background: Background;
    constructor(frameEnd?: number);
    private draw;
    private drawMiddlegroundComps;
    private drawBackgroundComps;
    private drawForegroundComps;
    add(comp: IDrawable): IDrawable;
    start(): void;
    stop(): void;
}
//# sourceMappingURL=bilzaa2d.d.ts.map