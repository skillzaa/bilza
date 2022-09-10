import Grid from "../components/grid.js";
import Rect from "../components/rect.js";
import FillRect from "../components/fillRect.js";
import FrameCounter from "../components/frameCounter.js";
import ParticleSystem from "../components/particleSystem.js";
import Text from "../components/text.js";
import Pic from "../components/pic.js";
import Line from "../components/line.js";
import Circle from "../components/circle.js";
import CanvasBorder from "../components/canvasBorder.js";
import Slide from "../slide/slide.js";
import Row from "../container/row.js";
import SpriteSheet from "../components/spriteSheet/spriteSheet.js";
import SpriteSheetAlt from "../components/spriteSheet/spriteSheetAlt.js";
import Scenes from "./scenes.js";
export default class CompFactory {
    static scenes: typeof Scenes;
    static spriteSheetAlt(imgUrl: string): SpriteSheetAlt;
    static slide(startTime: number, endTime: number, themeHue_0_to_360?: number): Slide;
    static spriteSheet(imgUrl: string, IconWidth: number, IconHeight: number, totalColumns: number, totalRows: number): SpriteSheet;
    static circle(radius?: number, colorHax?: string): Circle;
    static canvasBorder(color?: string, borderWidth?: number): CanvasBorder;
    static pic(imgId: string, dynWidth?: number, dynHeight?: number): Pic;
    static grid(cellWidthPerc?: number, cellHeightPerc?: number, colorHax?: string): Grid;
    static rect(color?: string): Rect;
    static fillRect(color?: string): FillRect;
    static frameCounter(Hue_0_to_360?: number): FrameCounter;
    static particleSystem(count?: number, color?: string, framesToSkip?: number): ParticleSystem;
    static text(content?: string, colorHax?: string): Text;
    static line(x1?: number, y1?: number, x2?: number, y2?: number, color?: string): Line;
    static row(incommingTextArray?: string): Row;
}
//# sourceMappingURL=compFactory.d.ts.map