import { LineCapStyle } from "./lineCapStyle.js";
import { FontNames } from "./fontNames.js";
export default class Style {
    startFrame: number;
    x: number | null;
    y: number | null;
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
    constructor(startFrame?: number);
    merge(incom: Style): void;
}
//# sourceMappingURL=style.d.ts.map