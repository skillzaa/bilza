import { XAlignOpt } from "./designBC/xAlignOpt.js";
import XyBaseAdaptor from "./xyBaseAdaptor.js";
export default class X extends XyBaseAdaptor {
    xAlign: XAlignOpt;
    readonly XAlignOpt: typeof XAlignOpt;
    constructor();
    init(usePercentages: boolean, canvasWidth: number): void;
    initVibrate(usePercentages: boolean, canvasWidth: number): void;
    initGoto(usePercentages: boolean, canvasWidth: number): void;
    initAnimate(usePercentages: boolean, canvasWidth: number): void;
    private percToX;
    aligned(width: number): number;
}
//# sourceMappingURL=x.d.ts.map