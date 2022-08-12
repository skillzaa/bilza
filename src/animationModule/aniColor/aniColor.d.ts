import AniProp from "../aniProp/aniProp.js";
export default class AniColor extends AniProp<string> {
    constructor(initialValue?: string);
    goto(rTimeMs: number, value: string): boolean;
    random(rTimeMsStart: number, rTimeMsEnd: number, delay: number): void;
}
//# sourceMappingURL=aniColor.d.ts.map