import ctxDefaultInit from "../design/ctxDefaultInit.js";
export default class Ctx {
    constructor() {
        this.ctxData = ctxDefaultInit();
        this.fontName = "serf";
        this.fontSize = 25;
        // @ts-expect-error
        this.canvas = document.getElementById("crown");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // @ts-expect-error    
        this.ctx = this.canvas.getContext('2d');
    }
    canvasWidth() {
        return this.canvas.width;
    }
    canvasHeight() {
        return this.canvas.height;
    }
    restore() {
        this.ctx.restore();
    }
    save() {
        this.ctx.save();
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    chars_width(chars = "", fontSize = this.ctxData.fontSize, fontName = this.ctxData.fontName) {
        this.ctx.save();
        //dont miss gap "px_"
        let f = this.ctxData.fontSize + "px " + this.ctxData.fontName;
        this.ctx.font = f;
        let m = this.ctx.measureText(chars).width;
        this.ctx.restore();
        return Math.ceil(m);
    }
    draw_line(startX, startY, endX, endY, incomCtx = this.ctxData) {
        this.ctxData.merge(incomCtx);
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }
    drawText(content, incomCtx = this.ctxData) {
        this.ctxData.merge(incomCtx);
        //--must
        this.ctx.textBaseline = "top";
        // x and y are not merged   
        this.ctx.fillText(content, incomCtx.x, incomCtx.y);
    }
}
