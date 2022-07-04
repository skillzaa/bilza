import AniNoPerc from "./AniNoPerc.js";
export default class AniNoYPerc extends AniNoPerc {
    canvasHeight: number | null;
    constructor(defaultValue?: number);
    init(usePercentages: boolean, canvasHeight: number): void;
    set(n: number): void;
    initSetInitValue(): void;
    initVibrate(): void;
    initRandom(): void;
    initJumpBetween(): void;
    initGoto(): void;
    initAnimate(): void;
    private percToY;
}
//# sourceMappingURL=AniNoYPerc.d.ts.map