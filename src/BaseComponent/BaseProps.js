import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";
import XAxis from "./animation/aniNumber/XAxis.js";
export default class BaseProps {
    constructor(compWidth, compHeight) {
        this.x = new XAxis(compWidth, compHeight);
        this.y = 0;
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
