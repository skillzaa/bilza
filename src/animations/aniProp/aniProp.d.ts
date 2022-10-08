import AniPropDb from "../../animationsFacade/aniPropDb/AniPropDb.js";
import BaseFilter from "../../animationsFacade/filters/baseFilter.js";
export default class AniProp<T> {
    private _value;
    protected filtersArr: BaseFilter<T>[];
    protected defaultValue: T;
    constructor(aniPropDb: AniPropDb<T>);
    update(rTimeMs: number): boolean;
    set(_value: T): T;
    value(): T;
    private getBaseFilter;
}
//# sourceMappingURL=aniProp.d.ts.map