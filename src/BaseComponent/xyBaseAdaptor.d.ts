import PreInitGoto from "./designBC/preInitGoto.js";
import PreInitAnimate from "./designBC/preInitAnimate.js";
import PreInitVibrate from "./designBC/preInitVibrate.js";
export default class XyBaseAdaptor {
    protected preInitGotos: PreInitGoto[];
    protected preInitAnimates: PreInitAnimate[];
    protected preInitVibrates: PreInitVibrate[];
    private _XorY;
    constructor();
    update(msDelta: number): void;
    value(): number;
    goto(atSecond: number, value: number): void;
    baseGoto(atSecond: number, value: number): void;
    vibrate(from: number, to: number, xValue: number, offset: number, delay: number): void;
    baseVibrate(from: number, to: number, xValue: number, offset: number, delay: number): void;
    animate(startTime: number, endTime: number, startValue: number, endValue: number): void;
    baseAnimate(startTime: number, endTime: number, startValue: number, endValue: number): void;
}
//# sourceMappingURL=xyBaseAdaptor.d.ts.map