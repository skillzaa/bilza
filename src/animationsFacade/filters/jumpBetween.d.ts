import BaseFilter from "./baseFilter.js";
export default class JumpBetween<T> extends BaseFilter<T> {
    constructor(startTimeMs: number, endTimeMs: number, startValue: T, endValue: T, delaySec?: number);
    update(rTimeMs: number): boolean;
}
//# sourceMappingURL=jumpBetween.d.ts.map