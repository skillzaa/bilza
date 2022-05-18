import { XAlignment } from "./xAlignment.js";
import { YAlignment } from "./yAlignment.js";
import AniNumber from "../animation/aniNumber/aniNumber.js";
export default class Props {
    constructor() {
        this.x = new AniNumber(0);
        this.y = new AniNumber(0);
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
