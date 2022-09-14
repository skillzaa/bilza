import Grid from "../../components/grid.js";
import Rect from "../../components/rect.js";
import FillRect from "../../components/fillRect.js";
import FrameCounter from "../../components/frameCounter.js";
import ParticleSystem from "../../components/particleSystem.js";
import Text from "../../components/text/text.js";
import Pic from "../../components/pic.js";
import Line from "../../components/line.js";
import Circle from "../../components/circle.js";
import CanvasBorder from "../../components/canvasBorder.js";
import Row from "../../container/row.js";
import SpriteSheet from "../../components/spriteSheet/spriteSheet.js";
import SpriteSheetAlt from "../../components/spriteSheet/spriteSheetAlt.js";
export default class CompFactory {
    constructor(startTime, endTime, actionType = "add", insert) {
        this.insert = insert;
        this.startTime = startTime;
        this.endTime = endTime;
        this.actionType = actionType;
    }
    circle(radius = 10, colorHax = "red") {
        let g = new Circle(radius, colorHax);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
    canvasBorder(color = "grey", borderWidth = 5) {
        let g = new CanvasBorder(color, borderWidth);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
    grid(cellWidthPerc = 10, cellHeightPerc = 10, colorHax = "grey") {
        let g = new Grid(cellWidthPerc, cellHeightPerc, colorHax);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
    pic(imgId, dynWidth = 10, dynHeight = 10) {
        let g = new Pic(imgId, dynWidth, dynHeight);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
    rect(color = "#000000") {
        let g = new Rect(color);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
    spriteSheetAlt(imgUrl) {
        let g = new SpriteSheetAlt(imgUrl);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
    spriteSheet(imgUrl, IconWidth, IconHeight, totalColumns, totalRows) {
        let g = new SpriteSheet(imgUrl, IconWidth, IconHeight, totalColumns, totalRows);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
    text(content = "", colorHax = "#000000") {
        let g = new Text(content, colorHax);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
    fillRect(color = "#000000") {
        let g = new FillRect(color);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
    frameCounter(Hue_0_to_360 = 240) {
        let g = new FrameCounter(Hue_0_to_360);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
    particleSystem(count = 10, color = "#008000", framesToSkip = 50) {
        let g = new ParticleSystem(count, color, framesToSkip);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
    line(x1 = 0, y1 = 0, x2 = 20, y2 = 20, color = "#000000") {
        let g = new Line(x1, y1, x2, y2, color);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
    row(incommingTextArray = "one two") {
        let g = new Row(incommingTextArray);
        this.insert(g, this.startTime, this.endTime, this.actionType);
        return g;
    }
}
