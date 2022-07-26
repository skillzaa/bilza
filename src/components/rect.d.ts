import { Pack, BaseComponent, AniNumber } from "../bilza.js";
export default class Rect extends BaseComponent {
    lineWidth: AniNumber;
    constructor(color?: string);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map