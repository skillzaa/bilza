import { Pack } from "../Bilza.js";
import BilzaTimer from "./02bilzaTimer.js";
export default class BilzaCanvasSetup extends BilzaTimer {
    protected pack: Pack;
    protected canvasId: string;
    constructor(canvasId: string, canvasWidth: number, canvasHeight: number, timeEnd: number);
    setCanvas(width?: number, height?: number): void;
    getCanvasHeight(): number;
    getCanvasWidth(): number;
}
//# sourceMappingURL=03bilzaCanvasSetup.d.ts.map