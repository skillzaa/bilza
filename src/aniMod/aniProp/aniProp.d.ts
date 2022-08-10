import IEffFilter from "../aniNumber/effFilters/IEffFilter.js";
import GotoObj from "./gotoObj.js";
export default class AniProp<T> {
    protected _value: T;
    protected effFilters: IEffFilter<T>[];
    protected gotoArray: GotoObj<T>[];
    constructor(defaultValue: T);
    update(msDelta: number): boolean;
    value(): T;
    set(n: T): T;
    private getBaseGoto;
    goto(msDelta: number, value: T): GotoObj<T>;
}
//# sourceMappingURL=aniProp.d.ts.map