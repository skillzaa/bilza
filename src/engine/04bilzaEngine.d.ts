import { CompFactory, IComponent } from "../Bilza.js";
import Background from "./background.js";
import BilzaCanvasSetup from "./03bilzaCanvasSetup.js";
export default class Bilza extends BilzaCanvasSetup {
    add: CompFactory;
    background: Background;
    constructor(canvasId?: string, canvasWidth?: number, canvasHeight?: number, timeEnd?: number);
    start(): boolean;
    draw(): boolean;
    chqCollision(x: number, y: number): IComponent | null;
    mergeClip(clip: IComponent[]): boolean;
    dynamicCanvas(widthInPercent?: number, heightInPercent?: number): boolean;
}
//# sourceMappingURL=04bilzaEngine.d.ts.map