import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";
import AniNumber from "../animation/aniNumber/aniNumber.js";
export default class BaseProps {
    x: AniNumber;
    y: AniNumber;
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