import AniProp from "../animationDesign/aniProp.js";
export default class AniBoolean extends AniProp<Boolean> {
    update(msDelta: number): boolean;
    toogle(startTimeSec: number, endTimeSec: number, skipXFrames?: number): void;
}
//# sourceMappingURL=aniBoolean.d.ts.map