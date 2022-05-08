import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import Counter from "../components/counter/counter.js";
export default class CompFactory {
    constructor(insert) {
        this.insert = insert;
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
}
