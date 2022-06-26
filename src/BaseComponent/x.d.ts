import AniNumber from "../aniNumber/aniNumber.js";
export default class X extends AniNumber {
    private preInitGotosX;
    private preInitAnimatesX;
    private preInitVibratesX;
    constructor(defaultValue?: number);
    init(usePercentages: boolean, canvasWidth: number): void;
    initVibrate(usePercentages: boolean, canvasWidth: number): void;
    initGoto(usePercentages: boolean, canvasWidth: number): void;
    initAnimate(usePercentages: boolean, canvasWidth: number): void;
    private percToX;
    vibrate(from: number, to: number, xValue: number, offset: number, delay: number): void;
    animate(): void;
}
//# sourceMappingURL=x.d.ts.map