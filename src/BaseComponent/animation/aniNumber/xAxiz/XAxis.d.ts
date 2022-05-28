import AnimatedNoBase from "../animatedNoBase/AnimatedNoBase.js";
import { XAlignment } from "./xAlignment.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import PreInitIncDecXAxis from "./preInitIncDecXAxis.js";
export default class XAxis extends AnimatedNoBase {
    readonly xAlignmentOptions: typeof XAlignment;
    xAlign: XAlignment;
    PreInitIncDecXAxisArray: PreInitIncDecXAxis[];
    protected _set_valueXAxis: number | null | OffScreenXOpt;
    protected _ret_valueXAxis: number;
    constructor(defaultValue: number);
    private translateOffScreen;
    value(): number;
    setValue(n: number | OffScreenXOpt): void;
    protected runSetValue(): void;
    animate(from?: number, to?: number, startValue?: number | OffScreenXOpt, endValue?: number | OffScreenXOpt): void;
    protected initIncDec(): void;
    private adjestAlign;
}
//# sourceMappingURL=XAxis.d.ts.map