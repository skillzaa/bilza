import RawText from "./text.js";
export default class FrameCounter extends RawText {
    constructor(color = "#008000") {
        super("", color);
        this.convertToSec = true;
        this.fontSize.set(35);
        this.showBackground.set(true);
        this.colorBackground.set("blue");
        this.colorBorder.set("#101963");
        this.color.set("yellow");
        this.border.set(1);
    }
    update(msDelta, p) {
        if (this.convertToSec == true) {
            this.content.set("sec:" + (Math.ceil(msDelta / 1000)).toString());
        }
        else {
            this.content.set("sec:" + (Math.ceil(msDelta)).toString());
        }
        super.update(msDelta, p);
        return true;
    }
}
