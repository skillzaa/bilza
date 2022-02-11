import { Component, Style, Transition } from "../../bilzaa2d/index.js";
import DataFn from "./DataFn.js";
export default class Text extends Component {
    constructor() {
        super();
        this.styleText = new Style();
        this.compData = new Transition(DataFn);
    }
    width(p) {
        return p.chars_width(this.compData.data.content);
    }
    height(p) {
        return p.chars_width("Xi");
    }
    draw(p) {
        // p.drawBackground("green");
        p.drawText(this.compData.data.content, this.xPerc(this.compData.data.x, p), this.yPerc(this.compData.data.y, p), this.styleText);
        return true;
    }
    update(frame, p) {
        // this.compData.apply(frame); //--important!!
        return true;
    }
}
