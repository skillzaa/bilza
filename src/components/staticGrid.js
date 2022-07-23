import { DrawLayer, AniNumber, AniColor } from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class StaticGrid extends BaseComponent {
    constructor(cellWidth = 100, cellHeight = 100, color = "#efe1e1") {
        super();
        this.cellWidth = new AniNumber(cellWidth);
        this.cellHeight = new AniNumber(cellHeight);
        this.lineWidthVertical = new AniNumber(1);
        this.lineWidthHorizontal = new AniNumber(1);
        this.colorHorizontalLines = new AniColor(color);
        this.colorVerticalLines = new AniColor(color);
        this.drawLayer = DrawLayer.BackGround;
        this.fontSize = 8;
        this.colorNumbers = new AniColor("grey");
        this.flagDrawNumbers = false;
        this.flagDrawHorizontal = false;
        this.flagDrawVertical = false;
        this.lineDash = [];
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.cellWidth.update(msDelta);
        this.cellHeight.update(msDelta);
        this.lineWidthHorizontal.update(msDelta);
        this.lineWidthVertical.update(msDelta);
        return true;
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
            this.style.opacity = this.opacity.value();
            this.style.strokeStyle = this.colorHorizontalLines.value();
            this.style.lineDash = this.lineDash;
            this.style.lineWidth = this.lineWidthHorizontal.value();
            p.drawLine(x, y, end_x, y, this.style);
            if (this.flagDrawNumbers == true) {
                this.style.strokeStyle = this.colorNumbers.value();
                this.drawText(p, y, x, y);
            }
            y += this.cellHeight.value();
        } while (height > y);
    }
    draw_vertical(p) {
        let x = 0;
        let y = 0;
        let width = p.canvasWidth();
        let height = p.canvasHeight();
        let end_y = y + height;
        do {
            this.style.opacity = this.opacity.value();
            this.style.strokeStyle = this.colorVerticalLines.value();
            this.style.lineWidth = this.lineWidthVertical.value();
            this.style.lineDash = this.lineDash;
            p.drawLine(x, y, x, end_y, this.style);
            if (this.flagDrawNumbers == true) {
                this.style.strokeStyle = this.colorNumbers.value();
                this.drawText(p, x, x, y);
            }
            x += this.cellWidth.value();
        } while (width > x);
    }
    drawText(p, content, x, y) {
        this.style.opacity = this.opacity.value();
        this.style.fontSize = this.fontSize;
        this.style.strokeStyle = this.colorNumbers.value();
        this.style.fillStyle = this.colorNumbers.value();
        p.drawText(content.toString(), x + this.lineWidthVertical.value() - 2, y + this.lineWidthHorizontal.value(), this.style);
    }
}
