import BaseFilter from "../baseNumberFilter.js";
export default class RandomNo extends BaseFilter {
    private min;
    private max;
    constructor(msDeltaStart: number, msDeltaEnd: number, min?: number, max?: number, delayInMS?: number);
    update(msDelta: number, baseGotoValue?: number): boolean;
    init(canvasWidthHeight: number): boolean;
}
//# sourceMappingURL=randomNo.d.ts.map