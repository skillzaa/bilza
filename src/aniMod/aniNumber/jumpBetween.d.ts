import BaseFilter from "../baseFilter.js";
export default class JumpBetween extends BaseFilter {
    private pointOne;
    private pointTwo;
    constructor(msDeltaStart: number, msDeltaEnd: number, pointOne?: number, pointTwo?: number, delayInMS?: number);
    value(msDelta: number, baseGotoValue: number): number | null;
}
//# sourceMappingURL=jumpBetween.d.ts.map