/** DrawEngine is concerned with drawing and templating it does not care about x or y */
export default class State {
    constructor() {
        // @ts-expect-error    
        this.canvas = document.getElementById("crown");
        // @ts-expect-error    
        this.ctx = this.canvas.getContext('2d');
        this.fillStyle = "#1e1eea";
        this.strokeStyle = "#1e1eea";
        this.fontSize = 100;
        this.fontName = "serif";
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
    // public setFontSize(n:number){
    //     this.fontSize = n;
    // }
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
        // let f = this.fontSize + "px " + this.fontName;
        // this.ctx.font = f;
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }
    drawText(content, x, y) {
        // let f = this.fontSize + "px " + this.fontName;
        // this.ctx.font = f;
        //--must
        this.ctx.textBaseline = "top";
        this.ctx.fillText(content, x, y);
    }
}
