import PreInitGoto from "./designNoPerc/preInitGoto.js";
import PreInitAnimate from "./designNoPerc/preInitAnimate.js";
import PreInitVibrate from "./designNoPerc/preInitVibrate.js";
import PreInitRandom from "./designNoPerc/preInitRandom.js";
import PreInitJumpBetween from "./designNoPerc/preInitJumpBetween.js";
export default class AniNoPerc {
    protected preInitGotos: PreInitGoto[];
    protected preInitAnimates: PreInitAnimate[];
    protected preInitVibrates: PreInitVibrate[];
    protected preInitRandoms: PreInitRandom[];
    protected preInitJumpBetweens: PreInitJumpBetween[];
    private _XorY;
    constructor(defaultValue?: number);
    update(msDelta: number): void;
    value(): number;
    jumpBetween(startTimeSec: number, endTimeSec: number, pointOne?: number, pointTwo?: number, skipFrames?: number): void;
    baseJumpBetween(startTimeSec: number, endTimeSec: number, pointOne?: number, pointTwo?: number, skipFrames?: number): void;
    goto(atSecond: number, value: number): void;
    baseGoto(atSecond: number, value: number): void;
    vibrate(from: number, to: number, seed: number, offset: number, delay: number): void;
    baseVibrate(from: number, to: number, xValue: number, offset: number, delay: number): void;
    random(startTimeSec: number, endTimeSec: number, min?: number, max?: number, skipXFrames?: number): void;
    baseRandom(startTimeSec: number, endTimeSec: number, min?: number, max?: number, skipXFrames?: number): void;
    animate(startTime: number, endTime: number, startValue: number, endValue: number): void;
    baseAnimate(startTime: number, endTime: number, startValue: number, endValue: number): void;
}
//# sourceMappingURL=AniNoPerc.d.ts.map