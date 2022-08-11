import IFilter from "../../animationModule/filters/IFilter.js";
export default class AniProp<T> {
    private _value;
    protected filters: IFilter<T>[];
    readonly defaultValue: T;
    lastGotoValue: T;
    constructor(defaultValue: T);
    update(msDelta: number): boolean;
    value(): T;
    set(n: T): T;
    private runFilters;
}
//# sourceMappingURL=aniProp.d.ts.map