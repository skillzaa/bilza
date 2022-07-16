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
    static circle(colorHax?: string): Circle;
    static marker(colorHax?: string): Marker;
    static pic(imgId: string, dynWidth?: number, dynHeight?: number): Pic;
    static staticGrid(cellWidth?: number, cellHeight?: number, color?: string): StaticGrid;
    static grid(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): Grid;
    static rect(color?: string): Rect;
    static fillRect(color?: string): FillRect;
    static frameCounter(color?: string): FrameCounter;
    static circleParticles(count?: number, color?: string, framesToSkip?: number): CircleParticles;
    static rawText(content?: string, colorHax?: string): RawText;
    static text(content?: string, colorHax?: string): Text;
    static line(x1?: number, y1?: number, x2?: number, y2?: number, color?: string): Line;
}
//# sourceMappingURL=compFactory.d.ts.map