import XAxis from "./animation/aniNumber/xAxis/xAxis.js";
import AnimatedNoBase from "./animation/aniNumber/animatedNoBase/AnimatedNoBase.js";
import { Pack } from "../Bilza.js";
export default class BaseProps {
    x: XAxis;
    y: AnimatedNoBase;
    colorBoundingRectangle: string;
    widthDyn: AnimatedNoBase;
    heightDyn: AnimatedNoBase;
    canvasWidth: number | null;
    canvasHeight: number | null;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    visible: boolean;
    selected: boolean;
    constructor(compWidth: (p: Pack) => number, compHeight: (p: Pack) => number);
}
//# sourceMappingURL=BaseProps.d.ts.map