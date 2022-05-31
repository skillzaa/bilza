import AnimatedNoBase from "./animation/aniNumber/animatedNoBase/AnimatedNoBase.js";
import Loc from "./animation/aniNumber/loc/loc.js";
export default class BaseProps {
    constructor(compWidth, compHeight) {
        this.loc = new Loc();
        this.dynWidth = new AnimatedNoBase(10);
        this.dynHeight = new AnimatedNoBase(10);
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
