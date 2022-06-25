import { Pack, BaseComponent, AniNumber } from "../bilza.js";
export default class Rect extends BaseComponent {
    dynWidth: AniNumber;
    dynHeight: AniNumber;
    lineWidth: AniNumber;
    color: string;
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    width(): number;
    height(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map