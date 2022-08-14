import IFilter from "../filters/IFilter";
export default class AniProp<T> {
    protected _value: T | null;
    protected filtersArr: IFilter<T>[];
    protected defaultFilter: IFilter<T>;
    constructor(defaultValue: T);
    update(rTimeMs: number): boolean;
    value(): T;
    set(n: T): T;
    protected getBaseFilter(rTimeMs: number): IFilter<T> | null;
    protected addFilter(bfil: IFilter<T>): void;
    goto(rTimeMs: number, value: T): boolean;
    jumpBetween(rTimeMsStart: number, rTimeMsEnd: number, pointOne: T, pointTwo: T, delaySec?: number): void;
}
//# sourceMappingURL=aniProp.d.ts.map