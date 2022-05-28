import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrementTimeBased.js";
export default class Axis {
    constructor();
    protected notInitError(): void;
    protected checkNonNull(n: null | number): number;
    protected newIncrement(from: number, to: number, startValue: number, endValue: number): Increment;
    protected newDecrement(from: number, to: number, startValue: number, endValue: number): Decrement;
}
//# sourceMappingURL=axis.d.ts.map