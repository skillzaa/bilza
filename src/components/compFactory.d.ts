import Grid from "./grid.js";
import Rect from "./rect.js";
import FillRect from "./fillRect.js";
import StaticGrid from "./staticGrid.js";
import FrameCounter from "./frameCounter.js";
import CircleParticles from "./circleParticles.js";
import Text from "./text.js";
import Pic from "./pic.js";
import Line from "./line.js";
import RawText from "./rawText.js";
import PlainText from "./plainText.js";
import Marker from "./marker.js";
import Circle from "./circle.js";
export default class CompFactory {
    static circle(colorHax?: string): Circle;
    static marker(colorHax?: string): Marker;
    static pic(imgId: string, dynWidth?: number, dynHeight?: number): Pic;
    static staticGrid(cellWidth?: number, cellHeight?: number, color?: string): StaticGrid;
    static grid(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): Grid;
    static rect(color?: string): Rect;
    static fillRect(color?: string): FillRect;
    static frameCounter(color?: string): FrameCounter;
    static circleParticles(count?: number, color?: string, framesToSkip?: number): CircleParticles;
    static plainText(content?: string, colorHax?: string): PlainText;
    static rawText(content?: string, colorHax?: string): RawText;
    static text(content?: string, colorHax?: string): Text;
    static line(x1?: number, y1?: number, x2?: number, y2?: number, color?: string): Line;
}
//# sourceMappingURL=compFactory.d.ts.map