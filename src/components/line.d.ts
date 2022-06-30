import { Pack, BaseComponent, AniNumber } from "../bilza.js";
export default class Line extends BaseComponent {
    x2: AniNumber;
    y2: AniNumber;
    lineWidth: AniNumber;
    color: string;
    constructor(x1?: number, y1?: number, x2?: number, y2?: number, color?: string);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=line.d.ts.map