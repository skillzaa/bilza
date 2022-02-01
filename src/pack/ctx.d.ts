import Templ from "../design/templ.js";
export default class Ctx {
    canvas: HTMLCanvasElement;
    private ctx;
    private fontSize;
    private fontName;
    constructor(canvasId?: string);
    drawBackground(color?: string): void;
    canvasWidth(): number;
    canvasHeight(): number;
    restore(): void;
    save(): void;
    clearCanvas(): void;
    chars_width(chars?: string, fontSize?: number, fontName?: string): number;
    draw_line(startX: number, startY: number, endX: number, endY: number, incomTempl: Templ): void;
    resetCtx(): void;
    draw_rect(x: number, y: number, width: number, height: number, incomCtx: Templ): void;
    draw_fillRect(x: number, y: number, width: number, height: number, incomCtx: Templ): void;
    draw_circle(x: number, y: number, radius: number, fill: boolean, incomCtx: Templ): void;
    drawText(content: string, x: number, y: number, incomCtx: Templ): void;
    drawTextstroke(content: string, x: number, y: number, incomCtx: Templ): void;
    private commitCtxData;
}
//# sourceMappingURL=ctx.d.ts.map