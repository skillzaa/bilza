import { Pack, BaseComponent } from "../bilza.js";
import { AniNumber, AniBoolean, AniColor } from "../animationModule/animations.js";
export default class ParticleSystem extends BaseComponent {
    private skipXFrames;
    private xyArray;
    count: AniNumber;
    particleSize: AniNumber;
    lineWidth: AniNumber;
    filled: AniBoolean;
    lineColor: AniColor;
    constructor(count?: number, color?: string, delay?: number);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private getRandomXY;
}
//# sourceMappingURL=particleSystem.d.ts.map