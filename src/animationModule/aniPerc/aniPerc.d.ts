import AniNumber from "../aniNumber/aniNumber.js";
import IFilter from "../filters/IFilter.js";
export default class AniPerc extends AniNumber {
    defaultFilter: IFilter<number>;
    private canvasWidthHeight;
    constructor(initialValue?: number, responsive?: boolean, minValue?: number, maxValue?: number);
    setResponsive(tf: boolean): void;
    init(canvasWidthHeight: number): void;
    percToPix(perc: number, canvasWidthHeight: number): number;
}
//# sourceMappingURL=aniPerc.d.ts.map