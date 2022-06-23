import { DrawLayer } from "../bilza.js";
import Style from "../design/style.js";
import { OffScreenXOpt } from "../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../design/OffScreenYOpt.js";
import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";
import Loc from "../loc/loc.js";
export default class BaseComponentBase {
    readonly id: string;
    drawLayer: DrawLayer;
    style: Style;
    duration: number;
    readonly xAlign: typeof XAlignment;
    readonly yAlign: typeof YAlignment;
    readonly offScreenXOpt: typeof OffScreenXOpt;
    readonly offScreenYOpt: typeof OffScreenYOpt;
    protected insertTimeInVid: number;
    alwaysOn: boolean;
    protected loc: Loc;
    colorBoundingRectangle: string;
    version: string;
    canvasWidth: number | null;
    canvasHeight: number | null;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    visible: boolean;
    selected: boolean;
    constructor();
}
//# sourceMappingURL=BaseComponentBase.d.ts.map