import SegStateData from "./seg_state_data.js";
export default class State {
    constructor(ctx) {
        this.ctx = ctx;
        // this.x = x;
        // this.y = y;
        this.fillStyle = "#1e1eea";
        this.strokeStyle = "#1e1eea";
        this.current_seg = new SegStateData();
        this.fontSize = 100;
        this.fontName = "serif";
        //--need to be changed
        this.init_ctx();
        this.resetFont();
    }
    //===================Public
    draw_line(startX, startY, endX, endY) {
        //------------------------
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }
    set_bot_line_mid(x, y) {
        this.current_seg.line_bot_width = x - this.current_seg.line_bot_startX;
        this.current_seg.line_bot_mid_X = x + this.current_seg.line_bot_width;
    }
    load_current_seg(width, height) {
        this.current_seg = new SegStateData();
        this.current_seg.width = width;
        this.current_seg.height = height;
    }
    getFontSize() {
        return this.fontSize;
    }
    chars_width(chars = "", fontSize = this.fontSize, fontName = this.fontName) {
        this.ctx.save();
        //dont miss gap "px_"
        let f = fontSize + "px " + fontName;
        this.ctx.font = f;
        let m = this.ctx.measureText(chars).width;
        this.ctx.restore();
        return Math.ceil(m);
    }
    drawText(content = "", x = 0, y = 0, fontSize = this.fontSize) {
        this.ctx.save();
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.textBaseline = "top";
        let f = fontSize + "px " + this.fontName;
        this.ctx.font = f;
        this.ctx.fillText(content, x, y);
        this.ctx.restore();
    }
    //==============Private
    setFontSize(n) {
        this.fontSize = n;
        this.resetFont();
    }
    setFontName(n) {
        this.fontName = n;
        this.resetFont();
    }
    restoreCtx() {
        this.ctx.restore();
    }
    saveCtx() {
        this.ctx.save();
    }
    resetFont() {
        this.ctx.font = this.fontSize + "px " + this.fontName;
    }
    init_ctx() {
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.strokeStyle = this.strokeStyle;
    }
}
