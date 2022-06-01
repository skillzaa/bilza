import AnimatedNoBase from "./animation/aniNumber/animatedNoBase/AnimatedNoBase.js";
import Loc from "./animation/aniNumber/loc/loc.js";
export default class BaseComponentBase {
    loc: Loc;
    colorBoundingRectangle: string;
    dynWidth: AnimatedNoBase;
    dynHeight: AnimatedNoBase;
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