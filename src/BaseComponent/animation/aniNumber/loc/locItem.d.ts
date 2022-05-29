import { XAlignment } from "../xAxis/xAlignment.js";
import { YAlignment } from "../yAxis/yAlignment.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import { OffScreenYOpt } from "./OffScreenYOpt.js";
export default class LocItem {
    x: number | OffScreenXOpt;
    y: number | OffScreenYOpt;
    xAlign: XAlignment;
    yAlign: YAlignment;
    xExtra: number;
    yExtra: number;
    constructor(x: number | OffScreenXOpt, y: number | OffScreenYOpt, xAlign?: XAlignment, yAlign?: YAlignment, xExtra?: number, yExtra?: number);
}
//# sourceMappingURL=locItem.d.ts.map