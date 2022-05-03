import { Pack } from "../Bilza.js";
import BilzaTimer from "./02bilzaTimer.js";
export default class BilzaCanvasSetup extends BilzaTimer {
    protected pack: Pack;
    protected canvasId: string;
    constructor(canvasId: string, canvasWidth: number, canvasHeight: number | null | undefined, timeEndSec: number);
    setCanvas(width?: number, height?: number | null): void;
    getCanvasHeight(): number;
    getCanvasWidth(): number;
}
//# sourceMappingURL=03bilzaCanvasSetup.d.ts.map