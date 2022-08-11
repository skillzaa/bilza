import BaseFilter from "./baseFilter.js";
export default class ConstantVal<T> extends BaseFilter<T> {
    constructor(msDeltaStart: number, msDeltaEnd: number, baseValue: T, delayInMS?: number);
    animatedValue(msDelta: number): T;
}
//# sourceMappingURL=constantVal.d.ts.map