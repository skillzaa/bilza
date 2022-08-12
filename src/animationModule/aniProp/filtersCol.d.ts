import BaseFilter from "../filters/baseFilter.js";
export default class FiltersCol<T> {
    protected filtersArr: BaseFilter<T>[];
    constructor();
    protected getBaseFilter(rTimeMs: number): BaseFilter<T>;
    goto(rTimeMs: number, value: T): BaseFilter<T>;
    protected addFilter(bfil: BaseFilter<T>): void;
}
//# sourceMappingURL=filtersCol.d.ts.map