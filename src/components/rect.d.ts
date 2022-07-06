import { Pack, BaseComponent, AniNumber } from "../Bilza.js";
export default class Rect extends BaseComponent {
    color: string;
    lineWidth: AniNumber;
    constructor(color?: string);
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map