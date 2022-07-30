import Grid from "../components/grid.js";
import Rect from "../components/rect.js";
import FillRect from "../components/fillRect.js";
import StaticGrid from "../components/staticGrid.js";
import FrameCounter from "../components/frameCounter.js";
import ParticleSystem from "../components/particleSystem.js";
import Text from "../components/text.js";
import RawText from "../components/rawText.js";
import Pic from "../components/pic.js";
import Line from "../components/line.js";
import Marker from "../components/marker.js";
import Circle from "../components/circle.js";
import Icon from "../components/icon.js";
import Row from "../container/row.js";
import SpriteSheet from "../components/spriteSheet/spriteSheet.js";
export default class CompFactory {
    static spriteSheet(imgUrl: string, IconWidth: number, IconHeight: number, totalColumns: number, totalRows: number): SpriteSheet;
    static icon(code?: number, colorHax?: string): Icon;
    static circle(colorHax?: string): Circle;
    static marker(colorHax?: string): Marker;
    static pic(imgId: string, dynWidth?: number, dynHeight?: number): Pic;
    static staticGrid(cellWidth?: number, cellHeight?: number, color?: string): StaticGrid;
    static grid(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): Grid;
    static rect(color?: string): Rect;
    static fillRect(color?: string): FillRect;
    static frameCounter(color?: string): FrameCounter;
    static particleSystem(count?: number, color?: string, framesToSkip?: number): ParticleSystem;
    static text(content?: string, colorHax?: string): Text;
    static rawText(content?: string, colorHax?: string): RawText;
    static line(x1?: number, y1?: number, x2?: number, y2?: number, color?: string): Line;
    static row(incommingTextArray?: string): Row;
}
//# sourceMappingURL=compFactory.d.ts.map