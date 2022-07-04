import AniProp from "../animationDesign/aniProp.js";
import SetOnce from "./filters/setOnce_goto.js";
import RandomColor from "./filters/randomColor.js";
export default class AniColor extends AniProp {
    goto(startTimeSec, theValue) {
        const v = new SetOnce(startTimeSec, theValue);
        this.filters.push(v);
    }
    random(startTimeSec, endTimeSec, everyXFrame = 0) {
        const v = new RandomColor(startTimeSec, endTimeSec, everyXFrame);
        this.filters.push(v);
    }
}
