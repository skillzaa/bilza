import { DrawLayer } from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class Grid extends BaseComponent {
    constructor(color = "grey", cellWidthPerc = 10, cellHeightPerc = 10) {
        super();
        this.fontSize = 12;
        this.width.set(100);
        this.height.set(100);
        this.cellWidthPerc = cellWidthPerc;
        this.cellHeightPerc = cellHeightPerc;
        this.colorHorizontalLines = color;
        this.colorVerticalLines = color;
        this.colorNumbers = "black";
        this.showNumbers = true;
        this.showHorizontalLines = true;
        this.showVerticalLines = true;
        this.lineWidthVertical = 1;
        this.lineWidthHorizontal = 1;
        this.lineDash = [];
        this.drawLayer = DrawLayer.BackGround;
    }
    draw(p) {
        this.preDraw(p);
        this.draw_horizontal(p);
        this.draw_vertical(p);
        this.postDraw(p);
        return true;
    }
    draw_horizontal(p) {
        let y = 0;
        const yFactor = ((this.contentHeight() / 100) * this.cellWidthPerc);
        let end_x = this.contentX() + this.contentWidth();
        do {
            this.style.strokeStyle = this.colorHorizontalLines;
            this.style.opacity = this.opacity.value();
            this.style.fillStyle = this.colorHorizontalLines;
            this.style.lineDash = this.lineDash;
            this.style.lineWidth = this.lineWidthHorizontal;
            p.drawLine(this.contentX(), this.contentY() + y, end_x, this.contentY() + y, this.style);
            if (this.showNumbers == true) {
                this.style.strokeStyle = this.colorNumbers;
                this.drawText(p, Math.ceil(y), this.contentX(), this.contentY() + y + 2);
            }
            y += yFactor;
        } while (this.contentHeight() > y);
    }
    draw_vertical(p) {
        let x = 0;
        let end_y = this.contentY() + this.contentHeight();
        const Xfactor = ((this.contentWidth() / 100) * this.cellWidthPerc);
        do {
            this.style.opacity = this.opacity.value();
            this.style.strokeStyle = this.colorVerticalLines;
            this.style.fillStyle = this.colorVerticalLines;
            this.style.lineWidth = this.lineWidthVertical;
            this.style.lineDash = this.lineDash;
            p.drawLine(this.contentX() + x, this.contentY(), this.contentX() + x, end_y, this.style);
            if (this.showNumbers == true) {
                this.style.strokeStyle = this.colorNumbers;
                this.drawText(p, Math.ceil(x), this.contentX() + x, this.contentY() + 2);
            }
            x += Xfactor;
        } while (this.contentWidth() > x);
    }
    drawText(p, content, x, y) {
        this.style.fontSize = this.fontSize;
        this.style.strokeStyle = this.colorNumbers;
        this.style.fillStyle = this.colorNumbers;
        p.drawText(content.toString(), x + this.lineWidthVertical - 2, y + this.lineWidthHorizontal, this.style);
    }
}
