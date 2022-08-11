import { FilterState } from "../../animationsXX/animationDesign/filterState.js";
export default interface IFilter<T> {
    update(msDelta: number): FilterState;
    value(): T | null;
}
//# sourceMappingURL=IFilter.d.ts.map