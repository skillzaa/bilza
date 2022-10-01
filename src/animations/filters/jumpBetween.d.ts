import BaseFilter from "./baseFilter.js";
export default class JumpBetween<T> extends BaseFilter<T> {
    constructor(rTimeMsStart: number, rTimeMsEnd: number, startValue: T, endValue: T, delaySec?: number);
    update(rTimeMs: number): boolean;
}
//# sourceMappingURL=jumpBetween.d.ts.map