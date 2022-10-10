import BaseAniProp from "./baseAniProp.js";
export default class AniProp<T> extends BaseAniProp<T> {
    constructor(value: T);
    update(rTimeMs: number): boolean;
    private getBaseFilter;
}
//# sourceMappingURL=aniProp.d.ts.map