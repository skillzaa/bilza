import AniNumber from "../aniNumber/aniNumber.js";
export default class AniPerc extends AniNumber {
    responsive: boolean;
    constructor(initialValue?: number, responsive?: boolean, minValue?: number, maxValue?: number);
    setResponsive(tf: boolean): void;
    init(canvasWidthHeight: number): false | undefined;
    percToPix(perc: number, canvasWidthHeight: number): number;
}
//# sourceMappingURL=aniPerc.d.ts.map