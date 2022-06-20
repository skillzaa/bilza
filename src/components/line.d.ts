import { Pack, BaseComponent } from "../Bilza.js";
export default class Line extends BaseComponent {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    lineWidth: number;
    color: string;
    constructor(x1?: number, y1?: number, x2?: number, y2?: number, color?: string);
    draw(p: Pack): boolean;
}
//# sourceMappingURL=line.d.ts.map