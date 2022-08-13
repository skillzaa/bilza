export default interface IFilter<T> {
    rTimeMsStart: number;
    rTimeMsEnd: number;
    setBaseValue(bv: T): T;
    update(rTimeMs: number): boolean;
    animatedValue(): T;
    init(canvasWidthHeight: number): boolean;
}
//# sourceMappingURL=IFilter.d.ts.map