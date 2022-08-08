import AniProp from "../aniProp/aniProp.js";
import SetOnce from "./filters/setOnce_goto.js";
export default class AniString extends AniProp {
    goto(startTimeSec, theValue) {
        const v = new SetOnce(startTimeSec, theValue);
        this.filters.push(v);
    }
}
