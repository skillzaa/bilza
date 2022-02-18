import { Component, Style, Transition } from "../../bilzaa2d/index.js";
import DataFn from "./DataFn.js";
export default class Text extends Component {
    constructor() {
        super();
        this.styleText = new Style();
        this.compData = new Transition(DataFn);
    }
    width(p) {
        return p.charsWidth(this.compData.data.content, this.styleText.fontSize, this.styleText.fontName);
    }
    height(p) {
        return p.charsWidth("Xi", this.styleText.fontSize, this.styleText.fontName);
    }
    draw(p) {
        // p.drawBackground("green");
        p.drawText(this.compData.data.content, p.xPerc(this.compData.data.x), p.yPerc(this.compData.data.y), this.styleText);
        return true;
    }
    update(frame, p) {
        this.compData.apply(frame); //--important!!
        return true;
    }
}
