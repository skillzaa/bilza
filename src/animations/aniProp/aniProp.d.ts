import BaseFilter from "../filters/baseFilter.js";
export default class AniProp<T> {
    protected _value: T | null;
    protected filtersArr: BaseFilter<T>[];
    protected defaultValue: T;
    constructor(defaultValue: T);
    update(rTimeMs: number): boolean;
    value(): T;
    set(n: T): T;
    protected getBaseFilter(rTimeMs: number): BaseFilter<T> | null;
    protected addFilter(bfil: BaseFilter<T>): void;
    goto(atSec: number, value: T): boolean;
    jumpBetween(startSec: number, endSec: number, firstValue: T, secondValue: T, delayInMS?: number): void;
}
//# sourceMappingURL=aniProp.d.ts.map