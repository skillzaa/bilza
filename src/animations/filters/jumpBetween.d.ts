import BaseFilter from "./baseFilter.js";
export default class JumpBetween<T> extends BaseFilter<T> {
    constructor(rTimeMsStart: number, rTimeMsEnd: number, startValue: T, endValue: T, afterValue: T, delaySec?: number);
    update(rTimeMs: number): void;
}
//# sourceMappingURL=jumpBetween.d.ts.map