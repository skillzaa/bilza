import Axis from "../axis/axis.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import { XAlignment } from "../../../../design/xAlignment.js";
import PreInitIncDecXAxis from "./preInitIncDecXAxis.js";
export default class XAxis extends Axis {
    readonly xAlignmentOptions: typeof XAlignment;
    xAlign: XAlignment;
    protected preInitIncDecArray: PreInitIncDecXAxis[];
    protected compWidth: null | (() => number);
    protected compHeight: null | (() => number);
    protected canvasWidth: number | null;
    protected canvasHeight: number | null;
    constructor(defaultValue?: number);
    init(compWidth: () => number, compHeight: () => number, canvasWidth: number, canvasHeight: number): boolean;
    update(msDelta: number): boolean;
    value(): number;
    runSetValue(): void;
    animate(from?: number, to?: number, startValue?: number | OffScreenXOpt, endValue?: number | OffScreenXOpt): void;
    initIncDec(): void;
    protected xPercToPix(perc: number): number;
    private translateOffScreen;
    private adjestAlign;
}
//# sourceMappingURL=xAxis.d.ts.map