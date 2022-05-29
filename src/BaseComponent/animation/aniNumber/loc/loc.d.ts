import { XAlignment } from "../xAxis/xAlignment.js";
import { YAlignment } from "../yAxis/yAlignment.js";
import PreInitArray from "./preInitArray.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import { OffScreenYOpt } from "./OffScreenYOpt.js";
export default class Loc {
    private animationsX;
    private animationsY;
    private _ret_data;
    private _set_data;
    private preInitArray;
    protected compWidth: null | (() => number);
    protected compHeight: null | (() => number);
    protected canvasWidth: number | null;
    protected canvasHeight: number | null;
    readonly yAlignOpt: typeof YAlignment;
    readonly xAlignOpt: typeof XAlignment;
    constructor(x: number | OffScreenXOpt, y: number | OffScreenYOpt, xAlign?: XAlignment, yAlign?: YAlignment, xExtra?: number, yExtra?: number);
    init(compWidth: () => number, compHeight: () => number, canvasWidth: number, canvasHeight: number): boolean;
    update(msDelta: number): boolean;
    initIncDec(compWidth: number, compHeight: number): void;
    initIncDecX(elm: PreInitArray, compWidth: number): void;
    initIncDecY(elm: PreInitArray, compHeight: number): void;
    private runAnimationsX;
    private runAnimationsY;
    private runSetValue;
    set(x: number | OffScreenXOpt, y: number | OffScreenYOpt, xAlign?: XAlignment, yAlign?: YAlignment, xExtra?: number, yExtra?: number): void;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number, xAlignFrom?: XAlignment, xAlignTo?: XAlignment, yAlignFrom?: YAlignment, yAlignTo?: YAlignment, xExtraFrom?: number, xExtraTo?: number, yExtraFrom?: number, yExtraTo?: number): void;
    x(): number;
    y(): number;
    private newIncrement;
    private newDecrement;
}
//# sourceMappingURL=loc.d.ts.map