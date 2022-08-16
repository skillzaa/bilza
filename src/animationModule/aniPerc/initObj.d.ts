import IFilter from "../filters/IFilter.js";
export default class InitObj {
    private filtersArr;
    constructor(filtersArr: IFilter<number>[]);
    init(canvasWidthHeight: number): void;
    responsiveValue(heightWidth: number, perc: number): number;
}
//# sourceMappingURL=initObj.d.ts.map