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
    goto(rSec: number, value: T): boolean;
    jumpBetween(rSecStart: number, rSecEnd: number, firstValue: T, secondValue: T, delaySec?: number): void;
}
//# sourceMappingURL=aniProp.d.ts.map