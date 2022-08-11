import BaseFilter from "../../animationDesign/baseFilter.js";
import { FilterState } from "../../animationDesign/filterState.js";
export default class JumpBetween extends BaseFilter<number> {
    private pointOne;
    private pointTwo;
    private skipFrames;
    private delayCounter;
    constructor(startTimeSec: number, endTimeSec: number, pointOne?: number, pointTwo?: number, skipFrames?: number);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=jumpBetween.d.ts.map