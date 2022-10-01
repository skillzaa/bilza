export default interface IFilter<T> {
    rTimeMsStart: number;
    rTimeMsEnd: number;
    setBaseValue(bv: T): T;
    getBaseValue(): T;
    setEndValue(ev: T): T;
    getEndValue(): T;
    update(rTimeMs: number): boolean;
    animatedValue(): T;
}
//# sourceMappingURL=IFilter.d.ts.map