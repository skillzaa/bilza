import IAniFilter from "../aniNumber/aniFilters/IAniFilter";
export default class GotoObj<T> {
    protected aniFilters: IAniFilter<T>[];
    msDelta: number;
    value: T;
    constructor(msDelta: number, value: T);
}
//# sourceMappingURL=gotoObj.d.ts.map