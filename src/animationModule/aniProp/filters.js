import AnimationObj from "./animationObj";
import ConstantVal from "../filters/constantVal.js";
export default class AniObjCol {
    constructor() {
        this.aniObjArr = [];
    }
    getBaseAniObj(msDelta) {
        if (this.aniObjArr.length < 1) {
            throw new Error("BaseGoto not found");
        }
        let lastFrameChecked = 0;
        let rez = null;
        for (let i = 0; i < this.aniObjArr.length; i++) {
            const elm = this.aniObjArr[i];
            if (msDelta >= (elm.msDeltaStart)) {
                if ((elm.msDeltaStart) >= lastFrameChecked) {
                    lastFrameChecked = (elm.msDeltaStart);
                    rez = elm;
                }
            }
        }
        if (rez == null) {
            throw new Error("BaseGoto not found");
        }
        return rez;
    }
    goto(msDelta, value) {
        for (let i = 0; i < this.aniObjArr.length; i++) {
            const gotoItem = this.aniObjArr[i];
            if (gotoItem.msDeltaStart == msDelta) {
                gotoItem.baseValue = value;
                return gotoItem;
            }
        }
        const cv = new ConstantVal(msDelta, 0, value);
        const v = new AnimationObj(msDelta, 0, value, cv);
        this.aniObjArr.push(v);
        return v;
    }
}
