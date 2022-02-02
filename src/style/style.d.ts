import { LineCapStyle } from "./lineCapStyle.js";
import { FontNames } from "./fontNames.js";
import IFrameStart from "../component/IFrameStart.js";
export default class Style implements IFrameStart {
    frameStart: number;
    fontSize: number | null;
    fontName: FontNames | null;
    fillStyle: string | null;
    strokeStyle: string | null;
    lineWidth: number | null;
    shadowColor: string | null;
    shadowOffsetX: number | null;
    shadowOffsetY: number | null;
    shadowBlur: number | null;
    globalAlpha: number | null;
    lineCap: LineCapStyle | null;
    constructor(frameStart?: number);
    merge(incom: Style): void;
}
//# sourceMappingURL=style.d.ts.map