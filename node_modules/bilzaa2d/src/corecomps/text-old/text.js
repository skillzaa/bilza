import { BaseComp, Style } from "../../bilzaa2d/index.js";
import TextData from "./textData.js";
import TextDataNull from "./textDataNull.js";
export default class Text extends BaseComp {
    constructor(content = "some text", x = 0, y = 0, style = new Style()) {
        super(style);
        this.compData = new TextData();
        this.compData.content = content;
        this.compData.x = x;
        this.compData.y = y;
        this.dataTransitions = [];
    }
    width(p) {
        return p.chars_width(this.compData.content);
    }
    height(p) {
        return p.chars_width("Xi");
    }
    draw(p) {
        // p.drawBackground("green");
        p.drawText(this.compData.content, this.xPerc(this.compData.x, p), this.yPerc(this.compData.y, p), this.style);
        return true;
    }
    newDataTransition(frame = 0) {
        let t = new TextDataNull(frame);
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
