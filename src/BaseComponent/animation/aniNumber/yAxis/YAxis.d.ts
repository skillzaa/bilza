import { OffScreenXOpt } from "../xAxis/OffScreenXOpt.js";
import { YAlignment } from "./yAlignment.js";
import IAnimatedNo from "../IAnimatedNo.js";
import { Pack } from "../../../../Bilza.js";
export default class YAxis implements IAnimatedNo {
    readonly yAlignmentOptions: typeof YAlignment;
    yAlign: YAlignment;
    private _ret_value;
    private _set_value;
    private preInitMoves;
    private animations;
    private compWidth;
    private compHeight;
    constructor(compWidth: (p: Pack) => number, compHeight: (p: Pack) => number);
    init(p: Pack, startTime: number, endTime: number, duration: number): boolean;
    private initMoveX;
    private translate;
    update(msDelta: number, p: Pack): boolean;
    notInitError(): void;
    setValue(n: number): number;
    animate(from?: number, to?: number, startValue?: number | OffScreenXOpt, endValue?: number | OffScreenXOpt): void;
    value(): number;
    private adjestYAlign;
    private checkNonNull;
}
//# sourceMappingURL=YAxis.d.ts.map