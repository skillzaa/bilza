import Engine from "../engine/engine.js";
import CompFactory from "./compFactory.js";
import BackgroundDb from "../components/background/backgroundDb.js";
import LineShapes from "./lineShapes.js";
export default class Bilza {
    background: BackgroundDb;
    private engine;
    private comps;
    private bil;
    lineShapes: LineShapes;
    constructor(canvasId?: string, canvasWidthPerc?: number);
    add(secStart: number, secEnd: number): CompFactory;
    alwaysOn(): CompFactory;
    append(duration: number): CompFactory;
    init(): void;
    draw(timeSec?: number): void;
    start(): void;
    stop(): void;
    getEngine(): Engine | null;
    resizeCanvas(wd: number, ht: number | null): void;
}
//# sourceMappingURL=bilza.d.ts.map