import { LineCapStyle } from "./lineCapStyle.js";
import { FontNames } from "./fontNames.js";
export default class Style {
    msStart: number;
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
    lineCap: LineCapStyle;
    lineDash: number[];
    constructor(msStart?: number);
    merge(incom: Style): void;
}
//# sourceMappingURL=style.d.ts.map