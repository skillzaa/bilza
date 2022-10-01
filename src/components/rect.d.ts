import { Pack, BaseComponent } from "../bilza.js";
import { AniNumber } from "../animationModule/animations.js";
export default class Rect extends BaseComponent {
    lineWidth: AniNumber;
    constructor(color?: string);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map