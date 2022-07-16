import Grid from "../components/grid.js";
import Rect from "../components/rect.js";
import FillRect from "../components/fillRect.js";
import StaticGrid from "../components/staticGrid.js";
import FrameCounter from "../components/frameCounter.js";
import CircleParticles from "../components/circleParticles.js";
import Text from "../components/text.js";
import Pic from "../components/pic.js";
import Line from "../components/line.js";
import RawText from "../components/rawText.js";
import Marker from "../components/marker.js";
import Circle from "../components/circle.js";
export default class CompFactory {
    static circle(colorHax = "red") {
        let g = new Circle(colorHax);
        return g;
    }
    static marker(colorHax = "red") {
        let g = new Marker(colorHax);
        return g;
    }
    static pic(imgId, dynWidth = 10, dynHeight = 10) {
        let g = new Pic(imgId, dynWidth, dynHeight);
        return g;
    }
    static staticGrid(cellWidth = 100, cellHeight = 100, color = "#efe1e1") {
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
    static circleParticles(count = 10, color = "#008000", framesToSkip = 50) {
        let g = new CircleParticles(count, color, framesToSkip);
        return g;
    }
    static rawText(content = "", colorHax = "#000000") {
        let g = new RawText(content, colorHax);
        return g;
    }
    static text(content = "", colorHax = "#000000") {
        let g = new Text(content, colorHax);
        return g;
    }
    static line(x1 = 0, y1 = 0, x2 = 20, y2 = 20, color = "#000000") {
        let g = new Line(x1, y1, x2, y2, color);
        return g;
    }
}
