export default interface IFilter<T> {
    rTimeMsStart: number;
    rTimeMsEnd: number;
    responsive: boolean;
    baseValue: T;
    update(rTimeMs: number): boolean;
    animatedValue(): T;
    init(canvasWidthHeight: number): boolean;
    percToPix(perc: number): number;
}
//# sourceMappingURL=IFilter.d.ts.map