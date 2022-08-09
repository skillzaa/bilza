import IFilter from "./IFilter.js";
import GotoData from "./aniNumber/gotoData.js";
export default class AniProp<T> {
    private _value;
    readonly defaultValue: T;
    protected filters: IFilter<T>[];
    protected gotoArray: GotoData[];
    constructor(defaultValue: T);
    update(msDelta: number): boolean;
    value(): T;
    set(n: T): T;
    private runFilters;
}
//# sourceMappingURL=aniProp.d.ts.map