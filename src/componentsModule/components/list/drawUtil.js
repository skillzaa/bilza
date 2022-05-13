export default class DrawUtil {
    constructor(d) {
        this.d = d;
    }
    drawBg(p, width, height, style) {
        style.fillStyle = this.d.colorBg;
        style.strokeStyle = this.d.colorBg;
        p.drawFillRect(p.xPerc(this.d.x), p.yPerc(this.d.y), width, height, style);
    }
    drawBorder(p, width, height, style) {
        style.fillStyle = this.d.colorBorder;
        style.strokeStyle = this.d.colorBorder;
        p.drawFillRect(p.xPerc(this.d.x) - this.d.widthBorder, p.yPerc(this.d.y) - this.d.widthBorder, width + (this.d.widthBorder * 2), height + (this.d.widthBorder * 2), style);
    }
}
