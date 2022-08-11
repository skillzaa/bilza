import { Pack, BaseComponent, AniNumber } from "../bilza.js";
import AniNoPerc from "../animationsXX/aniNoPerc/AniNoPerc.js";
export default class Line extends BaseComponent {
    x2: AniNoPerc;
    y2: AniNoPerc;
    lineWidth: AniNumber;
    constructor(x1?: number, y1?: number, x2?: number, y2?: number, color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=line.d.ts.map