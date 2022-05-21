import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";
import XAxis from "./animation/aniNumber/XAxis.js";
export default class BaseProps {
    x: XAxis;
    y: number;
    colorBoundingRectangle: string;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    visible: boolean;
    selected: boolean;
    xAlignment: XAlignment;
    yAlignment: YAlignment;
    constructor();
}
//# sourceMappingURL=BaseProps.d.ts.map