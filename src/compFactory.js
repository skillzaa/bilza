import Grid from "./components/grid/grid.js";
import Rect from "./components/rect/rect.js";
export default class CompFactory {
    static grid(colorHax = "grey", cellWidthPerc = 10, cellHeightPerc = 10) {
        let g = new Grid(colorHax, cellWidthPerc, cellHeightPerc);
        return g;
    }
    static rect() {
        let g = new Rect();
        return g;
    }
}
