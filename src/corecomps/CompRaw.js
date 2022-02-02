import Style from "../style/style.js";
import BaseComp from "./baseComp.js";
class RawData {
    constructor(frameStart = 0) {
        this.frameStart = frameStart;
        this.content = "some text";
        this.x = 0;
        this.y = 0;
    }
}
export default class CompRaw extends BaseComp {
    constructor(content = "some text", x = 0, y = 0, firstdata = new FirstData(), style = new Style()) {
        super(style);
        this.compData = firstdata;
        this.compData.content = content;
        this.compData.x = x;
        this.compData.y = y;
        this.dataTransitions = [];
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    draw(p) {
        p.ctx.drawText(this.compData.content, this.compData.x, this.compData.y, this.style);
        return true;
    }
    newDataTransition(frame = 0) {
        let t = new FirstData(frame);
        this.dataTransitions.push(t);
        return t;
    }
    addDataTransition(cd) {
        this.dataTransitions.push(cd);
        return true;
    }
    applyDataTransitons(frame) {
        for (let i = this.dataTransitions.length - 1; i >= 0; i--) {
            const trctxData = this.dataTransitions[i];
            if (trctxData.frameStart < frame) {
                this.merge(trctxData);
                this.dataTransitions.splice(i, 1);
            }
        }
    }
    //--this merge is only for compData for style ithas its own merge fn.
    merge(subset) {
        if (subset.content !== null) {
            this.compData.content = subset.content;
        }
        if (subset.x !== null) {
            this.compData.x = subset.x;
        }
        if (subset.y !== null) {
            this.compData.y = subset.y;
        }
        return true;
    }
}
