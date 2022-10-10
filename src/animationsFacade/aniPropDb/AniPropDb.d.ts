import BaseFilter from "../filters/baseFilter.js";
export default class AniPropDb<T> {
    private baseValue;
    private _filterValue;
    private filtersArr;
    constructor(value: T);
    getBaseValue(): T;
    set(value: T): T;
    value(): T;
    protected addFilter(bfil: BaseFilter<T>): void;
    goto(atSec: number, value: T): boolean;
    jumpBetween(startSec: number, endSec: number, firstValue: T, secondValue: T, delayInMS?: number): void;
    getFiltersArray(): BaseFilter<T>[];
}
//# sourceMappingURL=AniPropDb.d.ts.map