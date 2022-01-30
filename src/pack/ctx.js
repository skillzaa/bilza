export default class Ctx {
    constructor() {
        // this.ctxData = ctxDefaultInit();
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
    chars_width(chars = "", fontSize = this.fontSize, fontName = this.fontName) {
        this.ctx.save();
        //dont miss gap "px_"
        let f = this.fontSize + "px " + this.fontName;
        this.ctx.font = f;
        let m = this.ctx.measureText(chars).width;
        this.ctx.restore();
        return Math.ceil(m);
    }
    draw_line(startX, startY, endX, endY, incomCtx) {
        this.commitCtxData(incomCtx);
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }
    resetCtx() {
    }
    drawText(content, incomCtx) {
        this.commitCtxData(incomCtx);
        //--must
        this.ctx.textBaseline = "top";
        // x and y are not merged   
        this.ctx.fillText(content, incomCtx.x, incomCtx.y);
    }
    commitCtxData(incomCtx) {
        if (incomCtx.strokeStyle !== null) {
            this.ctx.strokeStyle = incomCtx.strokeStyle;
        }
        if (incomCtx.fillStyle !== null) {
            this.ctx.fillStyle = incomCtx.fillStyle;
        }
        if (incomCtx.fontSize !== null) {
            this.fontSize = incomCtx.fontSize;
        }
        if (incomCtx.fontName !== null) {
            this.fontName = incomCtx.fontName;
        }
        this.ctx.font = this.fontSize + "px " + this.fontName;
    }
}
