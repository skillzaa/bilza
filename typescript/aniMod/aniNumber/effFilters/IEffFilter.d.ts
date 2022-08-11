export default interface IEffFilter<T> {
    init(canvasWidthHeight: number): boolean;
    value(): null | T;
    update(msDelta: number, oldValue: T): boolean;
    qualifyToRun(msDelta: number): boolean;
}
//# sourceMappingURL=IEffFilter.d.ts.map