import IAnimatedNo from "./IAnimatedNo.js";
import { Pack } from "../../../Bilza.js";
export default class AnimatedNoBase implements IAnimatedNo {
    private _ret_value;
    private _set_value;
    private preInitMoves;
    private animations;
    private compWidth;
    private compHeight;
    constructor(compWidth: (p: Pack) => number, compHeight: (p: Pack) => number);
    init(p: Pack, startTime: number, endTime: number, duration: number): boolean;
    private initMoves;
    update(msDelta: number, p: Pack): boolean;
    runSetValue(): void;
    runAnimations(msDelta: number): void;
    notInitError(): void;
    setValue(n: number): number;
    animate(from?: number, to?: number, startValue?: number, endValue?: number): void;
    value(): number;
    private checkNonNull;
}
//# sourceMappingURL=AnimatedNoBase.d.ts.map