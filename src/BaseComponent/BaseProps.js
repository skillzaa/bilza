import XAxis from "./animation/aniNumber/xAxis/xAxis.js";
import YAxis from "./animation/aniNumber/yAxis/yAxis.js";
import AnimatedNoBase from "./animation/aniNumber/animatedNoBase/AnimatedNoBase.js";
import Loc from "./animation/aniNumber/loc/loc.js";
export default class BaseProps {
    constructor(compWidth, compHeight) {
        this.x = new XAxis(0);
        this.y = new YAxis(0);
        this.loc = new Loc(0, 0);
        this.widthDyn = new AnimatedNoBase(10);
        this.heightDyn = new AnimatedNoBase(10);
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
