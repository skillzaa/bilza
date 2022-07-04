import AniNoPerc from "./AniNoPerc.js";
export default class AniNoXPerc extends AniNoPerc {
    canvasWidth: number | null;
    constructor(defaultValue?: number);
    init(usePercentages: boolean, canvasWidth: number): void;
    set(n: number): void;
    initSetInitValue(): void;
    initVibrate(): void;
    initRandom(): void;
    initJumpBetween(): void;
    initGoto(): void;
    initAnimate(): void;
    private percToX;
}
//# sourceMappingURL=AniNoXPerc.d.ts.map