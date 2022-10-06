import Engine from "../engine/engine.js";
import CompFactory from "./compFactory.js";
import BackgroundDb from "../components/background/backgroundDb.js";
export default class Bilza {
    background: BackgroundDb;
    private engine;
    private comps;
    private bil;
    constructor(canvasId?: string, canvasWidthPerc?: number);
    add(secStart: number, secEnd: number): CompFactory;
    alwaysOn(): CompFactory;
    append(duration: number): CompFactory;
    init(): void;
    draw(timeSec?: number): void;
    start(): void;
    stop(): void;
    getEngine(): Engine | null;
    resizeCanvas(): void;
}
//# sourceMappingURL=bilza.d.ts.map