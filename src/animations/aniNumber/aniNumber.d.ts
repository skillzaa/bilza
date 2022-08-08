import AniProp from "../aniProp/aniProp.js";
export default class AniNumber extends AniProp<number> {
    constructor(defaultValue: number);
    animate(from: number, to: number, startValue: number, endValue: number): void;
    vibrate(from: number, to: number, seed?: number, offset?: number, delay?: number): void;
    jumpBetween(startTimeSec: number, endTimeSec: number, pointOne?: number, pointTwo?: number, everyXFrame?: number): void;
    random(startTimeSec: number, endTimeSec: number, min?: number, max?: number, everyXFrame?: number): void;
    oscillate(startTimeSec: number, endTimeSec: number, startValue?: number, endValue?: number, speed?: number): void;
}
//# sourceMappingURL=aniNumber.d.ts.map