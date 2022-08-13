export default interface IPercFilter<T> {
    rTimeMsStart: number;
    rTimeMsEnd: number;
    setBaseValue(bv: T): T;
    update(rTimeMs: number): boolean;
    animatedValue(): T;
    init(canvasWidthHeight: number): boolean;
    responsive: boolean;
}
//# sourceMappingURL=IPercFilter.d.ts.map