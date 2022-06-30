import { Pack, BaseComponent, AniNumber } from "../bilza.js";
export default class FillRect extends BaseComponent {
    color: string;
    dynWidth: AniNumber;
    dynHeight: AniNumber;
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=fillRect.d.ts.map