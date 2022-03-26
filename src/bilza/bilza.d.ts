import { CompFactory, IDrawable } from "../index.js";
import Background from "./background.js";
import CompArrayObj from "./compsArrayObj.js";
export default class Bilza extends CompArrayObj {
    private pack;
    private interval;
    private canvasId;
    private msPerFrame;
    private timeStart;
    private timeEnd;
    add: CompFactory;
    background: Background;
    constructor(canvasId?: string, canvasWidth?: number, canvasHeight?: number, timeEnd?: number);
    setCanvas(width?: number, height?: number): void;
    getTimeEnd(): number;
    setTimeEnd(n: number): number;
    getCanvasHeight(): () => number;
    getCanvasWidth(): () => number;
    draw(): boolean;
    chqCollision(x: number, y: number): IDrawable | null;
    private getMsDelta;
    start(): boolean;
    stop(): void;
    mergeClip(clip: IDrawable[]): boolean;
}
//# sourceMappingURL=bilza.d.ts.map