export default class Templ {
    startFrame: number;
    x: number | null;
    y: number | null;
    fontSize: number | null;
    font: string | null;
    fontName: string | null;
    fillStyle: string | null;
    strokeStyle: string | null;
    lineWidth: number | null;
    shadowColor: string | null;
    shadowOffsetX: number | null;
    shadowOffsetY: number | null;
    shadowBlur: number | null;
    globalAlpha: number | null;
    constructor(startFrame?: number);
    merge(incom: Templ): void;
}
//# sourceMappingURL=templ.d.ts.map