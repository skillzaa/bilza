import BaseFilter from "../../animationDesign/baseFilter.js";
export default class Toogle extends BaseFilter {
    constructor(startTimeSec, endTimeSec, skipXFrames = 0) {
        super(startTimeSec, endTimeSec, skipXFrames);
    }
    value() {
        if (this.isRunning() == false) {
            return null;
        }
        else {
            if (this.xFramesSkipped() == true) {
                if (this._ret_val == false || this._ret_val == null) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        return null;
    }
}
