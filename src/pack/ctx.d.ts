export default class Ctx {
    canvas: HTMLCanvasElement;
    private ctx;
    private fontName;
    private fontSize;
    private fillStyle;
    private strokeStyle;
    constructor();
    canvasWidth(): number;
    setStrokeStyle(str: string): string;
    setFillStyle(str: string): string;
    canvasHeight(): number;
    restore(): void;
    save(): void;
    getFontSize(): number;
    resetCtx(): void;
    setFont(fontSize?: number, fontName?: string): void;
    setFontSize(n: number): void;
    clearCanvas(): void;
    setFontName(n: string): void;
    chars_width(chars?: string, fontSize?: number, fontName?: string): number;
    draw_line(startX: number, startY: number, endX: number, endY: number): void;
    drawText(content: string, x: number, y: number): void;
}
//# sourceMappingURL=ctx.d.ts.map