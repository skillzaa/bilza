import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
export default class CompFactory {
    constructor(insert) {
        this.insert = insert;
    }
    text(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", x = 0, y = 0) {
        let bs = new Text(startTimeSeconds, endTimeSeconds, content, color, x, y);
        this.insert(bs);
        return bs;
    }
    grid(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        let g = new Grid(msStart, msEnd);
        this.insert(g);
        return g;
    }
}
