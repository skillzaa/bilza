import BaseAniProp from "./baseAniProp.js";
import AniPropDb from "./aniPropDb.js";
export default class AniProp<T> extends BaseAniProp<T> {
    constructor(aniPropDb: AniPropDb<T>);
    update(rTimeMs: number): boolean;
    private getBaseFilter;
}
//# sourceMappingURL=aniProp.d.ts.map