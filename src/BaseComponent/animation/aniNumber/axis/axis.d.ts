import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrementTimeBased.js";
import IFilter from "../IFilter.js";
export default class Axis {
    protected animations: IFilter[];
    protected _ret_value: number;
    protected _set_value: number | null;
    constructor(defaultValue: number);
    protected notInitError(): void;
    protected checkNonNull(n: null | number): number;
    protected newIncrement(from: number, to: number, startValue: number, endValue: number): Increment;
    protected newDecrement(from: number, to: number, startValue: number, endValue: number): Decrement;
    protected runAnimations(msDelta: number): void;
    setValue(n: number): void;
}
//# sourceMappingURL=axis.d.ts.map