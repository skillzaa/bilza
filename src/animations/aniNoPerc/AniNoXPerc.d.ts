import XyBaseAdaptor from "./AniNoPerc.js";
export default class AniNoXPerc extends XyBaseAdaptor {
    constructor();
    init(usePercentages: boolean, canvasWidth: number): void;
    initVibrate(usePercentages: boolean, canvasWidth: number): void;
    initRandom(usePercentages: boolean, canvasWidth: number): void;
    initJumpBetween(usePercentages: boolean, canvasWidth: number): void;
    initGoto(usePercentages: boolean, canvasWidth: number): void;
    initAnimate(usePercentages: boolean, canvasWidth: number): void;
    private percToX;
}
//# sourceMappingURL=AniNoXPerc.d.ts.map