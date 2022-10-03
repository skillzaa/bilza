import SpriteSheet from "../../components/spriteSheet/spriteSheet.js";
import SpriteSheetAlt from "../../components/spriteSheet/spriteSheetAlt.js";
import { IComponent } from "../../bilza.js";
export default class CompFactory {
    private readonly startTime;
    private readonly endTime;
    private actionType;
    private insert;
    constructor(startTime: number, endTime: number, actionType: string | undefined, insert: (comp: IComponent, startTime: number, endTime: number, actionType: string) => IComponent);
    arrow(x1?: number, y1?: number, x2?: number, y2?: number, color?: string): any;
    circle(radius?: number, colorHax?: string): any;
    canvasBorder(color?: string, borderWidth?: number): any;
    grid(cellWidthPerc?: number, cellHeightPerc?: number, colorHax?: string): any;
    pic(imgId: string, dynWidth?: number, dynHeight?: number): any;
    rect(color?: string): any;
    spriteSheetAlt(imgUrl: string): SpriteSheetAlt;
    spriteSheet(imgUrl: string, IconWidth: number, IconHeight: number, totalColumns: number, totalRows: number): SpriteSheet;
    text(content?: string, colorHax?: string): any;
    fillRect(color?: string): any;
    frameCounter(Hue_0_to_360?: number): any;
    particleSystem(count?: number, color?: string, framesToSkip?: number): any;
    line(x1?: number, y1?: number, x2?: number, y2?: number, color?: string): any;
    marker(x?: number, y?: number, color?: string, radius?: number): any;
    row(incommingTextArray?: string): any;
    wave(): any;
}
//# sourceMappingURL=compFactory.d.ts.map