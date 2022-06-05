import { BaseComponent } from "../Bilza.js";
import Text from "./text/text.js";
export default class FrameCounter extends BaseComponent {
    constructor(color = "#008000", bgColor = "#d1d0c8") {
        super();
        this.textComp = new Text("sec:00", "#008000");
        this.textComp.color = color;
        this.textComp.colorBg = bgColor;
    }
    init(p) {
        super.init(p);
        this.
        ;
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.textComp.content = "sec:" + (Math.ceil(msDelta / 1000)).toString();
        return true;
    }
    draw(p) {
        this.textComp.draw(p);
        return true;
    }
}
