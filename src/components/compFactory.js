import Grid from "./grid.js";
import Rect from "./rect.js";
import FillRect from "./fillRect.js";
import StaticGrid from "./staticGrid.js";
import FrameCounter from "./frameCounter.js";
import BgCircles from "./bgCircles.js";
import Text from "./text.js";
export default class CompFactory {
    static staticGrid(cellWidth = 100, cellHeight = 100, color) {
        let g = new StaticGrid(cellWidth, cellHeight, color);
        return g;
    }
    static grid(colorHax = "grey", cellWidthPerc = 10, cellHeightPerc = 10) {
        let g = new Grid(colorHax, cellWidthPerc, cellHeightPerc);
        return g;
    }
    static rect(color = "#000000") {
        let g = new Rect(color);
        return g;
    }
    static fillRect(color = "#000000") {
        let g = new FillRect(color);
        return g;
    }
    static frameCounter(color = "#000000") {
        let g = new FrameCounter(color);
        return g;
    }
    static bgCircles(count = 10, color = "#008000", delay = 1) {
        let g = new BgCircles(count, color, delay);
        return g;
    }
    static text(content = "", colorHax = "#000000", x = 0, y = 0, dynWidth = 30) {
        let g = new Text(content, colorHax, dynWidth);
        return g;
    }
}
