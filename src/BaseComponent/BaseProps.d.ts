import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";
import AnimatedNoBase from "./animation/aniNumber/AnimatedNoBase.js";
import { Pack } from "../Bilza.js";
export default class BaseProps {
    x: AnimatedNoBase;
    y: AnimatedNoBase;
    colorBoundingRectangle: string;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    visible: boolean;
    selected: boolean;
    xAlignment: XAlignment;
    yAlignment: YAlignment;
    constructor(compWidth: (p: Pack) => number, compHeight: (p: Pack) => number);
}
//# sourceMappingURL=BaseProps.d.ts.map