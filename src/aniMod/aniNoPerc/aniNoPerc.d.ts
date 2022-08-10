import AniNumber from "../aniNumber/aniNumber.js";
import PreInitGoto from "./designNoPerc/preInitGoto.js";
import PreInitAnimate from "./designNoPerc/preInitAnimate.js";
import PreInitRandom from "./designNoPerc/preInitRandom.js";
import PreInitJumpBetween from "./designNoPerc/preInitJumpBetween.js";
import PreInitOscilate from "./designNoPerc/preInitoscilate.js";
export default class AniNoPercBase extends AniNumber {
    protected usePercentages: boolean | null;
    protected preInitGotos: PreInitGoto[];
    protected preInitAnimates: PreInitAnimate[];
    protected preInitRandoms: PreInitRandom[];
    protected preInitJumpBetweens: PreInitJumpBetween[];
    protected preInitOscilate: PreInitOscilate[];
    canvasWidthHeight: number | null;
    constructor(defaultValue?: number);
    init(usePercentages: boolean, canvasWidthHeight: number): void;
    initSet(): void;
    jumpBetween(msDeltaStart: number, msDeltaEnd: number, pointOne?: number, pointTwo?: number, delayInMS?: number): void;
    goto(msDelta: number, value: number): void;
    random(startTimeSec: number, endTimeSec: number, min?: number, max?: number, skipXFrames?: number): void;
    animate(msDeltaStart: number, msDeltaEnd: number, startValue: number, endValue: number): void;
    oscillate(startTimeSec: number, endTimeSec: number, startValue?: number, endValue?: number, speed?: number): void;
    protected percToPix(perc: number): number;
    initOscilate(): void;
    initRandom(): void;
    initJumpBetween(): void;
    initGoto(): void;
    initAnimate(): void;
}
//# sourceMappingURL=aniNoPerc.d.ts.map