import { DrawLayer } from "../bilza.js";
import Style from "../design/style.js";
import { XAlignOpt } from "./designBC/xAlignOpt.js";
import { YAlignOpt } from "./designBC/yAlignOpt.js";
import X from "./x.js";
import Y from "./y.js";
export default class BaseComponentBase {
    readonly id: string;
    drawLayer: DrawLayer;
    style: Style;
    duration: number;
    protected insertTimeInVid: number;
    alwaysOn: boolean;
    x: X;
    y: Y;
    xAlign: XAlignOpt;
    yAlign: YAlignOpt;
    readonly XAlignOpt: typeof XAlignOpt;
    readonly YAlignOpt: typeof YAlignOpt;
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