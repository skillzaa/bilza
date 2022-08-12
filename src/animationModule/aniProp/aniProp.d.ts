import IFilter from "../filters/IFilter";
export default class AniProp<T> {
    protected _value: T;
    protected defaultValue: T;
    protected filtersArr: IFilter<T>[];
    constructor(defaultValue: T);
    update(rTimeMs: number): boolean;
    value(): T;
    set(n: T): T;
    protected getBaseFilter(rTimeMs: number): IFilter<T> | null;
    protected addFilter(bfil: IFilter<T>): void;
}
//# sourceMappingURL=aniProp.d.ts.map