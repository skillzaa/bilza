import Grid from "./components/grid/grid.js";
import Rect from "./components/rect/rect.js";
import StaticGrid from "./components/staticGrid/staticGrid.js";
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
        let g = new Rect(color);
        return g;
    }
}
