import Grid from "./grid.js";
import Rect from "./rect.js";
import FillRect from "./fillRect.js";
import StaticGrid from "./staticGrid.js";
import FrameCounter from "./frameCounter.js";
import BgCircles from "./bgCircles.js";
import Line from "./line.js";
export default class CompFactory {
    static staticGrid(cellWidth: number | undefined, cellHeight: number | undefined, color: string): StaticGrid;
    static grid(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): Grid;
    static rect(color?: string): Rect;
    static fillRect(color?: string): FillRect;
    static frameCounter(color?: string): FrameCounter;
    static bgCircles(count?: number, color?: string, delay?: number): BgCircles;
    static Line(x1?: number, y1?: number, x2?: number, y2?: number, color?: string): Line;
}
//# sourceMappingURL=compFactory.d.ts.map