import IDrawable from "./design/IDrawable.js";
import Background from "./background.js";
export default class Bilzaa2d {
    comps: IDrawable[];
    private pack;
    frame: number;
    interval: number;
    canvasHeight: number;
    canvasWidth: number;
    canvasId: string;
    fps: number;
    frameEnd: number;
    background: Background;
    constructor(canvasId?: string);
    init(): void;
    private draw;
    private drawMiddlegroundComps;
    private drawBackgroundComps;
    private drawForegroundComps;
    add(comp: IDrawable): IDrawable;
    start(): void;
    stop(): void;
}
//# sourceMappingURL=bilzaa2d.d.ts.map