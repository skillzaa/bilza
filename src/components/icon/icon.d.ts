import { Pack, BaseComponent, AniNumber } from "../../bilza.js";
export default class Icon extends BaseComponent {
    code: number;
    fontSize: AniNumber;
    constructor(code?: number, colorHax?: string);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=icon.d.ts.map