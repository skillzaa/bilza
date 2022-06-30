import { DrawLayer, XAlignOpt, YAlignOpt } from "../bilza.js";
import Style from "../design/style.js";
export default class BaseComponentBase {
    readonly XAlignOpt: typeof XAlignOpt;
    readonly YAlignOpt: typeof YAlignOpt;
    readonly id: string;
    usePercentages: boolean;
    drawLayer: DrawLayer;
    style: Style;
    alwaysOn: boolean;
    version: string;
    visible: boolean;
    selected: boolean;
    canvasWidth: number | null;
    canvasHeight: number | null;
    constructor();
}
//# sourceMappingURL=99BaseComponentBase.d.ts.map