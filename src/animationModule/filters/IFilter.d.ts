export default interface IFilter<T> {
    rTimeMsStart: number;
    rTimeMsEnd: number;
    baseValue: T;
    update(rTimeMs: number): boolean;
    animatedValue(): T;
    init(canvasWidthHeight: number): boolean;
    percToPix(perc: number, canvasWidthHeight: number): number;
}
//# sourceMappingURL=IFilter.d.ts.map