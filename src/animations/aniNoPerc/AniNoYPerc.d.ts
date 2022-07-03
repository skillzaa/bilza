import XyBaseAdaptor from "./AniNoPerc.js";
export default class AniNoYPerc extends XyBaseAdaptor {
    constructor();
    init(usePercentages: boolean, canvasHeight: number): void;
    initJumpBetween(usePercentages: boolean, canvasHeight: number): void;
    initRandom(usePercentages: boolean, canvasHeight: number): void;
    initVibrate(usePercentages: boolean, canvasHeight: number): void;
    initGoto(usePercentages: boolean, canvasHeight: number): void;
    initAnimate(usePercentages: boolean, canvasHeight: number): void;
    private percToY;
}
//# sourceMappingURL=AniNoYPerc.d.ts.map