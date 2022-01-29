/** DrawEngine is concerned with drawing and templating it does not care about x or y */
export default class DrawState {
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
    draw_line(instr, startX, startY, endX, endY) {
        //------------------------
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
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
    // public drawText(content ="",x= 0,y= 0,fontSize= this.fontSize){
    drawText(instr, x, y) {
        this.ctx.save();
        this.ctx.strokeStyle = instr.strokeStyle;
        this.ctx.fillStyle = instr.strokeStyle;
        this.ctx.textBaseline = "top";
        let f = instr.fontSize + "px " + this.fontName;
        this.ctx.font = f;
        this.ctx.fillText(instr.content, x, y);
        this.ctx.restore();
    }
    drawSpecialChar(instr, x, y) {
        this.ctx.save();
        this.ctx.strokeStyle = instr.strokeStyle;
        this.ctx.fillStyle = instr.strokeStyle;
        this.ctx.textBaseline = "top";
        let f = instr.fontSize + "px " + this.fontName;
        this.ctx.font = f;
        this.ctx.fillText(String.fromCodePoint(instr.codePoint), x, y);
        this.ctx.restore();
    }
}
