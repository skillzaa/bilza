import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import RGrid from "../components/rGrid/rGrid.js";
import FillRect from "../components/fillRect/fillRect.js";
import Counter from "../components/counter/counter.js";
import Circle from "../components/circle/circle.js";
import BgShapes from "../components/bgShapes/bgShapes.js";
import Line from "../components/line/line.js";
import Lines from "../components/lines/lines.js";
import Rect from "../components/rect/rect.js";
import SlideHL from "../components/slideHL/slideHL.js";
export default class CompFactory {
    constructor(insert) {
        this.insert = insert;
    }
    slideHL(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, contentHdg = "The Title", themeColor = "#00ff37") {
        let bs = new SlideHL(startTimeSeconds, endTimeSeconds, contentHdg, themeColor);
        this.insert(bs);
        return bs;
    }
    bgShapes(count = 100) {
        let bs = new BgShapes();
        this.insert(bs);
        return bs;
    }
    text(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", x = 0, y = 0) {
        let bs = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y);
        this.insert(bs);
        return bs;
    }
    rect() {
        let bs = new Rect();
        this.insert(bs);
        return bs;
    }
    fillRect() {
        let bs = new FillRect();
        this.insert(bs);
        return bs;
    }
    lines(x = 0, y = 0) {
        let bs = new Lines(x, y);
        this.insert(bs);
        return bs;
    }
    line(x1 = 0, y1 = 0, x2 = 100, y2 = 100, color = "black", lineWidth = 2) {
        let bs = new Line(x1, y1, x2, y2, color, lineWidth);
        this.insert(bs);
        return bs;
    }
    grid(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        let g = new Grid(msStart, msEnd);
        this.insert(g);
        return g;
    }
    rGrid(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        let g = new RGrid(msStart, msEnd);
        this.insert(g);
        return g;
    }
    counter(x = 100, y = 100, msEnd = Number.MAX_SAFE_INTEGER) {
        let item = new Counter();
        item.d.x = x;
        item.d.y = y;
        this.insert(item);
        return item;
    }
    circle(x = 100, y = 100) {
        let item = new Circle();
        item.d.x = x;
        item.d.y = y;
        this.insert(item);
        return item;
    }
}
