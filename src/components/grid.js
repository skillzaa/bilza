import { DrawLayer, } from "../bilza.js";
import { AniNumber, AniPerc, AniBoolean, AniColor, } from "../animationModule/animations.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class Grid extends BaseComponent {
    constructor(cellWidth = 10, cellHeight = 10, color = "grey") {
        super();
        this.fontSize = new AniNumber(12);
        this.width.set(100);
        this.height.set(100);
        this.cellWidth = new AniNumber(cellWidth);
        this.cellHeight = new AniNumber(cellHeight);
        this.colorHorizontalLines = new AniColor(color);
        this.colorVerticalLines = new AniColor(color);
        this.colorNumbers = new AniColor("black");
        this.showNumbers = new AniBoolean(true);
        this.showHorizontalLines = new AniBoolean(true);
        this.showVerticalLines = new AniBoolean(true);
        this.lineWidthVertical = new AniNumber(1);
        this.lineWidthHorizontal = new AniNumber(1);
        this.lineDash = [];
        this.drawLayer = DrawLayer.BackGround;
    }
    init(p) {
        super.init(p);
        if (this.canvasWidth == null || this.canvasHeight == null) {
            throw new Error("init error");
        }
        if (this.cellWidth instanceof AniPerc && this.cellHeight instanceof AniPerc) {
            this.cellWidth.init(this.canvasWidth);
            this.cellHeight.init(this.canvasHeight);
        }
        return true;
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
    setRespCellDims(tf = true) {
        if (tf == true) {
            const wd = this.cellWidth.value();
            const ht = this.cellHeight.value();
            this.cellWidth = new AniPerc(wd);
            this.cellHeight = new AniPerc(ht);
            return true;
        }
        else {
            this.cellWidth = new AniNumber(this.cellWidth.value());
            this.cellHeight = new AniNumber(this.cellHeight.value());
            return false;
        }
    }
    draw_horizontal(p) {
        let y = 0;
        let lastLineDrawn = false;
        do {
            this.drawGridLine(p, 0, y, this.contentWidth(), y, y);
            if (this.contentY() + y == this.contentWidth()) {
                lastLineDrawn = true;
            }
            y += this.cellHeight.value();
            ;
        } while (this.contentHeight() >= y);
        if (lastLineDrawn == false) {
            this.drawGridLine(p, 0, this.contentHeight(), this.contentWidth(), this.contentHeight(), (this.contentY() + this.contentHeight()));
        }
    }
    draw_vertical(p) {
        let x = 0;
        let lastLineDrawn = false;
        do {
            this.drawGridLine(p, x, 0, x, this.contentHeight(), x);
            if (this.contentX() + x == this.contentWidth()) {
                lastLineDrawn = true;
            }
            x += this.cellWidth.value();
            ;
        } while (this.contentWidth() >= x);
        if (lastLineDrawn == false) {
            this.drawGridLine(p, this.contentWidth(), 0, this.contentWidth(), this.contentHeight(), (this.contentX() + this.contentWidth()));
        }
    }
    drawGridLine(p, x1, y1, x2, y2, theNumber) {
        this.style.opacity = this.opacity.value();
        this.style.strokeStyle = this.colorVerticalLines.value();
        this.style.fillStyle = this.colorVerticalLines.value();
        this.style.lineWidth = this.lineWidthVertical.value();
        this.style.lineDash = this.lineDash;
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
