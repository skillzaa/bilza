import CtxData from "../design/ctxData.js";
export default class Ctx {
    canvas: HTMLCanvasElement;
    private ctx;
    private fontSize;
    private fontName;
    constructor();
    canvasWidth(): number;
    canvasHeight(): number;
    restore(): void;
    save(): void;
    clearCanvas(): void;
    chars_width(chars?: string, fontSize?: number, fontName?: string): number;
    draw_line(startX: number, startY: number, endX: number, endY: number, incomCtx: CtxData): void;
    resetCtx(): void;
    drawText(content: string, incomCtx: CtxData): void;
    private commitCtxData;
}
//# sourceMappingURL=ctx.d.ts.map