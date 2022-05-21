import IAnimatedNo from "./IAnimatedNo.js";
import { Pack } from "../../../Bilza.js";
export default class BaseAniNumber implements IAnimatedNo {
    private _ret_value;
    private _set_value;
    private startTime;
    private endTime;
    private duration;
    private preInitMoves;
    private animations;
    private compWidth;
    private compHeight;
    constructor(compWidth: (p: Pack) => number, compHeight: (p: Pack) => number);
    init(p: Pack, startTime: number, endTime: number, duration: number): boolean;
    private initMoveX;
    update(msDelta: number, p: Pack): boolean;
    notInitError(): void;
    setValue(n: number): number;
    value(): number;
    checkNonNull(n: null | number): number;
}
//# sourceMappingURL=BaseAniNumber.d.ts.map