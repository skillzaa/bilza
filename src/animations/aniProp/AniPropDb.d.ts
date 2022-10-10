import BaseAniProp from "./baseAniProp.js";
import BaseFilter from "../../animations/filters/baseFilter.js";
export default class AniPropDb<T> extends BaseAniProp<T> {
    constructor(value: T);
    protected addFilter(bfil: BaseFilter<T>): void;
    goto(atSec: number, value: T): boolean;
    jumpBetween(startSec: number, endSec: number, firstValue: T, secondValue: T, delayInMS?: number): void;
    getFiltersArray(): BaseFilter<T>[];
}
//# sourceMappingURL=aniPropDb.d.ts.map