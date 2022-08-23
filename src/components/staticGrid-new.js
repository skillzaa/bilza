import { DrawLayer } from "../bilza.js";
import { AniNumber, AniBoolean, } from "../animationModule/animations.js";
import Text from "./text-dynamicFontSize.js";
import Line from "./line.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class StaticGrid extends BaseComponent {
    constructor(cellWidth = 100, cellHeight = 100, color = "#efe1e1") {
        super();
        this.cellWidth = new AniNumber(cellWidth);
        this.cellHeight = new AniNumber(cellHeight);
        this.drawLayer = DrawLayer.BackGround;
        this.drawNumbers = new AniBoolean(false);
        this.drawHorizontal = new AniBoolean(true);
        this.drawVertical = new AniBoolean(true);
        this.numbers = new Text("0", "grey");
        this.lineHorizontal = new Line(0, 0, 100, 100);
        this.lineVertical = new Line(0, 0, 200, 200);
        this.lineHorizontal.setRespLoc(false);
        this.lineVertical.setRespLoc(false);
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.cellWidth.update(msDelta);
        this.cellHeight.update(msDelta);
        this.numbers.update(msDelta, p);
        this.lineHorizontal.update(msDelta, p);
        this.lineVertical.update(msDelta, p);
        return true;
    }
    draw(p) {
        if (this.drawHorizontal.value() == true) {
            this.draw_horizontal(p);
        }
        if (this.drawVertical.value() == true) {
            this.draw_vertical(p);
        }
        return true;
    }
    draw_horizontal(p) {
        let x = 0;
        let y = 0;
        let width = this.compWidth();
        let height = this.compHeight();
        do {
            this.lineHorizontal.x2.set(width);
            this.lineHorizontal.y.set(y);
            this.lineHorizontal.y2.set(y);
            this.lineHorizontal.update(0, p);
            this.lineHorizontal.draw(p);
            y += this.cellHeight.value();
        } while (height > y);
    }
    draw_vertical(p) {
        let x = 0;
        let height = this.compHeight();
        this.lineVertical.y2.set(height);
        do {
            this.lineVertical.x.set(x);
            this.lineVertical.x2.set(x);
            this.lineVertical.update(0, p);
            this.lineVertical.draw(p);
            x += this.cellHeight.value();
        } while (height > x);
    }
    drawText(p, content, x, y) {
    }
}
