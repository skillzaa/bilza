import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import FillRect from "../components/fillRect/fillRect.js";
import Rect from "../components/rect/rect.js";
import Image from "../components/image/image.js";
import Counter from "../components/counter/counter.js";
import Line from "../components/line/line.js";
import Circle from "../components/circle/circle.js";
export default class CompFactory {
    constructor(insert, pack) {
        this.insert = insert;
        this.pack = pack;
    }
    text(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", colorHax = "#000000", x = 0, y = 0, dynWidth = 20, dynHeight = 20) {
        let bs = new Text(startTimeSeconds, endTimeSeconds, content, colorHax, x, y, dynWidth, dynHeight);
        this.insert(bs);
        return bs;
    }
    grid(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, colorHax = "#000000", cellWidthPerc = 10, cellHeightPerc = 10) {
        let g = new Grid(msStart, msEnd, colorHax, cellWidthPerc, cellHeightPerc);
        this.insert(g);
        return g;
    }
    counter(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, loc = "rb") {
        let item = new Counter(msStart, msEnd, loc);
        this.insert(item);
        return item;
    }
    rect(startTimeSeconds = 0, endTimeSeconds = 300, x = 0, y = 0, widthPercent = 10, heightPercent = 10, colorHex = "#008000") {
        let bs = new Rect(startTimeSeconds, endTimeSeconds, x, y, widthPercent, heightPercent, colorHex);
        this.insert(bs);
        return bs;
    }
    fillRect(startTimeSeconds = 0, endTimeSeconds = 300, x = 0, y = 0, widthPercent = 10, heightPercent = 10, colorHex = "#008000") {
        let bs = new FillRect(startTimeSeconds, endTimeSeconds, x, y, widthPercent, heightPercent, colorHex);
        this.insert(bs);
        return bs;
    }
    Image(startTimeSeconds = 0, endTimeSeconds = 300, imgId, x = 0, y = 0) {
        let bs = new Image(startTimeSeconds, endTimeSeconds, imgId, x, y);
        this.insert(bs);
        return bs;
    }
    line(startTimeSeconds = 0, endTimeSeconds = 300, x1 = 0, y1 = 0, x2 = 100, y2 = 100, color = "black", lineWidth = 2) {
        let bs = new Line(startTimeSeconds, endTimeSeconds, x1, y1, x2, y2, color, lineWidth);
        this.insert(bs);
        return bs;
    }
    circle(startTimeSeconds = 0, endTimeSeconds = 300, x = 0, y = 0, radiusPercent = 10, color = "grey", fill = true, startAngle = 0, endAngle = 2 * Math.PI) {
        let item = new Circle(startTimeSeconds, endTimeSeconds, x, y, radiusPercent, color, fill, startAngle, endAngle);
        this.insert(item);
        return item;
    }
}
