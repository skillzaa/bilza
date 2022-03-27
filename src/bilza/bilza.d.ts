import { CompFactory, IDrawable } from "../index.js";
import Background from "./background.js";
import BilzaCanvasSetup from "./bilzaCanvasSetup.js";
export default class Bilza extends BilzaCanvasSetup {
    add: CompFactory;
    background: Background;
    constructor(canvasId?: string, canvasWidth?: number, canvasHeight?: number, timeEnd?: number);
    start(): boolean;
    draw(): boolean;
    chqCollision(x: number, y: number): IDrawable | null;
    mergeClip(clip: IDrawable[]): boolean;
}
//# sourceMappingURL=bilza.d.ts.map