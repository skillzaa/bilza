import { OffScreenYOpt } from "./OffScreenYOpt.js";
import { YAlignment } from "../../../../design/yAlignment.js";
import Axis from "../axis/axis.js";
import PreInitIncDecYAxis from "./preInitIncDecYAxis.js";
import IFilter from "../IFilter.js";
export default class YAxis extends Axis {
    readonly yAlignmentOptions: typeof YAlignment;
    yAlign: YAlignment;
    protected _set_value: number | null;
    protected preInitIncDecArray: PreInitIncDecYAxis[];
    protected animations: IFilter[];
    protected compWidth: null | (() => number);
    protected compHeight: null | (() => number);
    protected canvasWidth: number | null;
    protected canvasHeight: number | null;
    constructor(defaultValue?: number);
    init(compWidth: () => number, compHeight: () => number, canvasWidth: number, canvasHeight: number): boolean;
    update(msDelta: number): boolean;
    value(): number;
    runSetValue(): void;
    setValue(n: number): void;
    animate(from?: number, to?: number, startValue?: number | OffScreenYOpt, endValue?: number | OffScreenYOpt): void;
    initIncDec(): void;
    protected yPercToPix(perc: number): number;
    private translateOffScreen;
    private adjestAlign;
}
//# sourceMappingURL=yAxis.d.ts.map