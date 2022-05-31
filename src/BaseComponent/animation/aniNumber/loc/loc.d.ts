import { XAlignment } from "../../../../design/xAlignment.js";
import { YAlignment } from "../../../../design/yAlignment.js";
import PreInitArray from "./preInitArray.js";
import { OffScreenXOpt } from "../../../../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../../../../design/OffScreenYOpt.js";
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
    initIncDec(compWidth: number, compHeight: number): void;
    activateFilter(msDelta: number): void;
    initIncDecX(elm: PreInitArray, compWidth: number): void;
    initIncDecY(elm: PreInitArray, compHeight: number): void;
    private runAnimationsX;
    private runExhaustedCheckX;
    goto(atFrame: number, x: number | OffScreenXOpt, y: number | OffScreenYOpt, xAlign?: XAlignment, yAlign?: YAlignment, xExtra?: number, yExtra?: number): void;
    private runGoto;
    private runExhaustedCheckY;
    private removeExhaustedX;
    private removeExhaustedY;
    private runAnimationsY;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number, xAlignFrom?: XAlignment, xAlignTo?: XAlignment, yAlignFrom?: YAlignment, yAlignTo?: YAlignment, xExtraFrom?: number, xExtraTo?: number, yExtraFrom?: number, yExtraTo?: number): void;
    x(): number;
    y(): number;
    private newIncrement;
    private newDecrement;
}
//# sourceMappingURL=loc.d.ts.map