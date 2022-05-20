import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";
import XAxis from "./animation/aniNumber/XAxis.js";
export default class BaseProps {
    constructor() {
        this.x = new XAxis(0);
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
