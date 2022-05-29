import { XAlignment } from "../../../../design/xAlignment.js";
import { YAlignment } from "../../../../design/yAlignment.js";
export default class LocItem {
    constructor(x, y, xAlign = XAlignment.Left, yAlign = YAlignment.Top, xExtra = 0, yExtra = 0) {
        this.x = x;
        this.y = y;
        this.xAlign = xAlign;
        this.yAlign = yAlign;
        this.xExtra = xExtra;
        this.yExtra = yExtra;
    }
}
