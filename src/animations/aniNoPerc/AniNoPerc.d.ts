import AniNoPercBase from "./AniNoPercBase.js";
export default class AniNoPerc extends AniNoPercBase {
    canvasWidthHeight: number | null;
    constructor(defaultValue?: number);
    init(usePercentages: boolean, canvasWidthHeight: number): void;
    set(n: number): void;
    initSetInitValue(): void;
    initVibrate(): void;
    initRandom(): void;
    initJumpBetween(): void;
    initGoto(): void;
    initAnimate(): void;
    private percToPix;
}
//# sourceMappingURL=AniNoPerc.d.ts.map