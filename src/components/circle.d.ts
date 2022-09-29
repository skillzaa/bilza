import { Pack, BaseComponent } from "../bilza.js";
import { AniNumber, AniBoolean } from "../animationModule/animations.js";
export default class Circle extends BaseComponent {
    startAngle: AniNumber;
    endAngle: AniNumber;
    filled: AniBoolean;
    lineWidth: AniNumber;
    constructor(radius?: number, color?: string);
    contentHeight(): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=circle.d.ts.map