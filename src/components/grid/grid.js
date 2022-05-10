import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
export default class Grid extends Component {
    constructor(colorHax = "grey", cellWidthPerc = 10, cellHeightPerc = 10) {
        super(DataFn);
        this.d.cellWidthPerc = cellWidthPerc;
        this.d.cellHeightPerc = cellHeightPerc;
        this.d.colorVerticalLines = colorHax;
        this.d.colorHorizontalLines = colorHax;
        this.d.colorNumbers = colorHax;
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
            this.style.strokeStyle = this.d.colorHorizontalLines;
            this.style.lineDash = this.d.lineDash;
            this.style.lineWidth = this.d.lineWidthHorizontal;
            p.drawLine(x, y, end_x, y, this.style);
            if (this.d.showNumbers == true) {
                this.style.strokeStyle = this.d.colorNumbers;
                this.drawText(p, Math.ceil(y), x + 4, y + 4);
            }
            y += ((p.canvasHeight() / 100) * this.d.cellHeightPerc);
        } while (height > y);
    }
    draw_vertical(p) {
        let x = 0;
        let y = 0;
        let width = p.canvasWidth();
        let height = p.canvasHeight();
        let end_y = y + height;
        do {
            this.style.strokeStyle = this.d.colorVerticalLines;
            this.style.lineWidth = this.d.lineWidthVertical;
            this.style.lineDash = this.d.lineDash;
            p.drawLine(x, y, x, end_y, this.style);
            if (this.d.showNumbers == true) {
                this.style.strokeStyle = this.d.colorNumbers;
                this.drawText(p, Math.ceil(x), x + 4, y + 2);
            }
            x += ((p.canvasWidth() / 100) * this.d.cellWidthPerc);
        } while (width > x);
    }
    drawText(p, content, x, y) {
        this.style.fontSize = this.d.fontSize;
        this.style.strokeStyle = this.d.colorNumbers;
        this.style.fillStyle = this.d.colorNumbers;
        p.drawText(content.toString(), x + this.d.lineWidthVertical - 2, y + this.d.lineWidthHorizontal, this.style);
    }
}
