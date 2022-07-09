import { DrawLayer } from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class Grid extends BaseComponent {
    constructor(color = "grey", cellWidthPerc = 10, cellHeightPerc = 10) {
        super();
        this.fontSize = 12;
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
        this.draw_horizontal(p);
        this.draw_vertical(p);
        return true;
    }
    draw_horizontal(p) {
        let x = 0;
        let y = 0;
        let width = p.canvasWidth();
        let height = p.canvasHeight();
        let end_x = x + width;
        do {
            this.style.strokeStyle = this.colorHorizontalLines;
            this.style.lineDash = this.lineDash;
            this.style.lineWidth = this.lineWidthHorizontal;
            p.drawLine(x, y, end_x, y, this.style);
            if (this.showNumbers == true) {
                this.style.strokeStyle = this.colorNumbers;
                this.drawText(p, Math.ceil(y), x + 4, y + 4);
            }
            y += ((p.canvasHeight() / 100) * this.cellHeightPerc);
        } while (height > y);
    }
    draw_vertical(p) {
        let x = 0;
        let y = 0;
        let width = p.canvasWidth();
        let height = p.canvasHeight();
        let end_y = y + height;
        do {
            this.style.strokeStyle = this.colorVerticalLines;
            this.style.lineWidth = this.lineWidthVertical;
            this.style.lineDash = this.lineDash;
            p.drawLine(x, y, x, end_y, this.style);
            if (this.showNumbers == true) {
                this.style.strokeStyle = this.colorNumbers;
                this.drawText(p, Math.ceil(x), x + 4, y + 2);
            }
            x += ((p.canvasWidth() / 100) * this.cellWidthPerc);
        } while (width > x);
    }
    drawText(p, content, x, y) {
        this.style.fontSize = this.fontSize;
        this.style.strokeStyle = this.colorNumbers;
        this.style.fillStyle = this.colorNumbers;
        p.drawText(content.toString(), x + this.lineWidthVertical - 2, y + this.lineWidthHorizontal, this.style);
    }
}
