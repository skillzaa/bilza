import FiltersCol from "./filtersCol.js";
export default class AniProp<T> extends FiltersCol<T> {
    protected _value: T;
    constructor(defaultValue: T);
    update(msDelta: number): boolean;
    value(): T;
    set(n: T): T;
}
//# sourceMappingURL=aniProp.d.ts.map