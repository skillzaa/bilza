import AnimatedNoBase from "../animatedNoBase/AnimatedNoBase.js";
import { XAlignment } from "./xAlignment.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import PreInitIncDecXAxis from "./preInitIncDecXAxis.js";
export default class XAxis extends AnimatedNoBase {
    readonly xAlignmentOptions: typeof XAlignment;
    xAlign: XAlignment;
    PreInitIncDecXAxisArray: PreInitIncDecXAxis[];
    constructor(defaultValue: number);
    private translateOffScreen;
    update(msDelta: number): boolean;
    value(): number;
    animate(from?: number, to?: number, startValue?: number | OffScreenXOpt, endValue?: number | OffScreenXOpt): void;
    protected initIncDec(): void;
    private adjestAlign;
}
//# sourceMappingURL=XAxis.d.ts.map