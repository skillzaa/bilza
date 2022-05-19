import { XAlignment } from "./xAlignment.js";
import { YAlignment } from "./yAlignment.js";
import AniNumber from "../animation/aniNumber/aniNumber.js";
export default interface IProps {
    x: AniNumber;
    y: AniNumber;
    colorBoundingRectangle: string;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    visible: boolean;
    selected: boolean;
    useRelativeXY: boolean;
    xAlignment: XAlignment;
    yAlignment: YAlignment;
}
//# sourceMappingURL=IProps.d.ts.map