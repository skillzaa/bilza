import { FilterState } from "../design/filterState";
export default interface IFilter {
    update(msDelta: number): FilterState;
    value(): number | null;
}
//# sourceMappingURL=IFilter.d.ts.map