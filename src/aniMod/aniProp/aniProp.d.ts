import IFilter from "../IFilter.js";
import GotoData from "./gotoData.js";
export default class AniProp<T> {
    protected _value: T;
    protected defaultValue: T;
    protected filters: IFilter<T>[];
    protected gotoArray: GotoData<T>[];
    constructor(defaultValue: T);
    update(msDelta: number): boolean;
    value(): T;
    set(n: T): T;
    private runFilters;
    private getBaseGotoValue;
    goto(msDelta: number, value: T): void;
}
//# sourceMappingURL=aniProp.d.ts.map