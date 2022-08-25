import BaseComponentBase from "./99BaseComponentBase.js";
export default class Time extends BaseComponentBase {
    constructor() {
        super();
        this._startFrame = null;
        this._endFrame = null;
    }
    setDuration(startFrame, endFrame) {
        const dur = endFrame - startFrame;
        if ((dur < 1) || (typeof dur == "undefined")) {
            throw new Error("please make sure that startFrame is smaller than endFrame");
        }
        this._startFrame = startFrame;
        this._endFrame = endFrame;
        return dur;
    }
    getDuration() {
        if (this._endFrame == null || this._startFrame == null) {
            throw new Error("duration not yet set, please call setDuration first");
        }
        const dur = this._startFrame - this._endFrame;
        return dur;
    }
    getEndTime(inMilliSec = true) {
        if (this._endFrame == null) {
            throw new Error("duration not yet set");
        }
        let r = this._endFrame;
        return inMilliSec ? (r * 1000) : r;
    }
    getStartTime(inMilliSec = true) {
        if (this._startFrame == null) {
            throw new Error("duration not yet set");
        }
        return inMilliSec ? (this._startFrame * 1000) : this._startFrame;
    }
}
