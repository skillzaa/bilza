import { LineCapStyle } from "./lineCapStyle.js";
import { FontFamily } from "./fontFamily.js";
export default class Style {
    applyAtMs: number;
    fontSize: number;
    fontFamily: FontFamily;
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
    constructor(applyAtMs?: number);
    merge(incom: Style): void;
}
//# sourceMappingURL=style.d.ts.map