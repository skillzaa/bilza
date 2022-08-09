export default interface IFilter {
    value(): null | number;
    update(msDelta: number, oldValue: number): boolean;
    qualifyToRun(msDelta: number): boolean;
}
//# sourceMappingURL=IFilter.d.ts.map