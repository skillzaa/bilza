import { hsl } from "../bilza.js";
import Text from "./text.js";
import { AniBoolean } from "../animationModule/animations.js";
export default class FrameCounter extends Text {
    constructor(color = hsl(60)) {
        super("", color);
        this.convertToSec = new AniBoolean(true);
        this.fontSize.set(26);
        this.showBackground.set(true);
        this.colorBackground.set("blue");
        this.colorBorder.set(color);
        this.border.set(1);
    }
    update(msDelta, p) {
        if (this.convertToSec.value() == true) {
            this.content.set("sec:" + (Math.ceil(msDelta / 1000)).toString());
        }
        else {
            this.content.set("sec:" + (Math.ceil(msDelta)).toString());
        }
        this.convertToSec.update(msDelta);
        super.update(msDelta, p);
        return true;
    }
}
