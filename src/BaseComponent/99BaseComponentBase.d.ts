import { DrawLayer } from "../bilza.js";
import Style from "../design/style.js";
export default class BaseComponentBase {
    readonly id: string;
    usePercentages: boolean;
    drawLayer: DrawLayer;
    style: Style;
    alwaysOn: boolean;
    version: string;
    canvasWidth: number | null;
    canvasHeight: number | null;
    visible: boolean;
    selected: boolean;
    constructor();
}
//# sourceMappingURL=99BaseComponentBase.d.ts.map