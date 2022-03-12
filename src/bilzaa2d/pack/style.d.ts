import { LineCapStyle } from "./lineCapStyle.js";
import { FontNames } from "../../util/fontNames.js";
export default class Style {
    frameStart: number;
    fontSize: number;
    fontName: FontNames;
    fillStyle: string;
    strokeStyle: string;
    lineWidth: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    globalAlpha: number;
    lineDashWidth: number;
    lineDashGap: number;
    lineCap: LineCapStyle;
    constructor(frameStart?: number);
    merge(incom: Style): void;
}
//# sourceMappingURL=style.d.ts.map