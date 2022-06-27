import { YAlignOpt } from "./designBC/yAlignOpt.js";
import XyBaseAdaptor from "./xyBaseAdaptor.js";
export default class Y extends XyBaseAdaptor {
    yAlign: YAlignOpt;
    readonly YAlignOpt: typeof YAlignOpt;
    constructor();
    init(usePercentages: boolean, canvasHeight: number): void;
    initJumpBetween(usePercentages: boolean, canvasHeight: number): void;
    initRandom(usePercentages: boolean, canvasHeight: number): void;
    initVibrate(usePercentages: boolean, canvasHeight: number): void;
    initGoto(usePercentages: boolean, canvasHeight: number): void;
    initAnimate(usePercentages: boolean, canvasHeight: number): void;
    private percToY;
    aligned(height: number): number;
}
//# sourceMappingURL=y.d.ts.map