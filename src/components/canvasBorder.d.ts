import { Pack, BaseComponent } from "../bilza.js";
import { AniNumber } from "../animationModule/animations.js";
export default class CanvasBorder extends BaseComponent {
    borderWidth: AniNumber;
    constructor(color?: string, borderWidth?: number);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=canvasBorder.d.ts.map