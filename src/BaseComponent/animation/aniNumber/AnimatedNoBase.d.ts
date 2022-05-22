import IAnimatedNo from "./IAnimatedNo.js";
export default class AnimatedNoBase implements IAnimatedNo {
    private _ret_value;
    private _set_value;
    private preInitIncDec;
    private animations;
    constructor(defaultValue?: number);
    init(): boolean;
    update(msDelta: number): boolean;
    value(): number;
    setValue(n: number): number;
    animate(from?: number, to?: number, startValue?: number, endValue?: number): void;
    private initIncDec;
    private runSetValue;
    private runAnimations;
    private notInitError;
    private checkNonNull;
}
//# sourceMappingURL=AnimatedNoBase.d.ts.map