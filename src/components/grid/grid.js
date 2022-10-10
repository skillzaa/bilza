import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber, AniBoolean, AniColor, AniPerc } from "../../animations/animations.js";
export default class Grid extends CompEngine {
    constructor(gridDb, pack) {
        super(gridDb, pack);
        this.cellWidth = new AniPerc(gridDb.cellWidth);
        this.cellHeight = new AniPerc(gridDb.cellHeight);
        this.colorHorizontalLines = new AniColor(gridDb.color);
        this.colorVerticalLines = new AniColor(gridDb.color);
        this.colorNumbers = new AniColor(gridDb.colorNumbers);
        this.showNumbers = new AniBoolean(gridDb.showNumbers);
        this.showHorizontalLines = new AniBoolean(gridDb.showHorizontalLines);
        this.showVerticalLines = new AniBoolean(gridDb.showVerticalLines);
        this.lineWidthVertical = new AniNumber(gridDb.lineWidthVertical);
        this.lineWidthHorizontal = new AniNumber(gridDb.lineWidthHorizontal);
        this.lineDash = gridDb.lineDash;
        this.drawLayer = 1;
        this.fontSize = new AniNumber(gridDb.fontSize);
    }
    update(msDelta, p) {
        this.cellWidth.update(msDelta);
        this.cellHeight.update(msDelta);
        this.showHorizontalLines.update(msDelta);
        this.showVerticalLines.update(msDelta);
        this.lineWidthVertical.update(msDelta);
        this.lineWidthHorizontal.update(msDelta);
        this.colorHorizontalLines.update(msDelta);
        this.colorVerticalLines.update(msDelta);
        this.fontSize.update(msDelta);
        this.colorNumbers.update(msDelta);
        this.showNumbers.update(msDelta);
        return super.update(msDelta, p);
    }
    draw(p) {
        this.preDraw(p);
        if (this.showHorizontalLines.value() == true) {
            this.draw_horizontal(p);
        }
        if (this.showVerticalLines.value() == true) {
            this.draw_vertical(p);
        }
        this.postDraw(p);
        return true;
    }
    draw_horizontal(p) {
        let y = 0;
        let lastLineDrawn = false;
        do {
            this.drawGridLine(p, 0, y, this.contentWidth(), y, y, "horizontal");
            if (this.contentY() + y == this.contentWidth()) {
                lastLineDrawn = true;
            }
            y += this.cellHeight.value();
            ;
        } while (this.contentHeight() >= y);
        if (lastLineDrawn == false) {
            this.drawGridLine(p, 0, this.contentHeight(), this.contentWidth(), this.contentHeight(), (this.contentY() + this.contentHeight()), "horizontal");
        }
    }
    draw_vertical(p) {
        let x = 0;
        let lastLineDrawn = false;
        do {
            this.drawGridLine(p, x, 0, x, this.contentHeight(), x, "vertical");
            if (this.contentX() + x == this.contentWidth()) {
                lastLineDrawn = true;
            }
            x += this.cellWidth.value();
            ;
        } while (this.contentWidth() >= x);
        if (lastLineDrawn == false) {
            this.drawGridLine(p, this.contentWidth(), 0, this.contentWidth(), this.contentHeight(), (this.contentX() + this.contentWidth()), "vertical");
        }
    }
    drawGridLine(p, x1, y1, x2, y2, theNumber, hv) {
        this.style.opacity = this.opacity.value();
        if (hv == "vertical") {
            this.style.fillStyle = this.colorVerticalLines.value();
            this.style.strokeStyle = this.colorVerticalLines.value();
            this.style.lineWidth = this.lineWidthVertical.value();
        }
        if (hv == "horizontal") {
            this.style.fillStyle = this.colorHorizontalLines.value();
            this.style.strokeStyle = this.colorHorizontalLines.value();
            this.style.lineWidth = this.lineWidthHorizontal.value();
        }
        p.drawLine(this.contentX() + x1, this.contentY() + y1, this.contentX() + x2, this.contentY() + y2, this.style);
        if (this.showNumbers.value() == true) {
            this.drawText(p, Math.ceil(theNumber), this.contentX() + x1, this.contentY() + y1 + 2);
        }
    }
    drawText(p, theNumber, x, y) {
        if (this.showNumbers.value() == false) {
            return;
        }
        this.style.fontSize = this.fontSize.value();
        this.style.strokeStyle = this.colorNumbers.value();
        this.style.fillStyle = this.colorNumbers.value();
        p.drawText(theNumber.toString(), x + this.lineWidthVertical.value(), y + this.lineWidthHorizontal.value(), this.style);
    }
}
