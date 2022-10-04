export default interface IFilter<T> {
    readonly startTimeMs: number;
    readonly endTimeMs: number;
    update(rTimeMs: number): void;
    filterValue(): T;
}
//# sourceMappingURL=IFilter.d.ts.map