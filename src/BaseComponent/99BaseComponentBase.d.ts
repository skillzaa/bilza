import { DrawLayer, AniBoolean, AniNumber, AniColor } from "../bilza.js";
import Style from "../design/style.js";
import { XAlignOpt } from "./designBC/xAlignOpt.js";
import { YAlignOpt } from "./designBC/yAlignOpt.js";
export default class BaseComponentBase {
    readonly XAlignOpt: typeof XAlignOpt;
    readonly YAlignOpt: typeof YAlignOpt;
    xAlign: XAlignOpt;
    xRotate: XAlignOpt;
    yAlign: YAlignOpt;
    yRotate: YAlignOpt;
    readonly id: string;
    usePercentages: boolean;
    drawLayer: DrawLayer;
    style: Style;
    alwaysOn: boolean;
    version: string;
    visible: AniBoolean;
    rotation: AniNumber;
    opacity: AniNumber;
    color: AniColor;
    width: AniNumber;
    height: AniNumber;
    selected: boolean;
    canvasWidth: number | null;
    canvasHeight: number | null;
    constructor();
}
//# sourceMappingURL=99BaseComponentBase.d.ts.map