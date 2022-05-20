import { OffScreenXOpt } from "../../OffScreenXOpt.js";
import IAnimatedNo from "./IAnimatedNo.js";
import { Pack } from "../../../Bilza.js";
export default class XAxis implements IAnimatedNo {
    compWidth: number | null;
    compHeight: number | null;
    readonly INITIALVALUE: number | OffScreenXOpt;
    private _ret_value;
    private startTime;
    private endTime;
    private duration;
    private aniMoveXinc;
    private aniMoveXdec;
    private animations;
    constructor(initalValue: number | OffScreenXOpt);
    init(p: Pack, startTime: number, endTime: number, duration: number, compWidth: number | null, compHeight: number | null): boolean;
    update(msDelta: number, p: Pack): boolean;
    private translate;
    getCompWidth(): number;
    getCompHeight(): number;
    notInitError(): void;
    setValue(n: number): number;
    moveXinc(from?: number, to?: number, startValue?: number | OffScreenXOpt, endValue?: number | OffScreenXOpt): void;
    moveXdec(from?: number, to?: number, startValue?: number | OffScreenXOpt, endValue?: number | OffScreenXOpt): void;
    value(): number;
    private initMoveXIncArray;
    private initMoveXDecArray;
    checkNonNull(n: null | number): number;
}
//# sourceMappingURL=XAxis.d.ts.map