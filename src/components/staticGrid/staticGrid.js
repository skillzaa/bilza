import { DrawLayer } from "../../Bilza.js";
import BaseComponent from "../../BaseComponent/Basecomponent.js";
export default class StaticGrid extends BaseComponent {
    constructor() {
        super();
        this.drawLayer = DrawLayer.BackGround;
        this.fontSize = 8;
        this.cellWidth = 50;
        this.cellHeight = 50;
        this.colorHorizontalLines = "grey";
        this.colorVerticalLines = "grey";
        this.colorNumbers = "grey";
        this.flagDrawNumbers = false;
        this.flagDrawHorizontal = false;
        this.flagDrawVertical = false;
        this.lineWidthVertical = 1;
        this.lineWidthHorizontal = 1;
        this.lineDash = [];
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
            if (this.flagDrawNumbers == true) {
                this.style.strokeStyle = this.colorNumbers;
                this.drawText(p, y, x, y);
            }
            y += this.cellHeight;
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
            if (this.flagDrawNumbers == true) {
                this.style.strokeStyle = this.colorNumbers;
                this.drawText(p, x, x, y);
            }
            x += this.cellWidth;
        } while (width > x);
    }
    drawText(p, content, x, y) {
        this.style.fontSize = this.fontSize;
        this.style.strokeStyle = this.colorNumbers;
        this.style.fillStyle = this.colorNumbers;
        p.drawText(content.toString(), x + this.lineWidthVertical - 2, y + this.lineWidthHorizontal, this.style);
    }
}
