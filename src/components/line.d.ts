import { Pack, BaseComponent, AniNumber } from "../Bilza.js";
import AniNoXPerc from "../animations/aniNoPerc/AniNoXPerc.js";
import AniNoYPerc from "../animations/aniNoPerc/AniNoYPerc.js";
export default class Line extends BaseComponent {
    x2: AniNoXPerc;
    y2: AniNoYPerc;
    lineWidth: AniNumber;
    color: string;
    constructor(x1?: number, y1?: number, x2?: number, y2?: number, color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=line.d.ts.map