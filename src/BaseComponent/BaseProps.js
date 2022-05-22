import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";
import AnimatedNoBase from "./animation/aniNumber/AnimatedNoBase.js";
export default class BaseProps {
    constructor(compWidth, compHeight) {
        this.x = new AnimatedNoBase(0);
        this.y = new AnimatedNoBase(0);
        this.y.setValue(0);
        this.selected = false;
        this.visible = true;
        this.shadowColor = "grey";
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.shadowBlur = 0;
        this.colorBoundingRectangle = "black";
        this.xAlignment = XAlignment.Left;
        this.yAlignment = YAlignment.Top;
    }
}
