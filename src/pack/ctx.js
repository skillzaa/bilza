export default class Ctx {
    constructor() {
        // @ts-expect-error    
        this.canvas = document.getElementById("crown");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // @ts-expect-error    
        this.ctx = this.canvas.getContext('2d');
        this.fillStyle = "#1e1eea";
        this.strokeStyle = "#1e1eea";
        this.fontSize = 100;
        this.fontName = "serif";
    }
    canvasWidth() {
        return this.canvas.width;
    }
    setStrokeStyle(str) {
        this.ctx.strokeStyle = str;
        return str;
    }
    setFillStyle(str) {
        this.ctx.fillStyle = str;
        return str;
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
    getFontSize() {
        return this.fontSize;
    }
    resetCtx() {
        this.ctx.font = this.fontSize + "px " + this.fontName;
    }
    setFont(fontSize = this.fontSize, fontName = this.fontName) {
        this.ctx.font = fontSize + "px " + fontName;
    }
    setFontSize(n) {
        this.fontSize = n;
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
    draw_line(startX, startY, endX, endY) {
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }
    drawText(content, x, y) {
        //--must
        this.ctx.textBaseline = "top";
        this.ctx.fillText(content, x, y);
    }
}
