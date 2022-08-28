import Grid from "../components/grid.js";
import Rect from "../components/rect.js";
import FillRect from "../components/fillRect.js";
import StaticGrid from "../components/staticGrid.js";
import FrameCounter from "../components/frameCounter.js";
import ParticleSystem from "../components/particleSystem.js";
import Text from "../components/text.js";
import Pic from "../components/pic.js";
import Line from "../components/line.js";
import Marker from "../components/marker.js";
import Circle from "../components/circle.js";
import Icon from "../components/icon.js";
import Row from "../container/row.js";
import SpriteSheet from "../components/spriteSheet/spriteSheet.js";
import SpriteSheetAlt from "../components/spriteSheet/spriteSheetAlt.js";
export default class CompFactory {
    static spriteSheetAlt(imgUrl) {
        let g = new SpriteSheetAlt(imgUrl);
        return g;
    }
    static spriteSheet(imgUrl, IconWidth, IconHeight, totalColumns, totalRows) {
        let g = new SpriteSheet(imgUrl, IconWidth, IconHeight, totalColumns, totalRows);
        return g;
    }
    static icon(code = 9876, colorHax = "#008000") {
        let g = new Icon(code, colorHax);
        return g;
    }
    static circle(radius = 10, colorHax = "red") {
        let g = new Circle(radius, colorHax);
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
    static grid(cellWidthPerc = 10, cellHeightPerc = 10, colorHax = "grey") {
        let g = new Grid(cellWidthPerc, cellHeightPerc, colorHax);
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
    static particleSystem(count = 10, color = "#008000", framesToSkip = 50) {
        let g = new ParticleSystem(count, color, framesToSkip);
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
    static row(incommingTextArray = "one two") {
        let g = new Row(incommingTextArray);
        return g;
    }
}
