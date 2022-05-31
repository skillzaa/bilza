import Motherfilter from "./motherFilter.js";
export default class Increment extends Motherfilter {
    constructor(from: number, to: number, startValue: number, endValue: number);
    update(msDelta: number): boolean;
    private getFrom;
    private getTo;
    private getEndValue;
}
//# sourceMappingURL=increment.d.ts.map