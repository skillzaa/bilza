import { DrawLayer, AniBoolean, AniNumber, AniNoPerc, AniColor } from "../bilza.js";
import Style from "../design/style.js";
import { XAlignOpt } from "./designBC/xAlignOpt.js";
import { YAlignOpt } from "./designBC/yAlignOpt.js";
export default class BaseComponentBase {
    xAlign: XAlignOpt;
    yAlign: YAlignOpt;
    xRotate: XAlignOpt;
    yRotate: YAlignOpt;
    readonly XAlignOpt: typeof XAlignOpt;
    readonly YAlignOpt: typeof YAlignOpt;
    readonly id: string;
    responsiveCoordinates: boolean;
    responsivePadding: boolean;
    interactive: boolean;
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
    border: AniNumber;
    paddingTop: AniNoPerc;
    paddingBottom: AniNoPerc;
    paddingRight: AniNoPerc;
    paddingLeft: AniNoPerc;
    colorBackground: AniColor;
    colorBorder: AniColor;
    showBackground: AniBoolean;
    canvasWidth: number | null;
    canvasHeight: number | null;
    constructor();
}
//# sourceMappingURL=99BaseComponentBase.d.ts.map