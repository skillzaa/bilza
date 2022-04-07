import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import FillRect from "../components/fillRect/fillRect.js";
import Counter from "../components/counter/counter.js";
import Circle from "../components/circle/circle.js";
import RandomBgShapes from "../components/randomBgShapes/randomBgShapes.js";
import List from "../components/list/list.js";
import Line from "../components/line/line.js";
import Lines from "../components/lines/lines.js";
import Rect from "../components/rect/rect.js";
import Txt from "../components/txt/txt.js";
import TextComp from "../composites/textComp/textComp.js";
import TextTemplates from "./textTemplates.js";
import GridTemplates from "./gridTemplates.js";
export default class CompFactory {
    constructor(comps = []) {
        this.addToArray = comps;
        this.textTempl = new TextTemplates(comps);
        this.gridTempl = new GridTemplates(comps);
    }
    textComp(content = "Text") {
        let bs = new TextComp(content);
        this.addToArray.push(bs);
        return bs;
    }
    txt(content = "Text") {
        let bs = new Txt(content);
        this.addToArray.push(bs);
        return bs;
    }
    rect() {
        let bs = new Rect();
        this.addToArray.push(bs);
        return bs;
    }
    fillRect() {
        let bs = new FillRect();
        this.addToArray.push(bs);
        return bs;
    }
    lines(x = 0, y = 0) {
        let bs = new Lines(x, y);
        this.addToArray.push(bs);
        return bs;
    }
    line(x1 = 0, y1 = 0, x2 = 100, y2 = 100, color = "black", lineWidth = 2) {
        let bs = new Line(x1, y1, x2, y2, color, lineWidth);
        this.addToArray.push(bs);
        return bs;
    }
    text(content = "", fontColor = "black", fontSize = 40, msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, x = 50, y = 50) {
        let bs = new Text(content, fontColor, fontSize, msStart, msEnd, x, y);
        this.addToArray.push(bs);
        return bs;
    }
    list(x = 10, y = 10, fontSize = 30, msStart = 0, msEnd = 80000) {
        let bs = new List(x, y, fontSize, msStart, msEnd);
        this.addToArray.push(bs);
        return bs;
    }
    grid(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        let g = new Grid(msStart, msEnd);
        this.addToArray.push(g);
        return g;
    }
    counter(x = 100, y = 100, msEnd = Number.MAX_SAFE_INTEGER) {
        let item = new Counter();
        item.d.x = x;
        item.d.y = y;
        this.addToArray.push(item);
        return item;
    }
    circle(x = 100, y = 100) {
        let item = new Circle();
        item.d.x = x;
        item.d.y = y;
        this.addToArray.push(item);
        return item;
    }
    randomBgShapes() {
        let item = new RandomBgShapes();
        this.addToArray.push(item);
        return item;
    }
    spit() { return this.addToArray; }
}
