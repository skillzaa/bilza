import { FilterState } from "../filterState.js";
import BaseFilter from "./baseFilter.js";
export default class JumpBetween extends BaseFilter {
    private pointOne;
    private pointTwo;
    private everyXFrame;
    private delayCounter;
    constructor(startTimeSec: number, endTimeSec: number, pointOne?: number, pointTwo?: number, everyXFrame?: number);
    update(msDelta: number): FilterState;
}
//# sourceMappingURL=jumpBetween.d.ts.map