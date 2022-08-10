export default interface IFilter<T> {
    init(canvasWidthHeight: number): boolean;
    value(): null | T;
    update(msDelta: number, oldValue: T): boolean;
    qualifyToRun(msDelta: number): boolean;
}
//# sourceMappingURL=IFilter.d.ts.map