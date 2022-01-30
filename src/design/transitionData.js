import CtxData from "./ctxData.js";
export default class TransitionData {
    constructor(frame = 0) {
        this.ctxData = new CtxData();
        this.startFrame = frame;
    }
}
