import { Pack, BaseComponent, AniNumber, FontFamily } from "../bilza.js";
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