/** DrawEngine is concerned with drawing and templating it does not care about x or y */
export default class State {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    private fontName;
    private fontSize;
    private fillStyle;
    private strokeStyle;
    constructor();
    getFontSize(): number;
    resetCtx(): void;
    setFont(fontSize?: number, fontName?: string): void;
    chars_width(chars?: string, fontSize?: number, fontName?: string): number;
    draw_line(startX: number, startY: number, endX: number, endY: number): void;
    drawText(content: string, x: number, y: number): void;
}
//# sourceMappingURL=state.d.ts.map