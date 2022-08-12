import { DrawLayer } from "../bilza.js";
import { AniNumber, AniPerc, AniBoolean, AniColor } from "../animationModule/animations.js";
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
    protected responsiveDims: boolean;
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
    paddingTop: AniPerc;
    paddingBottom: AniPerc;
    paddingRight: AniPerc;
    paddingLeft: AniPerc;
    x: AniNumber;
    y: AniNumber;
    colorBackground: AniColor;
    colorBorder: AniColor;
    showBackground: AniBoolean;
    canvasWidth: number | null;
    canvasHeight: number | null;
    constructor();
    setResponsivePadding(tf?: boolean): boolean;
    setResponsiveCoordinates(tf?: boolean): boolean;
    setResponsiveDims(tf?: boolean): boolean;
}
//# sourceMappingURL=99BaseComponentBase.d.ts.map