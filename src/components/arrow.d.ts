import { Pack, BaseComponent } from "../bilza.js";
import { AniNumber, AniPerc, AniBoolean, AniColor } from "../animationModule/animations.js";
export default class Arrow extends BaseComponent {
    x2: AniPerc | AniNumber;
    y2: AniPerc | AniNumber;
    headWidth: AniNumber;
    headHeight: AniNumber;
    headFilled: AniBoolean;
    colorHead: AniColor;
    lineWidth: AniNumber;
    constructor(x1?: number, y1?: number, x2?: number, y2?: number, color?: string);
    setRespLoc(tf?: boolean): boolean;
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    compWidth(): number;
    compHeight(): number;
    align(x?: number | null, y?: number | null): void;
    alignRotate(x?: number | null, y?: number | null): void;
}
//# sourceMappingURL=arrow.d.ts.map