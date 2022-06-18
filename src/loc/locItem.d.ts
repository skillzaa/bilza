import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";
import { OffScreenXOpt } from "../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../design/OffScreenYOpt.js";
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