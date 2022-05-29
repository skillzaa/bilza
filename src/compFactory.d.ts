import Grid from "./components/grid/grid.js";
import Rect from "./components/rect/rect.js";
export default class CompFactory {
    static grid(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): Grid;
    static rect(): Rect;
}
//# sourceMappingURL=compFactory.d.ts.map