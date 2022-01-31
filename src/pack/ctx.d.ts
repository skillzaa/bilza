import Templ from "../design/templ.js";
import Xy from "../design/xy.js";
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
    drawText(content: string, xy: Xy, incomCtx: Templ): void;
    drawTextstroke(content: string, incomCtx: Templ): void;
    private commitCtxData;
}
//# sourceMappingURL=ctx.d.ts.map