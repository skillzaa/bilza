export default class CtxData {
    startFrame: number;
    x: number;
    y: number;
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
    merge(incom: CtxData): void;
}
//# sourceMappingURL=ctxData.d.ts.map