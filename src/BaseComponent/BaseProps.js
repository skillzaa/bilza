import XAxis from "./animation/aniNumber/XAxis.js";
import AnimatedNoBase from "./animation/aniNumber/AnimatedNoBase.js";
export default class BaseProps {
    constructor(compWidth, compHeight) {
        this.x = new XAxis(0);
        this.y = new AnimatedNoBase(0);
        this.widthDyn = new AnimatedNoBase(10);
        this.heightDyn = 10;
        this.canvasWidth = null;
        this.canvasHeight = null;
        this.selected = false;
        this.visible = true;
        this.shadowColor = "grey";
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.shadowBlur = 0;
        this.colorBoundingRectangle = "black";
    }
}
