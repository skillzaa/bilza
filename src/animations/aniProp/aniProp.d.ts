import IFilter from "../animationDesign/IFilter.js";
import GotoData from "./gotoData.js";
export default class AniProp<T> {
    private _value;
    protected filters: IFilter<T>[];
    protected GotoDataArray: GotoData<T>[];
    readonly defaultValue: T;
    lastGotoValue: T;
    constructor(defaultValue: T);
    update(msDelta: number): boolean;
    value(): T;
    set(n: T): T;
    goto(startTimeSec: number, theValue: T): void;
    private runDefaultValue;
    private runLastGoto;
    private runFilters;
}
//# sourceMappingURL=aniProp.d.ts.map