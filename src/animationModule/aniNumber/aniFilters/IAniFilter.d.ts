export default interface IAniFilter<T> {
    init(canvasWidthHeight: number): boolean;
    value(): null | T;
    update(rTimeMs: number): boolean;
    qualifyToRun(rTimeMs: number): boolean;
}
//# sourceMappingURL=IAniFilter.d.ts.map