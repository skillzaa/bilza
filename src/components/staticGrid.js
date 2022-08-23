import { DrawLayer } from "../bilza.js";
import { AniNumber, AniBoolean, AniColor, } from "../animationModule/animations.js";
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
        this.fontSize = new AniNumber(25);
        this.colorNumbers = new AniColor("grey");
        this.showNumbers = new AniBoolean(false);
        this.drawHorizontal = new AniBoolean(true);
        this.drawVertical = new AniBoolean(true);
        this.lineDash = [];
    }
    init(p) {
        super.init(p);
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.cellWidth.update(msDelta);
        this.cellHeight.update(msDelta);
        this.lineWidthHorizontal.update(msDelta);
        this.lineWidthVertical.update(msDelta);
        this.fontSize.update(msDelta);
        this.colorNumbers.update(msDelta);
        return true;
    }
    draw(p) {
        this.preDraw(p);
        if (this.drawHorizontal.value() == true) {
            this.draw_horizontal(p);
        }
        if (this.drawVertical.value() == true) {
            this.draw_vertical(p);
        }
        this.postDraw(p);
        return true;
    }
    draw_horizontal(p) {
        let x = 0;
        let y = 0;
        let width = this.contentWidth();
        let height = this.contentHeight();
        let end_x = this.contentX() + width;
        do {
            this.style.opacity = this.opacity.value();
            this.style.strokeStyle = this.colorHorizontalLines.value();
            this.style.lineDash = this.lineDash;
            this.style.lineWidth = this.lineWidthHorizontal.value();
            p.drawLine(this.contentX() + x, this.contentY() + y, end_x, this.contentY() + y, this.style);
            if (this.showNumbers.value() == true) {
                this.style.strokeStyle = this.colorNumbers.value();
                this.drawText(p, y, this.contentX() + x, this.contentY() + y);
            }
            y += this.cellHeight.value();
        } while ((height) > y);
        this.style.opacity = this.opacity.value();
        this.style.strokeStyle = this.colorVerticalLines.value();
        this.style.lineWidth = this.lineWidthVertical.value();
        this.style.lineDash = this.lineDash;
        p.drawLine(this.contentX(), this.contentY() + this.contentHeight(), this.contentX() + +this.contentWidth(), this.contentY() + this.contentHeight(), this.style);
    }
    draw_vertical(p) {
        let x = 0;
        let y = 0;
        let width = this.contentWidth();
        let height = this.contentHeight();
        let end_y = this.contentY() + height;
        do {
            this.style.opacity = this.opacity.value();
            this.style.strokeStyle = this.colorVerticalLines.value();
            this.style.lineWidth = this.lineWidthVertical.value();
            this.style.lineDash = this.lineDash;
            p.drawLine(this.contentX() + x, this.contentY() + y, this.contentX() + x, end_y, this.style);
            if (this.showNumbers.value() == true) {
                this.style.strokeStyle = this.colorNumbers.value();
                this.drawText(p, x, this.contentX() + x, this.contentY() + y);
            }
            x += this.cellWidth.value();
        } while (width > x);
        this.style.opacity = this.opacity.value();
        this.style.strokeStyle = this.colorVerticalLines.value();
        this.style.lineWidth = this.lineWidthVertical.value();
        this.style.lineDash = this.lineDash;
        const xnow = this.contentX() + this.contentWidth();
        const ynow = this.yAligned() + this.compHeight() - this.paddingTop.value();
        p.drawLine(xnow, this.contentY(), xnow, this.contentY() + this.contentHeight(), this.style);
    }
    drawText(p, content, x, y) {
        this.style.opacity = this.opacity.value();
        this.style.fontSize = this.fontSize.value();
        this.style.strokeStyle = this.colorNumbers.value();
        this.style.fillStyle = this.colorNumbers.value();
        p.drawText(content.toString(), x + this.lineWidthVertical.value() - 2, y + this.lineWidthHorizontal.value(), this.style);
    }
}
