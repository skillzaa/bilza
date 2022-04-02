import { Pack } from "../Bilza.js";
import BilzaTimer from "./bilzaTimer.js";
export default class BilzaCanvasSetup extends BilzaTimer {
    protected pack: Pack;
    protected canvasId: string;
    dynamicResizing: boolean;
    constructor(canvasId?: string, canvasWidth?: number, canvasHeight?: number, timeEnd?: number);
    setCanvas(width?: number, height?: number): void;
    getCanvasHeight(): number;
    getCanvasWidth(): number;
}
//# sourceMappingURL=bilzaCanvasSetup.d.ts.map