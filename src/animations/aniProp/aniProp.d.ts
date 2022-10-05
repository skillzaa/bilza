import BaseFilter from "../../animationsFacade/filters/baseFilter.js";
export default class AniProp<T> {
    protected _value: T | null;
    protected filtersArr: BaseFilter<T>[];
    protected defaultValue: T;
    constructor(defaultValue: T);
    update(rTimeMs: number): boolean;
    set(_value: T): T;
    value(): T;
    private getBaseFilter;
}
//# sourceMappingURL=aniProp.d.ts.map