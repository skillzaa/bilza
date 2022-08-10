import IAniFilter from "../aniNumber/aniFilters/IAniFilter";
export default class GotoObj<T> {
    aniFilters: IAniFilter<T>[];
    msDelta: number;
    value: T;
    constructor(msDelta: number, value: T);
    getAnimatedValue(msDelta: number): T;
}
//# sourceMappingURL=gotoObj.d.ts.map