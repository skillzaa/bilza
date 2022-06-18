import { XAlignment } from "../../../../design/xAlignment.js";
import { YAlignment } from "../../../../design/yAlignment.js";
import { OffScreenXOpt } from "../../../../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../../../../design/OffScreenYOpt.js";
import PreInitArray from "./preInitArray.js";
export default class Loc {
    private animationsX;
    private animationsY;
    private gotoArray;
    private _ret_data;
    private preInitArray;
    protected compWidth: null | (() => number);
    protected compHeight: null | (() => number);
    protected canvasWidth: number | null;
    protected canvasHeight: number | null;
    readonly yAlignOpt: typeof YAlignment;
    readonly xAlignOpt: typeof XAlignment;
    constructor();
    init(compWidth: () => number, compHeight: () => number, canvasWidth: number, canvasHeight: number): boolean;
    update(msDelta: number): boolean;
    goto(atFrame: number, x: number | OffScreenXOpt, y: number | OffScreenYOpt, xAlign?: XAlignment, yAlign?: YAlignment, xExtra?: number, yExtra?: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number | OffScreenXOpt, xTo: number | OffScreenXOpt, yFrom: number | OffScreenYOpt, yTo: number | OffScreenYOpt, xAlignFrom?: XAlignment, xAlignTo?: XAlignment, yAlignFrom?: YAlignment, yAlignTo?: YAlignment, xExtraFrom?: number, xExtraTo?: number, yExtraFrom?: number, yExtraTo?: number): boolean;
    x(): number;
    y(): number;
    initIncDec(compWidth: number, compHeight: number): void;
    initIncDecX(elm: PreInitArray, compWidth: number): void;
    initIncDecY(elm: PreInitArray, compHeight: number): void;
    private runAnimationsX;
    private runGoto;
    private runAnimationsY;
    private newIncrement;
    private newDecrement;
    private wobble;
}
//# sourceMappingURL=loc.d.ts.map