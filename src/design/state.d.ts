import SegStateData from "./seg_state_data.js";
export default class State {
    private ctx;
    private fontSize;
    private fontName;
    current_seg: SegStateData;
    fillStyle: string;
    strokeStyle: string;
    constructor(ctx: CanvasRenderingContext2D);
    draw_line(startX: number, startY: number, endX: number, endY: number): void;
    set_bot_line_mid(x: number, y: number): void;
    load_current_seg(width: number, height: number): void;
    getFontSize(): number;
    chars_width(chars?: string, fontSize?: number, fontName?: string): number;
    drawText(content?: string, x?: number, y?: number, fontSize?: number): void;
    private setFontSize;
    private setFontName;
    private restoreCtx;
    private saveCtx;
    private resetFont;
    private init_ctx;
}
//# sourceMappingURL=state.d.ts.map