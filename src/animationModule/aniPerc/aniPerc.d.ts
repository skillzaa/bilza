import AniNumber from "../aniNumber/aniNumber.js";
export default class AniPerc extends AniNumber {
    private canvasWidthHeight;
    constructor(initialValue?: number, responsive?: boolean, minValue?: number, maxValue?: number);
    init(canvasWidthHeight: number): void;
    responsiveValue(heightWidth: number, perc: number): number;
}
//# sourceMappingURL=aniPerc.d.ts.map