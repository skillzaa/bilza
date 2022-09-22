import Grid from "../../components/grid.js";
import Rect from "../../components/rect.js";
import FillRect from "../../components/fillRect.js";
import FrameCounter from "../../components/frameCounter.js";
import ParticleSystem from "../../components/particleSystem.js";
import Text from "../../components/text/text.js";
import Pic from "../../components/pic.js";
import Line from "../../components/line.js";
import Circle from "../../components/circle.js";
import CanvasBorder from "../../components/canvasBorder.js";
import Wave from "../../components/wave.js";
import Arrow from "../../components/arrow.js";
import Row from "../../container/row.js";
import SpriteSheet from "../../components/spriteSheet/spriteSheet.js";
import SpriteSheetAlt from "../../components/spriteSheet/spriteSheetAlt.js";
import { IComponent } from "../../bilza.js";
export default class CompFactory {
    private readonly startTime;
    private readonly endTime;
    private actionType;
    private insert;
    constructor(startTime: number, endTime: number, actionType: string | undefined, insert: (comp: IComponent, startTime: number, endTime: number, actionType: string) => IComponent);
    arrow(x1?: number, y1?: number, x2?: number, y2?: number, color?: string): Arrow;
    circle(radius?: number, colorHax?: string): Circle;
    canvasBorder(color?: string, borderWidth?: number): CanvasBorder;
    grid(cellWidthPerc?: number, cellHeightPerc?: number, colorHax?: string): Grid;
    pic(imgId: string, dynWidth?: number, dynHeight?: number): Pic;
    rect(color?: string): Rect;
    spriteSheetAlt(imgUrl: string): SpriteSheetAlt;
    spriteSheet(imgUrl: string, IconWidth: number, IconHeight: number, totalColumns: number, totalRows: number): SpriteSheet;
    text(content?: string, colorHax?: string): Text;
    fillRect(color?: string): FillRect;
    frameCounter(Hue_0_to_360?: number): FrameCounter;
    particleSystem(count?: number, color?: string, framesToSkip?: number): ParticleSystem;
    line(x1?: number, y1?: number, x2?: number, y2?: number, color?: string): Line;
    row(incommingTextArray?: string): Row;
    wave(): Wave;
}
//# sourceMappingURL=compFactory.d.ts.map