import { Pack, BaseComponent, FontFamily } from "../bilza.js";
import { AniNumber } from "../animationModule/animations.js";
export default class Icon extends BaseComponent {
    code: number;
    fontFamily: FontFamily;
    fontSize: AniNumber;
    constructor(code?: number, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    contentHeight(): number;
    contentWidth(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=icon.d.ts.map