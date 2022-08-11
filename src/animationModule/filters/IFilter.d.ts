export default interface IFilter<T> {
    update(msDelta: number): boolean;
    value(): T | null;
}
//# sourceMappingURL=IFilter.d.ts.map