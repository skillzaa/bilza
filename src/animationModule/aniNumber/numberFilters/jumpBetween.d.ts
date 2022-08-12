import BaseFilter from "./baseFilter.js.js";
export default class JumpBetween extends BaseFilter {
    private pointOne;
    private pointTwo;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, pointOne?: number, pointTwo?: number, delayInMS?: number);
    update(rTimeMs: number, baseGotoValue: number): boolean;
    init(canvasWidthHeight: number): boolean;
}
//# sourceMappingURL=jumpBetween.d.ts.map