import { FilterState } from "../design/filterState.js";
export default interface IFilter {
    update(msDelta: number): FilterState;
    value(): string | null;
}
//# sourceMappingURL=IFilter.d.ts.map