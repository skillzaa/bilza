import BaseFilter from "../baseFilter.js";
export default class Vibrate extends BaseFilter {
    private offset;
    constructor(msDeltaStart: number, msDeltaEnd: number, offset?: number, delayInMS?: number);
    value(msDelta: number, baseGotoValue: number): number | null;
}
//# sourceMappingURL=vibrate.d.ts.map