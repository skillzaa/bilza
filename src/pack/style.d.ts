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
    lineCap: 0 | 1 | 2;
    lineJoin: 0 | 1 | 2;
    lineDash: [line: number, gap: number];
    constructor();
    merge(incom: Style): void;
}
//# sourceMappingURL=style.d.ts.map