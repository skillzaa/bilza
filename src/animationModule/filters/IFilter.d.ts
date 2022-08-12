export default interface IFilter<T> {
    rTimeMsStart: number;
    rTimeMsEnd: number;
    baseValue: T;
    update(rTimeMs: number): boolean;
    animatedValue(): T;
}
//# sourceMappingURL=IFilter.d.ts.map