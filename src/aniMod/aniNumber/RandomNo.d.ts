import BaseFilter from "../baseFilter.js";
export default class RandomNo extends BaseFilter {
    private min;
    private max;
    constructor(msDeltaStart: number, msDeltaEnd: number, min?: number, max?: number, delayInMS?: number);
    value(msDelta: number, baseGotoValue?: number): number | null;
}
//# sourceMappingURL=RandomNo.d.ts.map