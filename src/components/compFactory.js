import Grid from "./grid.js";
import Rect from "./rect.js";
import FillRect from "./fillRect.js";
import StaticGrid from "./staticGrid.js";
import FrameCounter from "./frameCounter.js";
import BgCircles from "./bgCircles.js";
import Line from "./line.js";
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
    static Line(x1 = 0, y1 = 0, x2 = 20, y2 = 20, color = "#000000") {
        let g = new Line(x1, y1, x2, y2, color);
        return g;
    }
}
