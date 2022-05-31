import Grid from "./components/grid/grid.js";
import Rect from "./components/rect/rect.js";
import StaticGrid from "./components/staticGrid/staticGrid.js";
export default class CompFactory {
    static staticGrid(cellWidth: number | undefined, cellHeight: number | undefined, color: string): StaticGrid;
    static grid(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): Grid;
    static rect(color?: string): Rect;
    static fillRect(color?: string): Rect;
}
//# sourceMappingURL=compFactory.d.ts.map