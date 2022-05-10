import { XAlignment } from "./xAlignment.js";
import { YAlignment } from "./yAlignment.js";
export default class CompDataBase {
    constructor() {
        this.msStart = 0;
        this.x = 0;
        this.y = 0;
        this.selected = false;
        this.visible = true;
        this.useRelativeXY = true;
        this.shadowColor = "grey";
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.shadowBlur = 0;
        this.colorBoundingRectangle = "black";
        this.xAlignment = XAlignment.Left;
        this.yAlignment = YAlignment.Top;
    }
}
