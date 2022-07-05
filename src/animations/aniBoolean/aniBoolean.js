import AniProp from "../animationDesign/aniProp.js";
import Toogle from "./filters/toogle.js";
export default class AniBoolean extends AniProp {
    toogle(startTimeSec, endTimeSec, skipXFrames = 0) {
        const v = new Toogle(startTimeSec, endTimeSec, skipXFrames);
        this.filters.push(v);
    }
}
