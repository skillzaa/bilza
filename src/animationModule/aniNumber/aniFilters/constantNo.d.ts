import BaseFilter from "../baseNumberFilter.js";
export default class ConstantNo extends BaseFilter {
    constantValue: number;
    constructor(rTimeMsStart: number, rTimeMsEnd: number, constantValue: number);
    value(): number | null;
}
//# sourceMappingURL=constantNo.d.ts.map