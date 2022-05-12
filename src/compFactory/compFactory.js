import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import FillRect from "../components/fillRect/fillRect.js";
import Rect from "../components/rect/rect.js";
import Image from "../components/image/image.js";
import Counter from "../components/counter/counter.js";
import Line from "../components/line/line.js";
import Circle from "../components/circle/circle.js";
export default class CompFactory {
    constructor() {
    }
    text(duration = 10, content = "", colorHax = "#000000", x = 0, y = 0, dynWidth = 20, dynHeight = 20) {
        let bs = new Text(duration, content, colorHax, x, y, dynWidth, dynHeight);
        return bs;
    }
    grid(colorHax = "#000000", cellWidthPerc = 10, cellHeightPerc = 10) {
        let g = new Grid(colorHax, cellWidthPerc, cellHeightPerc);
        return g;
    }
    counter(duration = 10, loc = "rb") {
        let item = new Counter(duration, loc);
        return item;
    }
    rect(startTime = 0, duration = 300, x = 0, y = 0, widthPercent = 10, heightPercent = 10, colorHex = "#008000") {
        let bs = new Rect(duration, x, y, widthPercent, heightPercent, colorHex);
        return bs;
    }
    fillRect(startTime = 0, duration = 10, x = 0, y = 0, widthPercent = 10, heightPercent = 10, colorHex = "#008000") {
        let bs = new FillRect(duration, x, y, widthPercent, heightPercent, colorHex);
        return bs;
    }
    Image(duration = 10, imgId, x = 0, y = 0) {
        let bs = new Image(duration, imgId, x, y);
        return bs;
    }
    line(duration = 300, x1 = 0, y1 = 0, x2 = 100, y2 = 100, color = "black", lineWidth = 2) {
        let bs = new Line(duration, x1, y1, x2, y2, color, lineWidth);
        return bs;
    }
    circle(duration = 10, x = 0, y = 0, radiusPercent = 10, color = "grey", fill = true, startAngle = 0, endAngle = 2 * Math.PI) {
        let item = new Circle(duration, x, y, radiusPercent, color, fill, startAngle, endAngle);
        return item;
    }
}
