import { LineCapStyle } from "./lineCapStyle.js";
import { FontFamily } from "./fontFamily.js";
export default class Style {
    fontSize: number;
    fontFamily: FontFamily;
    fillStyle: string;
    strokeStyle: string;
    lineWidth: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    opacity: number;
    lineCap: LineCapStyle;
    lineDash: number[];
    constructor();
    merge(incom: Style): void;
}
//# sourceMappingURL=style.d.ts.map