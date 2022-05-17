import { Pack } from "../../../Bilza.js";
import Component from "../../../BaseComponent/Basecomponent.js";
import { ObjectData } from "./DataFn.js";
export default class Grid extends Component<ObjectData> {
    constructor(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number);
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
    drawText(p: Pack, content: number, x: number, y: number): void;
}
//# sourceMappingURL=grid.d.ts.map