import PreInitGoto from "../designBC/preInitGoto.js";
import PreInitAnimate from "../designBC/preInitAnimate.js";
import PreInitVibrate from "../designBC/preInitVibrate.js";
import PreInitRandom from "../designBC/preInitRandom.js";
import PreInitJumpBetween from "../designBC/preInitJumpBetween.js";
export default class XyBaseAdaptor {
    protected preInitGotos: PreInitGoto[];
    protected preInitAnimates: PreInitAnimate[];
    protected preInitVibrates: PreInitVibrate[];
    protected preInitRandoms: PreInitRandom[];
    protected preInitJumpBetweens: PreInitJumpBetween[];
    private _XorY;
    constructor();
    update(msDelta: number): void;
    value(): number;
    set(n: number): void;
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
//# sourceMappingURL=xyBaseAdaptor.d.ts.map