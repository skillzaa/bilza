import { CompFactory, IComponent } from "../Bilza.js";
import Background from "./background.js";
import BilzaCanvasSetup from "./bilzaCanvasSetup.js";
export default class Bilza extends BilzaCanvasSetup {
    add: CompFactory;
    background: Background;
    constructor(canvasId?: string, canvasWidth?: number, canvasHeight?: number, timeEnd?: number);
    start(): boolean;
    draw(): boolean;
    chqCollision(x: number, y: number): IComponent | null;
    mergeClip(clip: IComponent[]): boolean;
}
//# sourceMappingURL=bilzaEngine.d.ts.map