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
    lineCap: "butt" | "square" | "round";
    lineJoin: "round" | "bevel" | "miter";
    lineDash: [line: number, gap: number];
    constructor();
    merge(incom: Style): void;
}
//# sourceMappingURL=style.d.ts.map