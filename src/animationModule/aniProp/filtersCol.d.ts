import BaseFilter from "../filters/baseFilter.js";
export default class FiltersCol<T> {
    private filtersArr;
    constructor();
    protected getBaseFilter(msDelta: number): BaseFilter<T>;
    goto(msDelta: number, value: T): BaseFilter<T>;
}
//# sourceMappingURL=filtersCol.d.ts.map