import Text from "./text/text.js";
export default class FrameCounter extends Text {
    constructor(color = "#008000") {
        super("", color);
        this.border.setValue(2);
        this.maxHeight = 10;
    }
    init(p) {
        super.init(p);
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.content = "sec:" + (Math.ceil(msDelta / 1000)).toString();
        return true;
    }
}
