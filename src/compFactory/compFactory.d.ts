import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import FillRect from "../components/fillRect/fillRect.js";
import Rect from "../components/rect/rect.js";
import Image from "../components/image/image.js";
import Counter from "../components/counter/counter.js";
import Line from "../components/line/line.js";
import Circle from "../components/circle/circle.js";
export default class CompFactory {
    constructor();
    text(duration?: number, content?: string, colorHax?: string, x?: number, y?: number, dynWidth?: number, dynHeight?: number): Text;
    grid(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): Grid;
    counter(duration?: number, loc?: string): Counter;
    rect(startTime?: number, duration?: number, x?: number, y?: number, widthPercent?: number, heightPercent?: number, colorHex?: string): Rect;
    fillRect(startTime?: number, duration?: number, x?: number, y?: number, widthPercent?: number, heightPercent?: number, colorHex?: string): FillRect;
    Image(duration: number | undefined, imgId: string, x?: number, y?: number): Image;
    line(duration?: number, x1?: number, y1?: number, x2?: number, y2?: number, color?: string, lineWidth?: number): Line;
    circle(duration?: number, x?: number, y?: number, radiusPercent?: number, color?: string, fill?: boolean, startAngle?: number, endAngle?: number): Circle;
}
//# sourceMappingURL=compFactory.d.ts.map