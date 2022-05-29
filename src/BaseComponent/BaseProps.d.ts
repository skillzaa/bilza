import XAxis from "./animation/aniNumber/xAxis/xAxis.js";
import YAxis from "./animation/aniNumber/yAxis/yAxis.js";
import AnimatedNoBase from "./animation/aniNumber/animatedNoBase/AnimatedNoBase.js";
import Loc from "./animation/aniNumber/loc/loc.js";
import { Pack } from "../Bilza.js";
export default class BaseProps {
    loc: Loc;
    x: XAxis;
    y: YAxis;
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