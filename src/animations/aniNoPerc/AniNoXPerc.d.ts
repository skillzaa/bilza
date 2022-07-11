import AniNoPercBase from "./AniNoPercBase.js";
export default class AniNoXPerc extends AniNoPercBase {
    canvasWidthHeight: number | null;
    constructor(defaultValue?: number);
    init(usePercentages: boolean, canvasWidthHeight: number): void;
    set(n: number): void;
    initSetInitValue(): void;
    initVibrate(): void;
}
//# sourceMappingURL=AniNoXPerc.d.ts.map