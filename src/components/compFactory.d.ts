import Grid from "./grid.js";
import Rect from "./rect.js";
import FillRect from "./fillRect.js";
import StaticGrid from "./staticGrid.js";
import FrameCounter from "./frameCounter.js";
export default class CompFactory {
    static staticGrid(cellWidth: number | undefined, cellHeight: number | undefined, color: string): StaticGrid;
    static grid(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): Grid;
    static rect(color?: string): Rect;
    static fillRect(color?: string): FillRect;
    static frameCounter(color?: string): FrameCounter;
}
//# sourceMappingURL=compFactory.d.ts.map