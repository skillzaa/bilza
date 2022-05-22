import XAxis from "./animation/aniNumber/XAxis.js";
import AnimatedNoBase from "./animation/aniNumber/AnimatedNoBase.js";
import { Pack } from "../Bilza.js";
export default class BaseProps {
    x: XAxis;
    y: AnimatedNoBase;
    colorBoundingRectangle: string;
    widthDyn: number;
    heightDyn: number;
    widthPix: number | null;
    heightPix: number | null;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    visible: boolean;
    selected: boolean;
    constructor(compWidth: (p: Pack) => number, compHeight: (p: Pack) => number);
}
//# sourceMappingURL=BaseProps.d.ts.map