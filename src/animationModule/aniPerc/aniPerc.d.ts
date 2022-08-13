import AniNumber from "../aniNumber/aniNumber.js";
import IFilter from "../filters/IFilter.js";
import IPercFilter from "./filters/IPercFilter.js";
export default class AniPerc extends AniNumber {
    defaultFilter: IFilter<number>;
    private canvasWidthHeight;
    protected filtersArr: IPercFilter<number>[];
    constructor(initialValue?: number, responsive?: boolean, minValue?: number, maxValue?: number);
    setResponsive(tf: boolean): void;
    init(canvasWidthHeight: number): void;
}
//# sourceMappingURL=aniPerc.d.ts.map