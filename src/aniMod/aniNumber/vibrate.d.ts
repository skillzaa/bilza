import BaseFilter from "../baseFilter.js";
export default class Vibrate extends BaseFilter {
    private offset;
    constructor(msDeltaStart: number, msDeltaEnd: number, offset?: number, delayInMS?: number);
    update(msDelta: number, baseGotoValue: number): boolean;
}
//# sourceMappingURL=vibrate.d.ts.map