import Grid from "./grid.js";
import Rect from "./rect.js";
import FillRect from "./fillRect.js";
import StaticGrid from "./staticGrid.js";
import FrameCounter from "./frameCounter.js";
import BgCircles from "./bgCircles.js";
import Text from "./text/text.js";
import Pic from "./pic.js";
import PlainText from "./plainText.js";
export default class CompFactory {
    static pic(imgId: string, dynWidth?: number, dynHeight?: number): Pic;
    static staticGrid(cellWidth: number | undefined, cellHeight: number | undefined, color: string): StaticGrid;
    static grid(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): Grid;
    static rect(color?: string): Rect;
    static fillRect(color?: string): FillRect;
    static frameCounter(color?: string): FrameCounter;
    static bgCircles(count?: number, color?: string, delay?: number): BgCircles;
    static plainText(content?: string, colorHax?: string): PlainText;
    static text(content?: string, colorHax?: string): Text;
}
//# sourceMappingURL=compFactory.d.ts.map