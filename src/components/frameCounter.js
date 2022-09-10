import { hsl, DrawLayer } from "../bilza.js";
import Text from "./text.js";
import { AniBoolean } from "../animationModule/animations.js";
export default class FrameCounter extends Text {
    constructor(Hue_0_to_360 = 240) {
        super("", hsl(Hue_0_to_360));
        this.convertToSec = new AniBoolean(true);
        this.fontSize.set(26);
        this.showBackground.set(true);
        this.colorBackground.set(hsl(Hue_0_to_360, 20, 90));
        this.colorBorder.set(hsl(Hue_0_to_360));
        this.color.set(hsl(Hue_0_to_360));
        this.border.set(1);
        this.drawLayer = DrawLayer.ForeGround;
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
