import Axis from "../axis/axis.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import { XAlignment } from "./xAlignment.js";
import PreInitIncDecXAxis from "./preInitIncDecXAxis.js";
import IFilter from "../IFilter.js";
export default class XAxis extends Axis {
    readonly xAlignmentOptions: typeof XAlignment;
    xAlign: XAlignment;
    private _ret_value;
    protected _set_value: number | null;
    protected preInitIncDecArray: PreInitIncDecXAxis[];
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
    animate(from?: number, to?: number, startValue?: number | OffScreenXOpt, endValue?: number | OffScreenXOpt): void;
    protected initIncDec(): void;
    private runAnimations;
    protected checkNonNull(n: null | number): number;
    protected xPercToPix(perc: number): number;
    protected newIncrement(from: number, to: number, startValue: number, endValue: number): void;
    protected newDecrement(from: number, to: number, startValue: number, endValue: number): void;
    private translateOffScreen;
    private adjestAlign;
}
//# sourceMappingURL=xAxis.d.ts.map