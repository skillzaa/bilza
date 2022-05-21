import { OffScreenXOpt } from "../../OffScreenXOpt.js";
import { XAlignment } from "../../../design/xAlignment.js";
import IAnimatedNo from "./IAnimatedNo.js";
import { Pack } from "../../../Bilza.js";
export default class XAxis implements IAnimatedNo {
    readonly xAlignmentOptions: typeof XAlignment;
    xAlign: XAlignment;
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
    moveX(from?: number, to?: number, startValue?: number | OffScreenXOpt, endValue?: number | OffScreenXOpt): void;
    value(): number;
    private adjestXAlign;
    private checkNonNull;
}
//# sourceMappingURL=XAxis.d.ts.map