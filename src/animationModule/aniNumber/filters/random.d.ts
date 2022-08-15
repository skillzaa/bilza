import BaseFilter from "../../filters/baseFilter.js";
export default class Random extends BaseFilter<number> {
    min: number;
    max: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, min: number, max: number, delayInMS?: number);
    update(rTimeMs: number): boolean;
}
//# sourceMappingURL=random.d.ts.map