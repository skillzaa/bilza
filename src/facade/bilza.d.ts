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
    start(): void;
    stop(): void;
    draw(timeSec?: number): void;
    isRunning(): void;
    resizeCanvas(): void;
}
//# sourceMappingURL=bilza.d.ts.map