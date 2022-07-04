import XyBaseAdaptor from "./AniNoPerc.js";
export default class AniNoYPerc extends XyBaseAdaptor {
    constructor(defaultValue?: number);
    init(usePercentages: boolean, canvasHeight: number): void;
    set(n: number): void;
    initSetInitValue(usePercentages: boolean, canvasWidth: number): void;
    initJumpBetween(usePercentages: boolean, canvasHeight: number): void;
    initRandom(usePercentages: boolean, canvasHeight: number): void;
    initVibrate(usePercentages: boolean, canvasHeight: number): void;
    initGoto(usePercentages: boolean, canvasHeight: number): void;
    initAnimate(usePercentages: boolean, canvasHeight: number): void;
    private percToY;
}
//# sourceMappingURL=AniNoYPerc.d.ts.map