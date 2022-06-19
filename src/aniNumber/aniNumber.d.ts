import IFilter from "./IFilter.js";
export default class AniNumber {
    private _ret_value;
    protected filters: IFilter[];
    protected compWidth: null | (() => number);
    protected compHeight: null | (() => number);
    protected canvasWidth: number | null;
    protected canvasHeight: number | null;
    constructor(defaultValue?: number);
    init(compWidth: () => number, compHeight: () => number, canvasWidth: number, canvasHeight: number): boolean;
    update(msDelta: number): boolean;
    value(): number;
    private runFilters;
}
//# sourceMappingURL=aniNumber.d.ts.map