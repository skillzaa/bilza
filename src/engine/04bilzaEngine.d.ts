import { IComponent } from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "./background.js";
import BilzaCanvasSetup from "./03bilzaCanvasSetup.js";
export default class Bilza extends BilzaCanvasSetup {
    add: CompFactory;
    background: Background;
    constructor(canvasId?: string, canvasWidth?: number, canvasHeight?: number, timeEnd?: number);
    start(): boolean;
    draw(): boolean;
    drawEvent(msDelta: number): boolean;
    mergeClip(clip: IComponent[]): boolean;
    dynamicCanvas(widthInPercent?: number, heightInPercent?: number): boolean;
}
//# sourceMappingURL=04bilzaEngine.d.ts.map