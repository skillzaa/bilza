import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import Counter from "../components/counter/counter.js";
import Circle from "../components/circle/circle.js";
import RandomBgShapes from "../components/randomBgShapes/randomBgShapes.js";
import List from "../components/list/list.js";
import AddTextTemplates from "./addTextTemplates.js";
export default class CompFactory {
    constructor(comps = []) {
        this.addToArray = comps;
        this.textTempl = new AddTextTemplates(comps);
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
    }
    circle(x = 100, y = 100) {
        let item = new Circle();
        item.d.x = x;
        item.d.y = y;
        this.addToArray.push(item);
    }
    randomBgShapes() {
        let item = new RandomBgShapes();
        this.addToArray.push(item);
    }
    spit() { return this.addToArray; }
}
