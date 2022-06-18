import PreInitIncDec from "./preInitIncDec.js";
import IFilter from "../../../../loc/IFilter.js";
export default class AnimatedNoBase {
    private _ret_value;
    protected _set_value: number | null;
    protected preInitIncDecArray: PreInitIncDec[];
    protected animations: IFilter[];
    protected compWidth: null | (() => number);
    protected compHeight: null | (() => number);
    protected canvasWidth: number | null;
    protected canvasHeight: number | null;
    constructor(defaultValue?: number);
    init(compWidth: () => number, compHeight: () => number, canvasWidth: number, canvasHeight: number): boolean;
    update(msDelta: number): boolean;
    value(): number;
    protected runSetValue(): void;
    setValue(n: number): void;
    animate(from?: number, to?: number, startValue?: number, endValue?: number): void;
    protected initIncDec(): void;
    private runAnimations;
    protected notInitError(): void;
    protected checkNonNull(n: null | number): number;
    protected newIncrement(from: number, to: number, startValue: number, endValue: number): void;
    protected newDecrement(from: number, to: number, startValue: number, endValue: number): void;
}
//# sourceMappingURL=AnimatedNoBase.d.ts.map