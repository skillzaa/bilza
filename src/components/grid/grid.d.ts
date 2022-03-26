import { Component, Pack } from "../../index.js";
import { ObjectData } from "./DataFn.js";
export default class Grid extends Component<ObjectData> {
    constructor(msStart?: number, msEnd?: number);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    draw_horizontal(p: Pack): void;
    draw_vertical(p: Pack): void;
    drawText(p: Pack, content: number, x: number, y: number): void;
}
//# sourceMappingURL=grid.d.ts.map