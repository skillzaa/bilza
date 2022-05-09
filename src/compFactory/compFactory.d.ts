import { IComponent, Pack } from "../Bilza.js";
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import FillRect from "../components/fillRect/fillRect.js";
import Rect from "../components/rect/rect.js";
import Image from "../components/image/image.js";
import Counter from "../components/counter/counter.js";
export default class CompFactory {
    private insert;
    private pack;
    constructor(insert: (comp: IComponent) => IComponent, pack: Pack);
    text(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string, x?: number, y?: number, dynWidth?: number, dynHeight?: number): Text;
    grid(msStart?: number, msEnd?: number, colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): Grid;
    counter(msStart?: number, msEnd?: number, loc?: string): Counter;
    rect(startTimeSeconds?: number, endTimeSeconds?: number, x?: number, y?: number, widthPercent?: number, heightPercent?: number, colorHex?: string): Rect;
    fillRect(startTimeSeconds?: number, endTimeSeconds?: number, x?: number, y?: number, widthPercent?: number, heightPercent?: number, colorHex?: string): FillRect;
    Image(startTimeSeconds: number | undefined, endTimeSeconds: number | undefined, imgId: string, x?: number, y?: number): Image;
}
//# sourceMappingURL=compFactory.d.ts.map