import BaseFilter from "../../animations/filters/baseFilter.js";
export default class BaseAniProp<T> {
    private baseValue;
    private _filterValue;
    protected filtersArr: BaseFilter<T>[];
    constructor(value: T);
    getBaseValue(): T;
    set(value: T): T;
    protected setFilterValue(value: T | null): T | null;
    value(): T;
    protected addFilter(bfil: BaseFilter<T>): void;
}
//# sourceMappingURL=baseAniProp.d.ts.map