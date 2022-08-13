export default interface IFilter<T> {
    responsive: boolean;
    rTimeMsStart: number;
    rTimeMsEnd: number;
    baseValue: T;
    update(rTimeMs: number): boolean;
    animatedValue(): T;
    init(canvasWidthHeight: number): boolean;
    percToPix(perc: number): number;
}
//# sourceMappingURL=IFilter.d.ts.map