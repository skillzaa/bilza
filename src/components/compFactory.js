import Grid from "./grid.js";
import Rect from "./rect.js";
import FillRect from "./fillRect.js";
import StaticGrid from "./staticGrid.js";
import FrameCounter from "./frameCounter.js";
import BgCircles from "./bgCircles.js";
import Text from "./text/text.js";
import Pic from "./pic.js";
export default class CompFactory {
    static pic(imgId, dynWidth = 10, dynHeight = 10) {
        let g = new Pic(imgId, dynWidth, dynHeight);
        g.goto(0, 0, 0, g.xAlign.Left, g.yAlign.Top);
        return g;
    }
    static staticGrid(cellWidth = 100, cellHeight = 100, color) {
        let g = new StaticGrid(cellWidth, cellHeight, color);
        g.goto(0, 0, 0, g.xAlign.Left, g.yAlign.Top);
        return g;
    }
    static grid(colorHax = "grey", cellWidthPerc = 10, cellHeightPerc = 10) {
        let g = new Grid(colorHax, cellWidthPerc, cellHeightPerc);
        g.goto(0, 0, 0, g.xAlign.Left, g.yAlign.Top);
        return g;
    }
    static rect(color = "#000000") {
        let g = new Rect(color);
        g.goto(0, 0, 0, g.xAlign.Left, g.yAlign.Top);
        return g;
    }
    static fillRect(color = "#000000") {
        let g = new FillRect(color);
        g.goto(0, 0, 0, g.xAlign.Left, g.yAlign.Top);
        return g;
    }
    static frameCounter(color = "#000000") {
        let g = new FrameCounter(color);
        g.goto(0, 0, 0, g.xAlign.Left, g.yAlign.Top);
        return g;
    }
    static bgCircles(count = 10, color = "#008000", delay = 1) {
        let g = new BgCircles(count, color, delay);
        g.goto(0, 0, 0, g.xAlign.Left, g.yAlign.Top);
        return g;
    }
    static text(content = "", colorHax = "#000000") {
        let g = new Text(content, colorHax);
        g.goto(0, 0, 0, g.xAlign.Left, g.yAlign.Top);
        return g;
    }
}
