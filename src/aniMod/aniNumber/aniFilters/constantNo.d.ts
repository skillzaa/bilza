import BaseFilter from "../baseNumberFilter.js";
export default class ConstantNo extends BaseFilter {
    constantValue: number;
    constructor(msDeltaStart: number, msDeltaEnd: number, constantValue: number);
    value(): number | null;
}
//# sourceMappingURL=constantNo.d.ts.map